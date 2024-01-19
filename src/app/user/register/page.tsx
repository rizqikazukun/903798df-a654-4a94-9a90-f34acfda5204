/* eslint-disable @next/next/no-img-element */
'use server'
import React from 'react'
import { RegisterForm } from '@/app/_components'
import { BeURL } from '@/lib/Config'

export default async function Register(): Promise<JSX.Element> {

  return (
    <div id='signup'>
      <div className='mx-auto md:my-8 py-28 px-10 max-w-[800px] bg-white border 
                      shadow-sm rounded-lg flex flex-col justify-center items-center gap-2'>
        <img src="/assets/images/wooz-logo.svg" alt="logo" className='h-20' />
        <p className='font-bold text-2xl'>Register</p>
        <RegisterForm BeURL={BeURL}/>
      </div>
    </div>
  )
}
