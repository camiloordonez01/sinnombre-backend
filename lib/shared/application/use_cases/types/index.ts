import Entity from '@shared/domain/entities/Entity'
import Repository from '@shared/domain/repositories/repository'

interface UseCase {
    repository: Repository
    get?: (id: number) => Entity
}
