'use client'
import React from 'react'

export function SigninForm(prop : {BackendURL?: string | undefined}): JSX.Element {

  const BackendURL: string | undefined = prop.BackendURL || undefined

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  
  return (
    <div>SigninForm</div>
  )
}
