import StorageMysql from '@shared/interfaces/storage/mysql/storage'

import { RoleModel } from '../../../infrastructure/database/typeorm'

class RoleStorage extends StorageMysql {
    constructor() {
        super(RoleModel)
    }
}

export default RoleStorage
