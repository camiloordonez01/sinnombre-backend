import { Request, Response, NextFunction } from 'express'
import { ErrorHandler, ResponseHandler, logger } from '@shared/infrastructure/handler'

import { UserUseCase } from '../../application/use_cases'

import messages from '@helpers/messages'

const useCaseUser = new UserUseCase()
const file = 'users.controller.ts'

export const getUser = async (request: Request, _: Response, next: NextFunction) => {
    try {
        interface ParamInterface {
            id?: number
        }
        const { id }: ParamInterface = request.params
        if (!id) throw new ErrorHandler(400, messages.system.PARAMS_ERROR)

        next(new ResponseHandler(201, await useCaseUser.get(id)))
    } catch (error) {
        if (error instanceof Error) {
            logger.crit({
                level: 'crit',
                file,
                message: `${error.message}`,
                stack: error.stack,
            })
        }
        next(error)
    }
}

export const getAllUser = async (_: Request, __: Response, next: NextFunction) => {
    try {
        next(new ResponseHandler(201, await useCaseUser.getAll()))
    } catch (error) {
        if (error instanceof Error) {
            logger.crit({
                level: 'crit',
                file,
                message: `${error.message}`,
                stack: error.stack,
            })
        }
        next(error)
    }
}

export const createUser = async (request: Request, _: Response, next: NextFunction) => {
    try {
        next(new ResponseHandler(201, await useCaseUser.create(request.body)))
    } catch (error) {
        console.log(error)
        if (error instanceof Error) {
            logger.crit({
                level: 'crit',
                file,
                message: `${error.message}`,
                stack: error.stack,
            })
        }
        next(error)
    }
}

export const updateUser = async (request: Request, _: Response, next: NextFunction) => {
    try {
        interface ParamInterface {
            id?: number
        }
        const { id }: ParamInterface = request.params
        if (!id) throw new ErrorHandler(400, messages.system.PARAMS_ERROR)

        next(new ResponseHandler(201, await useCaseUser.update(id, request.body)))
    } catch (error) {
        if (error instanceof Error) {
            logger.crit({
                level: 'crit',
                file,
                message: `${error.message}`,
                stack: error.stack,
            })
        }
        next(error)
    }
}

export const deleteUser = async (request: Request, _: Response, next: NextFunction) => {
    try {
        interface ParamInterface {
            id?: number
        }
        const { id }: ParamInterface = request.params
        if (!id) throw new ErrorHandler(400, messages.system.PARAMS_ERROR)

        next(new ResponseHandler(201, await useCaseUser.delete(id)))
    } catch (error) {
        if (error instanceof Error) {
            logger.crit({
                level: 'crit',
                file,
                message: `${error.message}`,
                stack: error.stack,
            })
        }
        next(error)
    }
}
// class UserController extends Controller {
//     constructor() {
//         super(new UserUseCase(), file)
//     }
// }

//export default UserController
