/* eslint-disable @next/next/no-img-element */
'use server'
import React from 'react'
import { LoginForm } from '@/components'
import { BeURL } from '@/lib/Config'
import { BlockIfLogin, BlockIfNotLogin } from '@/lib/ServerAction'


export default async function Signin(): Promise<JSX.Element> {
  
  await BlockIfLogin()

  return (
    <div id='login'>
      <div className='login-register-container'>
        <img src="/assets/images/wooz-logo.svg" alt="logo" className='h-20' />
        <p className='font-bold text-2xl'>Login</p>
        <LoginForm BeURL={BeURL} />
      </div>
    </div>
  )
}
