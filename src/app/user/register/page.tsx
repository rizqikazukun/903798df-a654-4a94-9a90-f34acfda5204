/* eslint-disable @next/next/no-img-element */
'use server'
import React from 'react'
import { RegisterForm } from '@/components'
import { BeURL } from '@/lib/Config'
import { BlockIfLogin } from '@/lib/ServerAction'

export default async function Register(): Promise<JSX.Element> {

  await BlockIfLogin()

  return (
    <div className='login-register-container'>
        <img src="/assets/images/wooz-logo.svg" alt="logo" className='h-20' />
        <p className='font-bold text-2xl'>Register</p>
        <RegisterForm BeURL={BeURL} />
    </div>
  )
}
