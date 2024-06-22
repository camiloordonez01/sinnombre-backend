import { RoleStorage } from '../../interfaces/storage/mysql/types'
import Repository from '@shared/domain/repositories/repository'

class RoleRepository extends Repository {
    protected storage: RoleStorage
    constructor(roleStorage: RoleStorage) {
        super(roleStorage)
        this.storage = roleStorage
    }
}

export default RoleRepository
