'use client'
import React from 'react'

export function SignupForm(prop: { BackendURL?: string | undefined }): JSX.Element {

  const BackendURL: string | undefined = prop.BackendURL || undefined

  const [first_name, setFirstName] = React.useState('')
  const [last_name, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordC, setPasswordC] = React.useState('')

  return (
    <div>SignupForm {BackendURL}</div>
  )
}
