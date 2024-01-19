/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import axios from 'axios';
import { ComponentPassingType, ShortUrlResultType } from '@/lib/TypeInterface';
import { getCookie } from 'cookies-next';
import { GetSessionId } from '@/lib/ServerAction';
import ShortResultCard from '../Card/ShortResultCard';

export function WoozService(props: ComponentPassingType): JSX.Element {
    const BeURL: string | undefined = props.BeURL
    const AppURL: string | undefined = props.AppURL
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
                            <ShortResultCard key={index} data={url} AppURL={AppURL} BeURL={BeURL} />
                        ))
                }
            </div>
        </section>
    )
}
