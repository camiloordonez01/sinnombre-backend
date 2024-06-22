import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import Model from '../../infrastructure/database/model'

@Entity('tbl_companies')
class CompanyModel extends Model {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    uuid: string

    @Column({ unique: true })
    name: string

    @Column()
    address: string

    @Column({ name: 'city_id' })
    cityId: number

    @Column({ name: 'owner_user_id' })
    ownerUserId: number

    @Column()
    email: string

    @Column()
    phone: string

    @Column()
    logo?: string

    constructor(
        id: number,
        uuid: string,
        name: string,
        address: string,
        cityId: number,
        ownerUserId: number,
        email: string,
        phone: string,
        logo: string
    ) {
        super()
        this.id = id
        this.uuid = uuid
        this.name = name
        this.address = address
        this.cityId = cityId
        this.ownerUserId = ownerUserId
        this.email = email
        this.phone = phone
        this.logo = logo
    }
}

export default CompanyModel
