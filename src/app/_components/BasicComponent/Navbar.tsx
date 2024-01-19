'use server'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { Logout } from '..'

export async function Navbar(): Promise<JSX.Element> {

    const isLogin: boolean = cookies().has('refreshToken')

    return (
        <nav className='sticky top-0'>
            <div className='container mx-auto flex justify-between items-center px-10 h-20 rounded-b-lg bg-white shadow-sm max-w-[1200px]'>
                <div id="left-nav">
                    <div className=" h-full">
                        <Link href="/#">
                            <img className=" h-12" src="/assets/images/wooz-logo.svg" alt="logo" />
                        </Link>
                    </div>
                </div>
                {
                    isLogin ? null :
                        <div id="right-nav-not-login" className='flex gap-2'>
                            <Link href="/user/login">
                                <button className='p-2 rounded-full font-medium hover:font-bold text-gray-700 hover:text-red-700 border hover:border-red-600 w-[180px]'>
                                    Sign in
                                </button>
                            </Link>
                            <Link href="/user/register">
                                <button className='woozify-button p-2 rounded-full font-medium hover:font-bold text-white w-[180px]'>
                                    Register for free
                                </button>
                            </Link>
                        </div>
                }
                {
                    !isLogin ? null :
                        <div id="right-nav-not-login" className='flex gap-2'>
                            <Link href="/user/dashboard">
                                <button className='p-2 rounded-full font-medium hover:font-bold text-gray-700 hover:text-red-700 border hover:border-red-600 w-[180px]'>
                                    Dashboard
                                </button>
                            </Link>
                            <Logout className='p-2 rounded-full font-medium hover:font-bold text-gray-700 hover:text-red-700 border hover:border-red-600 w-[180px]' />
                        </div>
                }
            </div>
        </nav>
    )
}
