import { ParameterValueStorage } from '../../interfaces/storage/mysql'
import { ParameterValueRepository } from '../../domain/repositories'
import { ParameterValueEntity } from '../../domain/entities'

const parameterValueRepository = new ParameterValueRepository(new ParameterValueStorage())

export default async (moduleCode: string, companyUuid: string) => {
    const values = await parameterValueRepository.getByCompanyUuid(moduleCode, companyUuid)

    return values ? values.map((value) => ({ code: value.parameterCode, value: value.value })) : []
}
