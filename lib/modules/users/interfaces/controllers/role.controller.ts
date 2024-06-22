import { RoleUseCase } from '../../application/use_cases'
import Controller from '@shared/interfaces/controllers/controller'

const file = 'role.controller.ts'
class RoleController extends Controller {
    constructor() {
        super(new RoleUseCase(), file)
    }
}

export default RoleController
