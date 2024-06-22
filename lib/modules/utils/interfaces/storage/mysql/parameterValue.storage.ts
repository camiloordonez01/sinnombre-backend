import StorageMysql from '@shared/interfaces/storage/mysql/storage'

import { ParameterValueModel } from '../../../infrastructure/database/typeorm'
import { ParameterValueEntity } from '../../../domain/entities'

class ParameterValueStorage extends StorageMysql {
    constructor() {
        super(ParameterValueModel)
    }

    async getByParameterCode(parameterCode: string) {
        const value = await this.repository.findOneBy({ parameterCode, activeRow: '1' })

        return value ? new ParameterValueEntity(value as ParameterValueEntity) : null
    }

    async getByCompanyUuid(moduleCode: string, companyUuid: string) {
        const values = await this.repository.findBy({ moduleCode, companyUuid, activeRow: '1' })

        return values ? values.map((value) => new ParameterValueEntity(value as ParameterValueEntity)) : null
    }
}

export default ParameterValueStorage
