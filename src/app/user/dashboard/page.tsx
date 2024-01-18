'use server'
import React from 'react'
import { Navbar, Footer } from '@/app/_components'



export default async function Dashboard(): Promise<JSX.Element> {
  return (
    <div id="dashboard-user">
      <div style={{ minHeight: 'calc(100vh - 178px)' }}>
        <Navbar />
        <div className='container mx-auto max-w-[1000px] my-10 rounded-lg border shadow-sm bg-white'>
        </div>
      </div>
      <Footer />
    </div>
  )
}
