import crypto from 'crypto'
import jwt from 'jsonwebtoken'

const { SECRET_KEY_JWT } = process.env

/**
 * Convert text to md5 encryption
 * @param {string} data Text to convert to md5
 * @returns
 */
export const generateMd5 = (text: string) => {
    return crypto.createHash('md5').update(text).digest('hex')
}

/**
 * Generate the user token
 * @param {string} data Information for the token
 * @returns
 */
export const generateToken = (data: object) => {
    return jwt.sign(data, SECRET_KEY_JWT ?? '12345678')
}
