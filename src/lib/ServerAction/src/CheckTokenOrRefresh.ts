'use server'

import axios from "axios"
import { BeURL } from "../../Config"
import { cookies } from 'next/headers'
import { RefreshTokenResponseType } from "../../TypeInterface"

export async function CheckTokenOrRefresh(): Promise<string | boolean> {
    try {
        const oldAccessToken : boolean = cookies().has('accessToken')

        if (oldAccessToken) {
            const getOldAccessToken : string = String(cookies().get('accessToken'))
            return `Bearer ${getOldAccessToken}`
        }

        const oldRefreshToken: string = String(cookies().get('refreshToken'))

        const getNewToken: any = await axios({
            method: 'post',
            url: `${BeURL}/auth/refresh`,
            headers: {
                Authorization: oldRefreshToken
            }
        })

        const response: RefreshTokenResponseType = getNewToken.data

        cookies().delete('accessToken')
        cookies().delete('refreshToken')

        cookies().set('accessToken', `Bearer ${response.accessToken}`)
        cookies().set('accessToken', `Bearer ${response.refreshToken}`)
        
        return `Bearer ${response.accessToken}`
    } catch (error) {
        return false
    }
}