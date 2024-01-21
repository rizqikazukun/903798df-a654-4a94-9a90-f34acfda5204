'use server'

import axios from "axios"
import { BeURL } from "../../Config"
import { cookies } from 'next/headers'
import { hasCookie, getCookie, setCookie, deleteCookie, CookieValueTypes } from "cookies-next"
import { RefreshTokenResponseType } from "../../TypeInterface"

export async function CheckTokenOrRefresh(): Promise<CookieValueTypes> {
    try {
        const oldAccessToken: boolean = hasCookie('accessToken', {cookies})

        if (oldAccessToken) {
            const getOldAccessToken: CookieValueTypes = getCookie('accessToken', {cookies})
            return getOldAccessToken
        }

        const oldRefreshToken: CookieValueTypes = getCookie('refreshToken', {cookies})


        const getNewToken: any = await axios({
            method: 'post',
            url: `${BeURL}/auth/refresh`,
            headers: {
                Authorization: oldRefreshToken
            }
        })

        const response: RefreshTokenResponseType = getNewToken.data

        deleteCookie('accessToken', {cookies})
        deleteCookie('refreshToken', {cookies})

        const currentTime : number = new Date().getTime()
        const accessExp : number = 15 * 60 * 1000
        const refreshExp : number = 7 * 24 * 60 * 60 * 10000 

        setCookie('accessToken', `Bearer ${response.accessToken}`, {cookies, expires: new Date(currentTime+accessExp)})
        setCookie('refreshToken', `Bearer ${response.refreshToken}`, {cookies, expires: new Date(currentTime+refreshExp)})
        
        return `Bearer ${response.accessToken}`
    } catch (error) {
        return undefined
    }
}