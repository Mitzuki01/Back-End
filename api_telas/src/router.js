import express from 'express'

import user from './controller/userController.js'
import login from './controller/loginController.js'
import senha from './controller/senhaController.js'

const router = express()

router.use('/user', user)
router.use('/login', login)
router.use('/reset', senha)

export default router