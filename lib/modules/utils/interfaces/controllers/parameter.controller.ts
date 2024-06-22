import { Request, Response, NextFunction } from 'express'
import { logger, ResponseHandler } from '@shared/infrastructure/handler'
import { GetParameter, GetParameterValue, SaveParameter } from '../../application/use_cases'
import { Config } from '../../application/use_cases/types/parameters'
import { decodeToken } from '@helpers/utils'

const file = 'parameter.controller.ts'
export const getParameters = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { moduleCode } = req.params

        next(new ResponseHandler(201, await GetParameter(moduleCode)))
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

export const saveParameters = async (req: Request, res: Response, next: NextFunction) => {
    try {
        interface BodyInterface {
            config: Config[]
        }
        const { config }: BodyInterface = req.body
        const { moduleCode } = req.params
        const { authorization } = req.headers

        const { companyUuid } = decodeToken(String(authorization))

        next(new ResponseHandler(201, await SaveParameter(moduleCode, companyUuid, config)))
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

export const getParameterValues = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { moduleCode } = req.params
        const { authorization } = req.headers

        const { companyUuid } = decodeToken(String(authorization))

        next(new ResponseHandler(201, await GetParameterValue(moduleCode, companyUuid)))
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
