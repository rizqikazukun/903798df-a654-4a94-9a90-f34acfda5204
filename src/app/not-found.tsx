/* eslint-disable @next/next/no-img-element */
'use server'
import Link from 'next/link'

export default async function notFound() {
    return (
        <div id='not-found'>
            <div className='mx-auto md:my-8 py-28 px-10 max-w-[800px] bg-white border 
                      shadow-sm rounded-lg flex flex-col justify-center items-center gap-5'>
                <img src="/assets/images/wooz-logo.svg" alt="logo" className='h-20' />
                <p className=' font-medium'>We&apos;re sorry page you visit is not found</p>

                <Link href="/#">
                    <button className='woozify-button border shadow-sm py-2 px-4 rounded-full hover:font-bold text-white'>
                        Back To Home
                    </button>
                </Link>

            </div>
        </div>
    )
}
