import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import Model from '@shared/infrastructure/database/model'

@Entity('tbl_modules')
class CompanyModel extends Model {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    names: string

    @Column({ unique: true })
    code: string

    @Column()
    label: string

    @Column()
    description: string

    @Column()
    price: number

    @Column({ name: 'is_active' })
    isActive: boolean

    @Column()
    icon?: string

    @Column({ name: 'discount_quarter' })
    discountQuarter?: string

    @Column({ name: 'discount_semester' })
    discountSemester?: string

    @Column({ name: 'discount_year' })
    discountYear?: string

    constructor(
        id: number,
        names: string,
        code: string,
        label: string,
        description: string,
        price: number,
        isActive: boolean,
        icon: string,
        discountQuarter: string,
        discountSemester: string,
        discountYear: string
    ) {
        super()
        this.id = id
        this.names = names
        this.code = code
        this.label = label
        this.description = description
        this.price = price
        this.isActive = isActive
        this.icon = icon
        this.discountQuarter = discountQuarter
        this.discountSemester = discountSemester
        this.discountYear = discountYear
    }
}

export default CompanyModel
