import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import Model from '@shared/infrastructure/database/model'

@Entity('tbl_users')
class UserModel extends Model {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    names: string

    @Column({ name: 'last_names' })
    lastNames: string

    @Column()
    avatar?: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({ name: 'role_code' })
    roleCode: string

    @Column({ name: 'company_uuid' })
    companyUuid: string

    constructor(
        id: number,
        names: string,
        lastNames: string,
        email: string,
        password: string,
        roleCode: string,
        companyUuid: string,
        avatar?: string
    ) {
        super()
        this.id = id
        this.names = names
        this.lastNames = lastNames
        this.email = email
        this.password = password
        this.roleCode = roleCode
        this.companyUuid = companyUuid
        this.avatar = avatar
    }
}

export default UserModel
