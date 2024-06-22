import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import Model from '@shared/infrastructure/database/model'

@Entity('tbl_parameters')
class ParameterModel extends Model {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    name: string

    @Column({ unique: true })
    code: string

    @Column()
    description: string

    @Column()
    label: string

    @Column()
    type: string

    @Column({ name: 'default_value' })
    defaultValue: string

    @Column({ name: 'not_null', default: '0' })
    notNull: boolean

    @Column({ name: 'module_code' })
    moduleCode?: string

    @Column({ name: 'dependence_parameter_code' })
    dependenceParameterCode?: string

    @Column({ name: 'dependence_parameter_value' })
    dependenceParameterValue?: string

    constructor(
        id: number,
        name: string,
        code: string,
        description: string,
        label: string,
        type: string,
        defaultValue: string,
        notNull: boolean,
        moduleCode?: string,
        dependenceParameterCode?: string,
        dependenceParameterValue?: string
    ) {
        super()
        this.id = id
        this.name = name
        this.code = code
        this.description = description
        this.label = label
        this.type = type
        this.defaultValue = defaultValue
        this.notNull = notNull
        this.moduleCode = moduleCode
        this.dependenceParameterCode = dependenceParameterCode
        this.dependenceParameterValue = dependenceParameterValue
    }
}

export default ParameterModel
