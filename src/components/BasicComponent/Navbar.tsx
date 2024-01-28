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
            <div id='navbar-container'>
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
                                <button className='outlined-btn'>
                                    Sign in
                                </button>
                            </Link>
                            <Link href="/user/register">
                                <button className='woozify-custom-1-button'>
                                    Register for free
                                </button>
                            </Link>
                        </div>
                }
                {
                    !isLogin ? null :
                        <div id="right-nav-not-login" className='flex gap-2'>
                            <Link href="/user/dashboard">
                                <button className='outlined-btn'>
                                    Dashboard
                                </button>
                            </Link>
                            <Logout className='outlined-btn' />
                        </div>
                }
            </div>
        </nav>
    )
}
