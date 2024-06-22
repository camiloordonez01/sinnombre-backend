import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import Model from '@shared/infrastructure/database/model'

@Entity('tbl_roles')
class RoleModel extends Model {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    code: string

    @Column({ name: 'super_admin' })
    superAdmin: boolean

    constructor(id: number, name: string, code: string, superAdmin: boolean) {
        super()
        this.id = id
        this.name = name
        this.code = code
        this.superAdmin = superAdmin
    }
}

export default RoleModel
