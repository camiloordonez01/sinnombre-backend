import Entity from '@shared/domain/entities/Entity'

class ParameterValueEntity extends Entity {
    id?: number
    parameterCode: string
    companyUuid: string
    moduleCode: string
    value: string

    constructor(parameterValueEntity: ParameterValueEntity) {
        super(parameterValueEntity)
        this.id = parameterValueEntity.id
        this.parameterCode = parameterValueEntity.parameterCode
        this.companyUuid = parameterValueEntity.companyUuid
        this.moduleCode = parameterValueEntity.moduleCode
        this.value = parameterValueEntity.value
    }
}

export default ParameterValueEntity
