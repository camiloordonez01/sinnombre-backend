import Entity from '@shared/domain/entities/Entity'

class ParameterEntity extends Entity {
    id?: number
    name: string
    code: string
    description: string
    label: string
    type: string
    defaultValue: string
    notNull: boolean
    moduleCode?: string
    dependenceParameterCode?: string
    dependenceParameterValue?: string

    constructor(parameterEntity: ParameterEntity) {
        super(parameterEntity)
        this.id = parameterEntity.id
        this.name = parameterEntity.name
        this.code = parameterEntity.code
        this.description = parameterEntity.description
        this.label = parameterEntity.label
        this.type = parameterEntity.type
        this.defaultValue = parameterEntity.defaultValue
        this.notNull = parameterEntity.notNull
        this.moduleCode = parameterEntity.moduleCode
        this.dependenceParameterCode = parameterEntity.dependenceParameterCode
        this.dependenceParameterValue = parameterEntity.dependenceParameterValue
    }
}

export default ParameterEntity
