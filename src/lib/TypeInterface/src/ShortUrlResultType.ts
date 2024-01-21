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

export interface Statistic {
    createdAt: string
    id: number
    updatedAt: string
    url_uid: string
    visitors: number
}

export interface ShortUrlResultPrivateType extends ShortUrlResultType {
    Statistics: Array<Statistic>
}

export type UrlWithAnalyticTypes = Array<ShortUrlResultPrivateType>