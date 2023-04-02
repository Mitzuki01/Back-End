import express from 'express'

import user from './controller/cadastroController.js'
import userl from './controller/loginController.js'
import email from './controller/senhaController.js'

const router = express()

router.use('/user', user)

router.use('/login',userl)

router.use('/reset', email)

export default router