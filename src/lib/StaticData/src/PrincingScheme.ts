import { PrincingSchemeType, UserType } from "../../TypeInterface";

export const PrincingScheme: Array<PrincingSchemeType> = [
    {
        title: UserType.Guest,
        feature: ['Free 3 Hour Short URL service every URL', 'Download QR']
    },
    {
        title: UserType.Free,
        feature: ['Free 3 Day Short URL service every URL', 'Extend By 3 Day Short URL Service (Coming Soon)', 'Engagement Analytics', 'Download QR']
    },
    {
        title: UserType.Paid,
        feature: ['365 Day Short URL service every URL', 'Extendable Forever Short URL Service', 'Engagement Analytics', 'Download QR']
    }
]