import { UserEntity } from '../../../../domain/entities'
import StorageMysql from '@shared/interfaces/storage/mysql/storage'

export interface UserStorage extends StorageMysql {
    getUserByEmail: (email: string) => Promise<UserEntity | null>
}

export interface RoleStorage extends StorageMysql {}
