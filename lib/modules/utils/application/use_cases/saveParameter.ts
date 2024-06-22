import { Config } from './types/parameters'
import { ParameterValueStorage } from '../../interfaces/storage/mysql'
import { ParameterValueRepository } from '../../domain/repositories'
import { ParameterValueEntity } from '../../domain/entities'

const parameterValueRepository = new ParameterValueRepository(new ParameterValueStorage())
export default async (moduleCode: string, companyUuid: string, listConfig: Config[]) => {
    // The configuration list is iterated for creation or update.
    await Promise.all(
        listConfig.map(async (config) => {
            const getConfigByCode = await parameterValueRepository.getByParameterCode(config.code)
            if (getConfigByCode) {
                getConfigByCode.value = String(config.value)

                await parameterValueRepository.update(getConfigByCode.id, getConfigByCode)
            } else {
                const parameterValue = new ParameterValueEntity({
                    parameterCode: config.code,
                    value: String(config.value),
                    companyUuid,
                    moduleCode,
                })

                await parameterValueRepository.save(parameterValue)
            }
        })
    )

    return true
}
