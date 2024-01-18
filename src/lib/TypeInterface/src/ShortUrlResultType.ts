export interface ShortUrlResultType {
    createdAt: string
    updatedAt: string
    created_by: string | null
    description: string | null
    id: number
    session_id: string | null
    title: string | null
    url_original: string
    url_short: string
    url_ttl: string
    url_uid: string
}