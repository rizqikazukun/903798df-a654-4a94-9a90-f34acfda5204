'use client'
import { ComponentPassingType } from '@/lib/TypeInterface'
import Link from 'next/link'
import React from 'react'

export function RegisterForm(prop: ComponentPassingType): JSX.Element {

  const BackendURL: string | undefined = prop.BeURL || undefined

  const [first_name, setFirstName] = React.useState('')
  const [last_name, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordC, setPasswordC] = React.useState('')

  return (
    <div id='signup-form' className='flex flex-col gap-10 w-full'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="first-name">First Name :</label>
        <input className='p-2 rounded-full border' type="text" id="first-name" onChange={e => setFirstName(e.target.value)} />
        <label htmlFor="last-name">Last Name :</label>
        <input className='p-2 rounded-full border' type="text" id="last-name" onChange={e => setLastName(e.target.value)} />
        <label htmlFor="email">Email :</label>
        <input className='p-2 rounded-full border' type="email" id='email' onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Passsword :</label>
        <input className='p-2 rounded-full border' type="password" id='password' onChange={e => setPassword(e.target.value)} />
        <label htmlFor="password">Confirm Password :</label>
        <input className='p-2 rounded-full border' type="password" id='password' onChange={e => setPasswordC(e.target.value)} />
      </div>

      <div className='flex flex-col w-full items-center justify-center gap-2'>
        <button className='woozify-button border shadow-sm p-2 rounded-full w-full hover:font-bold text-white'>
            Sign Up
        </button>
        <p>
          Have an account? {' '}
          <Link href="/user/login">
            <span className='font-medium hover:text-red-800'>Login
            </span>
          </Link>
        </p>
        <p>
          <Link href="/#"><span className='font-medium hover:text-red-800'>Back to Home</span></Link>
        </p>
      </div>
    </div>
  )
}
