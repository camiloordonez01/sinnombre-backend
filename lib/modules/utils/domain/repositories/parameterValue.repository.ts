import { ParameterValueStorage } from '../../interfaces/storage/mysql/types'
import Repository from '@shared/domain/repositories/repository'

class ParameterValueRepository extends Repository {
    protected storage: ParameterValueStorage
    constructor(parameterValueStorage: ParameterValueStorage) {
        super(parameterValueStorage)
        this.storage = parameterValueStorage
    }

    getByParameterCode(parameterCode: string) {
        return this.storage.getByParameterCode(parameterCode)
    }

    getByCompanyUuid(moduleCode: string, companyUuid: string) {
        return this.storage.getByCompanyUuid(moduleCode, companyUuid)
    }
}

export default ParameterValueRepository
