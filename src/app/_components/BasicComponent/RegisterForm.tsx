'use client'
import { ComponentPassingType } from '@/lib/TypeInterface'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useRouter } from 'next/navigation'

export function RegisterForm(prop: ComponentPassingType): JSX.Element {
  const MySwal = withReactContent(Swal)
  const BackendURL: string | undefined = prop.BeURL || undefined
  const router = useRouter()

  const [first_name, setFirstName] = React.useState('')
  const [last_name, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordC, setPasswordC] = React.useState('')

  const [loading, setLoading]: [boolean, any] = React.useState(false)

  const registerHandler = React.useCallback(async () => {
    try {
      setLoading(true)
      if (password !== passwordC) {
        throw { status: 422, message: 'Password confirmation not match' }
      }

      await axios({
        method: 'post',
        url: `${BackendURL}/auth/register`,
        data: {
          first_name,
          last_name,
          email,
          password
        }
      })

      MySwal.fire({
        titleText: 'Register success',
        timer: 2000,
        showCancelButton: false,
        showConfirmButton: false
      })

      router.replace('/user/login')
    } catch (error: any) {
      console.log(error)
      let message: string = ''
      let arrayMessage: Array<string> = []

      if (error.status === 422) {
        message = error.message

        MySwal.fire({
          titleText: message,
          showCancelButton: false,
          showConfirmButton: true,
        })
      } else if (error.response.status === 409) {
        message = error.response.data.message

        MySwal.fire({
          titleText: message,
          showCancelButton: false,
          showConfirmButton: true,
        })
      } else if (error.response.status === 400) {

        arrayMessage = error.response.data.message
        message += '<div id="custom-message">'

        for (const index in arrayMessage) {
          message += `<p>${Number(index) + 1}. ${arrayMessage[index]}.</p>`
        }

        message += '</div>'

        MySwal.fire({
          titleText: 'Register failed please check',
          html: message,
          showCancelButton: false,
          showConfirmButton: true,
        })

      }
    } finally {
      setLoading(false)
    }
  }, [BackendURL, MySwal, email, first_name, last_name, password, passwordC, router])


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
        <label htmlFor="password-confirmation">Confirm Password :</label>
        <input className='p-2 rounded-full border' type="password" id='password-confirmation' onChange={e => setPasswordC(e.target.value)} />
      </div>

      <div className='flex flex-col w-full items-center justify-center gap-2'>
        <button className='woozify-button border shadow-sm p-2 rounded-full w-full hover:font-bold text-white'
          onClick={registerHandler} disabled={loading}>
          {loading ? "Loading" : "Register"}
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
