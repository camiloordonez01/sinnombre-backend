import { ErrorHandler } from '@shared/infrastructure/handler'
import { UserRepository } from '../../domain/repositories'
import { UserStorage } from '../../interfaces/storage/mysql'
import { UserEntity } from '../../domain/entities'

import { generateMd5 } from '../common/utils.common'
import { CreateUser, EditUser } from './types/user'

import messages from '@helpers/messages'

class UserUseCase {
    protected repository: UserRepository
    constructor() {
        this.repository = new UserRepository(new UserStorage())
    }

    async get(id: number) {
        const user = await this.repository.get<UserEntity>(id)
        if (!user) throw new ErrorHandler(400, messages.system.ERROR_NOT_FOUNT)

        const { activeRow, createdAt, updatedAt, password, ...data } = user

        return data
    }

    async getAll() {
        const users = await this.repository.getAll<UserEntity>()

        return users.map((user) => {
            const { activeRow, createdAt, updatedAt, password, ...data } = user

            return data
        })
    }

    async create(entity: CreateUser) {
        const getUserByEmail = await this.repository.getUserByEmail(entity.email)
        if (getUserByEmail) {
            throw new ErrorHandler(400, messages.users.EMAIL_EXISTS)
        }

        const user = new UserEntity({ ...entity, password: generateMd5(entity.password) })

        const newUser = await this.repository.save(user)

        const { activeRow, createdAt, updatedAt, password, ...data } = newUser as UserEntity
        return data
    }

    async update(id: number, newEntity: EditUser) {
        let entity = await this.repository.get<UserEntity>(id)
        if (!entity) throw new ErrorHandler(400, messages.system.ERROR_NOT_FOUNT)

        if (newEntity.password && newEntity.password !== '') {
            newEntity.password = generateMd5(newEntity.password)
        }

        await this.repository.update(id, { ...entity, ...newEntity })

        const { activeRow, createdAt, updatedAt, password, ...data } = { ...entity, ...newEntity }
        return data
    }

    async delete(id: number) {
        let entity = await this.repository.get(id)
        if (!entity) throw new ErrorHandler(400, messages.system.ERROR_NOT_FOUNT)

        await this.repository.update(id, { ...entity, activeRow: '0' })

        return id
    }
}

export default UserUseCase
