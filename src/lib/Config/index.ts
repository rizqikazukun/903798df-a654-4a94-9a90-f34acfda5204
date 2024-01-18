// use this on server component
export const AppURL: string | undefined = process.env.APP_URL || undefined 
export const BeURL: string | undefined = process.env.BE_URL || undefined

// use this on client component
export * from './getConfig'