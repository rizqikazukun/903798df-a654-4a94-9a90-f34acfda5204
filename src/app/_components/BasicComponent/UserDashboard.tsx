/* eslint-disable @next/next/no-img-element */
'use client'

import axios from 'axios'
import React from 'react'
import { getCookie } from 'cookies-next'
import { CheckTokenOrRefresh } from '@/lib/ServerAction'
import { UrlWithAnalyticTypes, ComponentPassingType } from '@/lib/TypeInterface'
import ShortResultCardDashboard from '../Card/ShortResultCardPrivateDashboard'

export function UserDashboard(props: ComponentPassingType) {
    const BeURL: string | undefined = props.BeURL
    const AppURL: string | undefined = props.AppURL

    const getProfile: string | any = getCookie('profile')
    const profile = JSON.parse(getProfile)

    const [url, setUrl]: [UrlWithAnalyticTypes, any] = React.useState([])


    const initPage = React.useCallback(async () => {
        try {
            const accessToken = await CheckTokenOrRefresh()

            const urlsWithAnalytic = await axios({
                method: 'get',
                url: `${BeURL}/analytic`,
                headers: {
                    Authorization: accessToken
                }
            })

            const data: UrlWithAnalyticTypes = urlsWithAnalytic.data

            setUrl(data)
        } catch (error) {
            console.log(error)
        }
    }, [BeURL])


    React.useEffect(() => {
        initPage()

    }, [initPage])

    return (
        <div className=' flex flex-col p-10'>

            <div className='flex  flex-row flex-wrap p-5 justify-between items-center'>
                <div>
                    <p className=' text-4xl font-medium'>
                        Hello, {profile?.first_name} {profile?.last_name}
                    </p>
                    <p>
                        Too busy counting the visitors left to us, enjoy your time.
                    </p>
                </div>
                <div>
                    <img className=' h-48 object-cover ' src="/assets/images/banner.png" alt="banner" />
                </div>
            </div>

            <div>
                {
                    url.length === 0 ? null :
                        url.map((item, index) => {
                            return (
                                <ShortResultCardDashboard key={index} BeURL={BeURL} AppURL={AppURL} data={item} />
                            )
                        })
                }
            </div>
        </div>
    )
}
