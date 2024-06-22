import UseCase from '@shared/application/use_cases/useCase'

import { RoleRepository } from '../../domain/repositories'
import { RoleStorage } from '../../interfaces/storage/mysql'

class RoleUseCase extends UseCase {
    constructor() {
        super(new RoleRepository(new RoleStorage()), ['superAdmin'])
    }
}

export default RoleUseCase
