import { ErrorHandler } from '../../infrastructure/handler'

import Repository from '../../domain/repositories/repository'
import Entity from '../../domain/entities/Entity'

import messages from '@helpers/messages'
import { ObjectLiteral } from '../common/types'

class UseCase {
    protected repository: Repository
    readonly excludeFields?: string[]

    constructor(repository: Repository, excludeFields?: string[]) {
        this.repository = repository
        this.excludeFields = excludeFields
    }

    async get(id: number) {
        const entity = await this.repository.get<Entity>(id)
        if (!entity) throw new ErrorHandler(400, messages.system.ERROR_NOT_FOUNT)

        const { activeRow, createdAt, updatedAt, ...data } = entity
        if (this.excludeFields) {
            const filter: ObjectLiteral = data
            this.excludeFields.forEach((field) => {
                delete filter[field]
            })

            return filter
        }
        return data
    }

    async getAll() {
        const entities = await this.repository.getAll<Entity>()

        return entities.map((entity) => {
            const { activeRow, createdAt, updatedAt, ...data } = entity
            if (this.excludeFields) {
                const filter: ObjectLiteral = data
                this.excludeFields.forEach((field) => {
                    delete filter[field]
                })

                return filter
            }
            return data
        })
    }

    async create(entity: Entity) {
        await this.repository.save(entity)

        const { activeRow, createdAt, updatedAt, ...data } = entity
        return data
    }

    async update(id: number, newEntity: Entity) {
        let entity = await this.repository.get(id)
        if (!entity) throw new ErrorHandler(400, messages.system.ERROR_NOT_FOUNT)

        await this.repository.update(id, { ...entity, ...newEntity })

        const { activeRow, createdAt, updatedAt, ...data } = { ...entity, ...newEntity }
        return data
    }

    async delete(id: number) {
        let entity = await this.repository.get(id)
        if (!entity) throw new ErrorHandler(400, messages.system.ERROR_NOT_FOUNT)

        await this.repository.update(id, { ...entity, activeRow: '0' })

        return id
    }
}

export default UseCase
