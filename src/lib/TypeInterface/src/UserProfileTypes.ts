import { UserType } from ".."

export interface UserProfileTypes {
    email: string
    first_name: string
    last_name: string
    user_photo : string | null
    user_type: UserType
    user_uid: string
}