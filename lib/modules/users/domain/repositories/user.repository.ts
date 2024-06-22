import { UserStorage } from '../../interfaces/storage/mysql/types'
import Repository from '@shared/domain/repositories/repository'

class UserRepository extends Repository {
    protected storage: UserStorage
    constructor(userStorage: UserStorage) {
        super(userStorage)
        this.storage = userStorage
    }

    getUserByEmail(email: string) {
        return this.storage.getUserByEmail(email)
    }
}

export default UserRepository
