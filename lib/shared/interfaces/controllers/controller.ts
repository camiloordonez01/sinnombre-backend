import { Request, NextFunction } from 'express'
import { ErrorHandler, ResponseHandler, logger } from '@shared/infrastructure/handler'

import UseCase from '@shared/application/use_cases/useCase'

import messages from '@helpers/messages'

/**
 * General controller for a basic crud
 *
 * @author camilo.ordonez
 *
 */
class Controller {
    protected useCase: UseCase
    public file: string

    constructor(useCase: UseCase, file: string) {
        this.useCase = useCase
        this.file = file
    }

    async get(request: Request, next: NextFunction) {
        try {
            interface ParamInterface {
                id?: number
            }
            const { id }: ParamInterface = request.params
            if (!id) throw new ErrorHandler(400, messages.system.PARAMS_ERROR)

            next(new ResponseHandler(201, await this.useCase.get(id)))
        } catch (error) {
            if (error instanceof Error) {
                logger.crit({
                    level: 'crit',
                    file: this.file,
                    message: `${error.message}`,
                    stack: error.stack,
                })
            }
            next(error)
        }
    }

    async getAll(next: NextFunction) {
        try {
            next(new ResponseHandler(201, await this.useCase.getAll()))
        } catch (error) {
            if (error instanceof Error) {
                logger.crit({
                    level: 'crit',
                    file: this.file,
                    message: `${error.message}`,
                    stack: error.stack,
                })
            }
            next(error)
        }
    }

    async create(request: Request, next: NextFunction) {
        try {
            next(new ResponseHandler(201, await this.useCase.create(request.body)))
        } catch (error) {
            console.log(error)
            if (error instanceof Error) {
                logger.crit({
                    level: 'crit',
                    file: this.file,
                    message: `${error.message}`,
                    stack: error.stack,
                })
            }
            next(error)
        }
    }

    async update(request: Request, next: NextFunction) {
        try {
            interface ParamInterface {
                id?: number
            }
            const { id }: ParamInterface = request.params
            if (!id) throw new ErrorHandler(400, messages.system.PARAMS_ERROR)

            next(new ResponseHandler(201, await this.useCase.update(id, request.body)))
        } catch (error) {
            if (error instanceof Error) {
                logger.crit({
                    level: 'crit',
                    file: this.file,
                    message: `${error.message}`,
                    stack: error.stack,
                })
            }
            next(error)
        }
    }

    async delete(request: Request, next: NextFunction) {
        try {
            interface ParamInterface {
                id?: number
            }
            const { id }: ParamInterface = request.params
            if (!id) throw new ErrorHandler(400, messages.system.PARAMS_ERROR)

            next(new ResponseHandler(201, await this.useCase.delete(id)))
        } catch (error) {
            if (error instanceof Error) {
                logger.crit({
                    level: 'crit',
                    file: this.file,
                    message: `${error.message}`,
                    stack: error.stack,
                })
            }
            next(error)
        }
    }
}

export default Controller
