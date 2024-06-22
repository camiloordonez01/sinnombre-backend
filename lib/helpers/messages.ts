const messages = {
    system: {
        INTERNAL_ERROR: 'Error Interno',
        UNEXPECTED_ERROR: 'Error inesperado',
        ERROR_NOT_FOUNT: 'No se encontró',
        UPDATE_SUCCESS: 'UPDATE SUCCESS',
        UPDATE_ERROR: 'UPDATE ERROR',
        HANDLE_ERROR: 'ERROR',
        HANDLE_SUCCESS: 'SUCCESS',
        PARAMS_ERROR: 'Parámetro incorrecto',
        TOKEN_ERROR: 'No autorizado',
        MIDDLEWARE_ERROR_EMAIL: (field: string) => `El campo "${field}" email es incorrecto`,
        MIDDLEWARE_ERROR_REGEX: (field: string) => `El formato del campo "${field}" es incorrecto`,
        MIDDLEWARE_ERROR_REQUIRED: (field: string) => `El campo "${field}" es requerido`,
    },
    users: {
        LOGIN_FAILED: 'Email o contraseña incorrectos',
        EMAIL_EXISTS: 'El email ya esta en uso',
    },
    parameters: {
        ERROR_PARAMETER_BY_MODULE: 'No se encontraron parámetros para el modulo',
    },
}

export default messages
