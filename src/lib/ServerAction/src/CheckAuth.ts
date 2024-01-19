'use server'
import { RedirectType, redirect } from 'next/navigation'
import { cookies } from 'next/headers';
import { hasCookie } from 'cookies-next'


export async function BlockIfLogin(): Promise<void> {
    const getAccess: boolean = hasCookie('accessToken', { cookies })
    const getRefresh: boolean = hasCookie('refreshToken', { cookies })

    if (getAccess || getRefresh) {
        redirect('/', RedirectType.replace)
    }
}

export async function BlockIfNotLogin(): Promise<void> {
    const getRefresh: boolean = hasCookie('refreshToken', { cookies })
    
    if (!getRefresh) {
        redirect('/', RedirectType.replace)
    }
}