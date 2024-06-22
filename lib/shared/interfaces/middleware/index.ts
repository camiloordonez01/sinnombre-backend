import { ErrorHandler } from '@shared/infrastructure/handler'
import messages from '@helpers/messages'

export const validateMiddleware = (field: string, errorItem: string) => {
    switch (errorItem) {
        case 'any.required':
            throw new ErrorHandler(400, messages.system.MIDDLEWARE_ERROR_REQUIRED(field))
        case 'string.email':
            throw new ErrorHandler(400, messages.system.MIDDLEWARE_ERROR_EMAIL(field))
        case 'string.pattern.base':
            throw new ErrorHandler(400, messages.system.MIDDLEWARE_ERROR_REGEX(field))
        default:
            break
    }
}
