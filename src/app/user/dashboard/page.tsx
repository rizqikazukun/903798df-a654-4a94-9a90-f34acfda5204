'use server'
import React from 'react'
import { Navbar, Footer, UserDashboard } from '@/app/_components'
import { AppURL, BeURL } from "@/lib/Config";
import { BlockIfNotLogin } from '@/lib/ServerAction';

export default async function Dashboard(): Promise<JSX.Element> {
  await BlockIfNotLogin()

  return (
    <div id="dashboard-user">
      <div style={{ minHeight: 'calc(100vh - 178px)' }}>
        <Navbar />
        <div className='container mx-auto max-w-[1000px] my-10 rounded-lg border shadow-sm bg-white'>
          <UserDashboard BeURL={BeURL} AppURL={AppURL}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}
