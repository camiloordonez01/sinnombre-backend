import Entity from '@shared/domain/entities/Entity'

class UserEntity extends Entity {
    id?: number
    names: string
    lastNames: string
    email: string
    password: string
    companyUuid: string
    roleCode: string
    avatar?: string

    constructor(userEntity: UserEntity) {
        super(userEntity)
        this.id = userEntity.id
        this.names = userEntity.names
        this.lastNames = userEntity.lastNames
        this.email = userEntity.email
        this.password = userEntity.password
        this.companyUuid = userEntity.companyUuid
        this.roleCode = userEntity.roleCode
        this.avatar = userEntity.avatar
    }
}

export default UserEntity
