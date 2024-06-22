export interface CreateUser {
    names: string
    lastNames: string
    email: string
    password: string
    companyUuid: string
    roleCode: string
    avatar?: string
}

export interface EditUser {
    names?: string
    lastNames?: string
    email?: string
    password?: string
    companyUuid?: string
    roleCode?: string
    avatar?: string
}
