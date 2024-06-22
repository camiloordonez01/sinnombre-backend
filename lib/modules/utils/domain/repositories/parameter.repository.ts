import { ParameterStorage } from '../../interfaces/storage/mysql/types'
import Repository from '@shared/domain/repositories/repository'

class ParameterRepository extends Repository {
    protected storage: ParameterStorage
    constructor(parameterStorage: ParameterStorage) {
        super(parameterStorage)
        this.storage = parameterStorage
    }

    getParameterByModuleCode(moduleCode: string) {
        return this.storage.getParameterByModuleCode(moduleCode)
    }
}

export default ParameterRepository
