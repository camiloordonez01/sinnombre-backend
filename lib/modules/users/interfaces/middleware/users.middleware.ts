import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

import { validateMiddleware } from '@shared/interfaces/middleware'
import { logger } from '@shared/infrastructure/handler'

import regexs from '@helpers/regexs'

/**
 * Validates information when creating a user
 *
 * @author camilo.ordonez
 *
 */
export const createUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // create schema object
        const schemaBody = Joi.object({
            names: Joi.string().required(),
            lastNames: Joi.string().required(),
            avatar: Joi.string(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required(), //.pattern(regexs.REGEX_PASSWORD),
            roleCode: Joi.string().required(),
            companyUuid: Joi.string().required(),
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

/**
 * Validates information when updating a user
 *
 * @author camilo.ordonez
 *
 */
export const updateUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // create schema object
        const schemaBody = Joi.object({
            names: Joi.string(),
            lastNames: Joi.string(),
            avatar: Joi.string(),
            email: Joi.string().email(),
            password: Joi.string().min(8), //.pattern(regexs.REGEX_PASSWORD),
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
