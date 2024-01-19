'use client'
import { deleteCookie } from 'cookies-next'
import React from 'react'

export function Logout(prop: { className?: string, style?: {} }): JSX.Element {

    const logoutHandler = React.useCallback(() => {
        deleteCookie('profile')
        deleteCookie('accessToken')
        deleteCookie('refreshToken')
        window.location.reload()
    }, [])

    return (
        <button className={prop.className} style={prop.style} onClick={logoutHandler}>
            Logout
        </button>
    )
}
