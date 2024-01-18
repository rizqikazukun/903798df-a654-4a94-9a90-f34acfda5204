/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import * as AntIcons from '@ant-design/icons'
import QRCode from "react-qr-code";
import d3ToPng from 'd3-svg-to-png'
import { ComponentPassingType } from '@/lib/TypeInterface';

export function ShortUrl(props: ComponentPassingType): JSX.Element {

    const AppURL: string | undefined = props.AppURL

    const download = React.useCallback(async (selector: string, imageName: string): Promise<void> => {
        await d3ToPng(selector, imageName, {
            scale: 4,
            format: 'png',
            download: true
        })
    }, [])


    return (
        <section id="feature" className="container mx-auto my-10 flex flex-col bg-white justify-center
                                        items-center rounded-lg border shadow-sm max-w-[1000px] p-10 gap-10">
            <img className="h-40" src="/assets/images/wooz-logo.svg" alt="logo" />
            <h1 id='hero-text' className="text-center text-3xl font-bold max-w-[700px]">
                Woozify your URL!
            </h1>

            <div className="flex gap-5 w-full flex-wrap justify-center">
                <input className=" flex-grow outline-none bg-page-background rounded-full p-2 border" type="text"
                    placeholder="Input your worse url make it woozie" />
                <button className="woozify-button p-2 rounded-full font-medium hover:font-bold text-white w-[100px]">
                    Woozify
                </button>
            </div>

            <div id="shortener-result" className="p-4 flex flex-col w-full">
                <div className=" border rounded-lg flex justify-between items-center p-5">
                    <div className="flex gap-5">
                        <div >
                            <QRCode size={100} id="asd78" value={"http://localhost:3000"} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className=" font-bold">
                                Short Url : {AppURL}/Hu67
                            </p>
                            <p className=" break-all">Original Url :
                                {'https://www.google.com/search?q=the+best+app+shortener&sca_esv=598740777&ei=FEKmZcvZLoKE4-EPo8aY8AI&ved='.slice(0, 80)}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <button className="flex rounded-full p-2 items-center" onClick={() => {
                            download('#asd78', 'QR')
                        }}>
                            <AntIcons.CopyFilled className=" text-gray-500" /> <p>Copy</p>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}
