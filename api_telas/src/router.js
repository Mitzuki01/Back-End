import express from 'express'

import user from './controller/cadastroController.js'
import userl from './controller/loginController.js'

const router = express()

router.use('/user', user)

router.use('/login',userl)

export default router