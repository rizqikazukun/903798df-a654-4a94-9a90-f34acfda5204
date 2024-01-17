/* eslint-disable @next/next/no-img-element */
import React from 'react'

export function Navbar() { 



    return (
        <nav>
            <div className='container mx-auto flex justify-between items-center px-10 h-20 rounded-b-lg bg-white shadow-sm max-w-[1200px]'>
                <div id="left-nav">
                    <div className=" h-full">
                        <img className=" h-12" src="/assets/images/wooz-logo.svg" alt="logo" />
                    </div>
                </div>
                <div id="right-nav">
                    <button className='woozify-button p-2 rounded-full font-medium hover:font-bold text-white w-[180px]'>
                        Sign up for free
                    </button>
                </div>
            </div>
        </nav>
    )
}
