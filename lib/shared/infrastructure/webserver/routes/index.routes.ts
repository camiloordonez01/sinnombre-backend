import express from 'express'
import UsersRouter from '@users/infrastructure/webserver/routes/index.routes'
import UtilsRouter from '@utils/infrastructure/webserver/routes/index.routes'

const RouterMain = express.Router()

RouterMain.use('/users', UsersRouter)
RouterMain.use('/utils', UtilsRouter)

export default RouterMain
