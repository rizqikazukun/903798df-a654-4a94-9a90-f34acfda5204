'use server'
import { PrincingSchemeType } from '@/lib/TypeInterface'
import Link from 'next/link'
import React from 'react'

export async function PrincingSchemeCard(prop: { schema: PrincingSchemeType }): Promise<JSX.Element> {
    const schema: PrincingSchemeType = prop.schema
    return (
        <div id='princingSchemeCard'
            className='flex flex-col p-5 border shadow-sm rounded-md gap-5 justify-between items-center min-w-60 max-w-72'>

            <div className='flex flex-col gap-2'>
                <div className='w-full flex flex-col justify-center'>
                    <p className='font-bold text-center'>
                        {schema.title.charAt(0).toUpperCase() + schema.title.slice(1)}
                    </p>
                    <p className='font-medium text-center'>
                        Features
                    </p>
                </div>
                <div className='flex flex-col'>
                    {
                        schema.feature.map((feature, index) => (
                            <div className='flex items-center gap-2' key={index}>
                                <p className=' text-sm font-bold'>•</p>
                                <p className=' text-sm font-medium' key={index}>{feature}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            {
                schema.title === 'guest'
                    ? <button className="bg-gray-400 p-2 rounded-full text-white" disabled>
                        Current
                    </button>
                    : schema.title === 'free'
                        ? <Link href="/user/register">
                            <button className="woozify-button p-2 rounded-full hover:font-bold text-white">
                                Register
                            </button>
                        </Link>
                        : schema.title === 'paid'
                            ? <button className=" bg-gray-400 p-2 rounded-full text-white" disabled>
                                Coming Soon
                            </button>
                            : null
            }
        </div>

    )
}
