'use client'
import { ComponentPassing } from '@/lib/TypeInterface'
import Link from 'next/link'
import React from 'react'

export function SigninForm(prop: ComponentPassing): JSX.Element {

  const BackendURL: string | undefined = prop.BeURL || undefined

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')


  return (
    <div id='signup-form' className='flex flex-col gap-10 w-full'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="email">Email :</label>
        <input className='p-2 rounded-full border' type="email" id='email' onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Passsword :</label>
        <input className='p-2 rounded-full border' type="password" id='password' onChange={e => setPassword(e.target.value)} />
      </div>

      <div className='flex flex-col w-full items-center justify-center gap-2'>
        <button className='woozify-button border shadow-sm p-2 rounded-full w-full hover:font-bold text-white'>
            Sign In
        </button>
        <p>
          Don&apos;t Have Account? {' '}
          <Link href="/user/signup">
            <span className='font-medium text-red-800'>Sign Up
            </span>
          </Link>
        </p>
        <p>
          <Link href="/#">Back to Home</Link>
        </p>
      </div>
    </div>
  )
}
