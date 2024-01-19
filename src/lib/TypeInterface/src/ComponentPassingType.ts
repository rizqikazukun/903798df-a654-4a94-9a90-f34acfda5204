import { ShortUrlResultType } from ".."

export interface ComponentPassingType { 
    AppURL?: string | undefined 
    BeURL?: string | undefined 
    session_id?: string | undefined
    data?: ShortUrlResultType | any
}