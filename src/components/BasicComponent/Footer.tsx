/* eslint-disable @next/next/no-img-element */
'use server'
import Link from 'next/link'
import React from 'react'

export async function Footer(): Promise<JSX.Element> {
    return (
        <footer>
            <Link href='/#'>
                <img className=" h-14" src="/assets/images/wooz-logo.svg" alt="logo" />
            </Link>
            <p className='font-medium text-center'>
                Wooz is a Test Base Project. Build by Rizqi Pratama. ©2024
            </p>
            <Link href='https://portfolio-rizqi-pratama.vercel.app' target='_blank'>
                <img className=" h-14" src="/assets/images/rizqipratama-logo.svg" alt="logo" />
            </Link>
        </footer>
    )
}
