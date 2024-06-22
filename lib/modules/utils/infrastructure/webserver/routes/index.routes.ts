import express from 'express'
import { validateToken } from '@helpers/utils'

import { getParameters, getParameterValues, saveParameters } from '../../../interfaces/controllers/parameter.controller'

const UtilsRouter = express.Router()

UtilsRouter.get('/parameters/:moduleCode', validateToken, getParameters)

UtilsRouter.get('/parameters/:moduleCode/values', validateToken, getParameterValues)

UtilsRouter.post('/parameters/:moduleCode', validateToken, saveParameters)

export default UtilsRouter
