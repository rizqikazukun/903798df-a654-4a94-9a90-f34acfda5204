/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import * as AntIcons from '@ant-design/icons'
import QRCode from "react-qr-code";
import d3ToPng from 'd3-svg-to-png'
import { ComponentPassingType, ShortUrlResultType } from '@/lib/TypeInterface';
import axios from 'axios';

import { getCookie } from 'cookies-next';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Link from 'next/link';
import Countdown from 'react-countdown';
import { GetSessionId } from '@/lib/ServerAction';

export function WoozService(props: ComponentPassingType): JSX.Element {
    const AppURL: string | undefined = props.AppURL
    const BeURL: string | undefined = props.BeURL
    const [original_url, setOriginalUrl]: [string, any] = React.useState('')
    const [generatedUrl, setGeneratedUrl]: [Array<ShortUrlResultType>, any] = React.useState([])

    const checkSessionID = React.useCallback(async () => {
        try {
            await GetSessionId()
        } catch (error) {
            console.log(error)
        }
    }, [])

    const generateShortUrlHandler = React.useCallback(async () => {
        try {
            const session_id = getCookie('session_id')
            const GenerateURL: any = await axios({
                method: 'post',
                url: `${BeURL}/shortener/guest`,
                data: {
                    url: original_url,
                    session_id
                }
            })

            if (generatedUrl.length === 0) {
                setGeneratedUrl([GenerateURL.data.data])
            } else {
                setGeneratedUrl([...generatedUrl, GenerateURL.data.data])
            }
        } catch (error: any) {
            console.log(error)
            alert(error?.message)
        }
    }, [BeURL, generatedUrl, original_url])


    const qrDownloadHandler = React.useCallback(async (selector: string, imageName: string): Promise<void> => {
        await d3ToPng(selector, imageName, {
            scale: 4,
            format: 'png',
            download: true
        })
    }, [])


    React.useEffect(() => {
        checkSessionID()
    }, [checkSessionID])


    return (
        <section id="feature" className="container mx-auto my-10 flex flex-col bg-white justify-center
                                        items-center rounded-lg border shadow-sm max-w-[1000px] p-10 gap-10">
            <img className="h-40" src="/assets/images/wooz-logo.svg" alt="logo" />
            <h1 id='hero-text' className="text-center text-3xl font-bold max-w-[700px]">
                Woozify your URL!
            </h1>

            <div className="flex gap-5 w-full flex-wrap justify-center">
                <input className=" flex-grow outline-none bg-page-background rounded-full p-2 border" type="text"
                    placeholder="Input your worse url make it woozie"
                    onChange={e => setOriginalUrl(e.target.value)} />
                <button className="woozify-button p-2 rounded-full font-medium hover:font-bold text-white w-[100px]"
                    onClick={generateShortUrlHandler}>
                    Woozify
                </button>
            </div>

            <div id="shortener-result" className="p-4 flex flex-col w-full">
                {
                    generatedUrl.length === 0 ? null
                        : generatedUrl.map((url, index) => (
                            <div key={index} className=" border rounded-lg flex flex-wrap justify-between items-center content-center p-5 m-2 gap-2">

                                <div className='flex flex-wrap gap-5'>

                                    <QRCode className='mx-auto'
                                        size={100}
                                        id={`QR-${url.url_short}`}
                                        value={`${AppURL}/${url.url_short}`} />

                                    <div className="flex flex-col justify-center gap-1 min-w-[100px] max-w-[400px]">
                                        <Link className='hover:text-red-800 break-all font-bold' href={`${AppURL}/${url.url_short}`}>
                                            {`${AppURL}/${url.url_short}`}
                                        </Link>
                                        <p className="break-all">
                                            {url.url_original.slice(0, 80)}...
                                        </p>
                                        <p>
                                            Expire : <Countdown date={Number(url.url_ttl)} />
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-2">

                                    <button className="flex rounded-full p-2 gap-2 border items-center hover:text-red-800 hover:border-red-700"
                                        onClick={() => { qrDownloadHandler(`#QR-${url.url_short}`, `QR-${url.url_original}`) }}>
                                        <AntIcons.CloudDownloadOutlined /> <p>Download QR</p>
                                    </button>

                                    <CopyToClipboard text={`${AppURL}/${url.url_short}`}>
                                        <button className="flex rounded-full p-2 gap-2 border items-center hover:text-red-800 hover:border-red-700">
                                            <AntIcons.CopyOutlined /> <p>Copy URL</p>
                                        </button>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        ))
                }
            </div>
        </section>
    )
}
