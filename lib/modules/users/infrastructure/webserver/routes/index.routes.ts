import express from 'express'
import { validateToken } from '@helpers/utils'

import {
    getUser,
    getAllUser,
    createUser,
    deleteUser,
    updateUser,
} from '../../../interfaces/controllers/users.controller'
import RoleController from '../../../interfaces/controllers/role.controller'
import { login } from '../../../interfaces/controllers/auth.controller'

import { createUserMiddleware, updateUserMiddleware } from '../../../interfaces/middleware/users.middleware'
import { loginMiddleware } from '../../../interfaces/middleware/auth.middleware'

const routerMain = express.Router()
const roleController = new RoleController()

// Login user
routerMain.post('/login', loginMiddleware, login)

// Get all roles
routerMain.get('/roles', validateToken, (_, __, next) => roleController.getAll(next))

// Get user
routerMain.get('/:id', validateToken, getUser)

// Get all users
routerMain.get('/', validateToken, getAllUser)

// Create a user
routerMain.post('/', validateToken, createUserMiddleware, createUser)

// Update a user
routerMain.put('/:id', validateToken, updateUserMiddleware, updateUser)

// Delete a user
routerMain.delete('/:id', validateToken, deleteUser)

export default routerMain
