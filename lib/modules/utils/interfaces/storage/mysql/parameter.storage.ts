import StorageMysql from '@shared/interfaces/storage/mysql/storage'

import { ParameterModel } from '../../../infrastructure/database/typeorm'
import { ParameterEntity } from '../../../domain/entities'

class ParameterStorage extends StorageMysql {
    constructor() {
        super(ParameterModel)
    }

    async getParameterByModuleCode(moduleCode: string) {
        const parameters = await this.repository.findBy({ moduleCode, activeRow: '1' })

        return parameters ? parameters.map((parameter) => new ParameterEntity(parameter as ParameterEntity)) : null
    }
}

export default ParameterStorage
