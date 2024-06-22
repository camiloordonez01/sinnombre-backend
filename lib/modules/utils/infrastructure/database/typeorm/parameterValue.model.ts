import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { ParameterModel, ModuleModel } from './'

import Model from '@shared/infrastructure/database/model'
import { CompanyModel } from '@shared/infrastructure/database'

@Entity('tbl_parameter_values')
class ParameterValueModel extends Model {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name: 'parameter_code' })
    parameterCode: string

    @Column({ name: 'company_uuid' })
    companyUuid: string

    @Column({ name: 'module_code' })
    moduleCode: string

    @Column()
    value: string

    // @ManyToOne(() => ParameterModel)
    // @JoinColumn({ name: 'parameter_code', referencedColumnName: 'code' })
    // parameterModels: ParameterModel

    // @ManyToOne(() => CompanyModel)
    // @JoinColumn({ name: 'company_uuid', referencedColumnName: 'uuid' })
    // companyModels: CompanyModel

    // @ManyToOne(() => ModuleModel)
    // @JoinColumn({ name: 'module_code', referencedColumnName: 'code' })
    // moduleModels: ModuleModel

    constructor(
        id: number,
        parameterCode: string,
        companyUuid: string,
        moduleCode: string,
        value: string
        // parameterModels: ParameterModel,
        // companyModels: CompanyModel,
        // moduleModels: ModuleModel
    ) {
        super()
        this.id = id
        this.parameterCode = parameterCode
        this.companyUuid = companyUuid
        this.moduleCode = moduleCode
        this.value = value
        // this.parameterModels = parameterModels
        // this.companyModels = companyModels
        // this.moduleModels = moduleModels
    }
}

export default ParameterValueModel
