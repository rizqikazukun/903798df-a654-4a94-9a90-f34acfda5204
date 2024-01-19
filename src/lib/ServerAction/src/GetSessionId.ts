'use server'

import { cookies } from "next/headers"
import { v4 as uuidv4 } from 'uuid';

export async function GetSessionId(): Promise<void | any>  {
    try {
        const isInitiated: boolean = cookies().has('session_id')
        if (!isInitiated) {
            cookies().set('session_id', uuidv4())
        }
    } catch (error) {
        return error
    }
}