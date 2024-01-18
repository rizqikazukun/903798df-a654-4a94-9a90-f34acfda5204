/* eslint-disable @next/next/no-img-element */
'use server'
import React from 'react'
import {SignupForm} from '@/app/_components'

export default async function Signup(): Promise<JSX.Element> {

  return (
    <div id='signup'>
      <div className='mx-auto mt-40 py-28 px-10 max-w-[800px] h-40 bg-white border shadow-sm rounded-lg flex flex-col justify-center items-center gap-2'>
        <img src="/assets/images/wooz-logo.svg" alt="logo" className='h-20' />
        <p className='font-bold text-2xl'>Register</p>
        
        <SignupForm BackendURL={process.env.APP_URL} />

      </div>
    </div>
  )
}
