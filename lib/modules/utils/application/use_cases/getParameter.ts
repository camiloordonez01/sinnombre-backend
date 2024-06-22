import { ErrorHandler } from '@shared/infrastructure/handler'

import { ParameterStorage } from '../../interfaces/storage/mysql'
import { ParameterRepository } from '../../domain/repositories'

import messages from '@helpers/messages'

const parameterRepository = new ParameterRepository(new ParameterStorage())

export default async (moduleCode: string) => {
    const parameters = await parameterRepository.getParameterByModuleCode(moduleCode)
    if (!parameters || parameters.length === 0) {
        throw new ErrorHandler(400, messages.parameters.ERROR_PARAMETER_BY_MODULE)
    }

    return parameters.map((parameter) => {
        const { activeRow, createdAt, updatedAt, ...data } = parameter

        return data
    })
}
