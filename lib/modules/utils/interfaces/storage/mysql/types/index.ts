import { ParameterEntity, ParameterValueEntity } from '../../../../domain/entities'
import StorageMysql from '@shared/interfaces/storage/mysql/storage'

export interface ParameterStorage extends StorageMysql {
    getParameterByModuleCode: (moduleCode: string) => Promise<ParameterEntity[] | null>
}

export interface ParameterValueStorage extends StorageMysql {
    getByParameterCode(parameterCode: string): Promise<ParameterValueEntity | null>
    getByCompanyUuid(moduleCode: string, companyUuid: string): Promise<ParameterValueEntity[] | null>
}
