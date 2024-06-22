import { ErrorHandler } from '@shared/infrastructure/handler'
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import messages from './messages'

const { SECRET_KEY_JWT } = process.env

/**
 * Validate the token generated with jwt
 *
 * @author camilo.ordonez
 *
 */
export const validateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers['authorization'] as string | undefined
        if (!token) throw new ErrorHandler(400, messages.system.TOKEN_ERROR)

        jwt.verify(token, SECRET_KEY_JWT ?? '12345678')

        next()
    } catch (error) {
        throw new ErrorHandler(400, messages.system.TOKEN_ERROR)
    }
}

/**
 * Get data by token
 * @param {string} token the user's token
 * @returns
 */
export const decodeToken = (token: string) => {
    try {
        interface DataToken {
            names: string
            email: string
            avatar: string
            companyUuid: string
        }
        const decode = jwt.verify(token, SECRET_KEY_JWT ?? '12345678') as DataToken

        return decode
    } catch (error) {
        throw new ErrorHandler(400, messages.system.TOKEN_ERROR)
    }
}
