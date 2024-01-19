'use client'
import { ComponentPassingType } from '@/lib/TypeInterface'
import Link from 'next/link'
import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { setCookie } from 'cookies-next'

export function LoginForm(prop: ComponentPassingType): JSX.Element {
  const MySwal = withReactContent(Swal)
  const BackendURL: string | undefined = prop.BeURL || undefined
  const router = useRouter()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const loginHandler = React.useCallback(async () => {
    try {
      const login = await axios({
        method: 'post',
        url: `${BackendURL}/auth/login`,
        data: {
          email,
          password
        }
      })

      const currentTime : number = new Date().getTime()
      const accessExp : number = 15 * 60 * 1000
      const refreshExp : number = 7 * 24 * 60 * 60 * 10000 
      const profileExp : number = 365 * 24 * 60 * 60 * 10000 

      setCookie('profile', JSON.stringify(login.data.data), { expires: new Date(currentTime+profileExp)})
      setCookie('accessToken', `Bearer ${login.data.accessToken}`, { expires: new Date(currentTime+accessExp)})
      setCookie('refreshToken', `Bearer ${login.data.refreshToken}`, { expires: new Date(currentTime+refreshExp)})

      MySwal.fire({
        titleText: 'Login success',
        timer: 2000,
        showCancelButton: false,
        showConfirmButton: false
      })

      router.replace('/')
    } catch (error: any) {
      console.log(error)
      let message: string = ''
      let arrayMessage: Array<string> = []

      if (error.response.status === 400 || error.response.status === 404) {
        if (typeof error.response.data.message === 'string') {
          message += error.response.data.message

          MySwal.fire({
            titleText: message,
            showCancelButton: false,
            showConfirmButton: true,
          })
        } else {
          arrayMessage = error.response.data.message
          message += '<div id="custom-message">'

          for (const index in arrayMessage) {
            message += `<p>${Number(index) + 1}. ${arrayMessage[index]}.</p>`
          }

          message += '</div>'

          MySwal.fire({
            titleText: 'Login failed please check',
            html: message,
            showCancelButton: false,
            showConfirmButton: true,
          })
        }

      }
    }
  }, [BackendURL, MySwal, email, password, router])


  return (
    <div id='signup-form' className='flex flex-col gap-10 w-full'>
      <div className='flex flex-col gap-2'>
        <label htmlFor="email">Email :</label>
        <input className='p-2 rounded-full border' type="email" id='email' onChange={e => setEmail(e.target.value)} />
        <label htmlFor="password">Passsword :</label>
        <input className='p-2 rounded-full border' type="password" id='password' onChange={e => setPassword(e.target.value)} />
      </div>

      <div className='flex flex-col w-full items-center justify-center gap-2'>
        <button className='woozify-button border shadow-sm p-2 rounded-full w-full hover:font-bold text-white'
          onClick={loginHandler}>
          Login
        </button>
        <p>
          Don&apos;t Have Account? {' '}
          <Link href="/user/register">
            <span className='font-medium hover:text-red-800'>
              Register
            </span>
          </Link>
        </p>
        <p>
          <Link href="/#">
            <span className='font-medium hover:text-red-800'>
              Back to Home
            </span>
          </Link>
        </p>
      </div>
    </div>
  )
}
