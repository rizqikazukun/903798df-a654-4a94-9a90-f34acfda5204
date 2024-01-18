'use server'

// This function is server function.
// This Must run on async function on the client to make client component able to get server env.
// This Should not use on production.
// This is just for learning purpose.
// I have never tested the security of this code.

export async function getConfig(ENV: string): Promise<string | undefined> {
    return process.env[ENV]
}