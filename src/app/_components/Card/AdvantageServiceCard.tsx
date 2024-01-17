'use server'
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { AdvantageServiceType } from '@/app/_typeInterface'

export async function AdvantageServiceCard({image, title, description}: AdvantageServiceType): Promise<JSX.Element> {
    return (
        <div className="flex flex-col p-5 gap-2 w-[30%] justify-center items-center min-w-64">
            <img src={image} alt="items" className='h-24 w-24' />
            <p className=' font-bold'>{title}</p>
            <p className=' text-sm text-center'>{description}</p>
        </div>
    )
}
