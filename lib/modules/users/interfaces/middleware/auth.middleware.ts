import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

import { validateMiddleware } from '@shared/interfaces/middleware'
import { logger } from '@shared/infrastructure/handler'

import regexs from '@helpers/regexs'

/**
 * Validate the information when login
 *
 * @author camilo.ordonez
 *
 */
export const loginMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // create schema object
        const schemaBody = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(8), //.pattern(regexs.REGEX_PASSWORD).required(),
        })

        // validate request body against schema
        const { error } = schemaBody.validate(req.body)

        if (error) {
            for (let element of error.details) {
                if (element.context?.key) {
                    validateMiddleware(element.context?.key, element.type)
                }
            }
        }

        next()
    } catch (error) {
        if (error instanceof Error) {
            logger.crit({
                level: 'crit',
                file: 'LoginMiddleware.ts',
                message: `${error.message}`,
                stack: error.stack,
            })
        }
        next(error)
    }
}
