import StorageMysql from '@shared/interfaces/storage/mysql/storage'

import { UserModel } from '../../../infrastructure/database/typeorm'
import { UserEntity } from '../../../domain/entities'

class UserStorage extends StorageMysql {
    constructor() {
        super(UserModel)
    }

    async getUserByEmail(email: string) {
        const user = await this.repository.findOneBy({ email, activeRow: '1' })

        return user ? new UserEntity(user as UserEntity) : null
    }
}

export default UserStorage
