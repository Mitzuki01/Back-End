import express from 'express'

import user from './controller/cadastroController.js'
import userl from './controller/loginController.js'
import email from './controller/senhaController.js'
import camera from './controller/cameraController.js'
import update from './controller/autenticacaoController.js'
import denuncia from './controller/denunciaController.js'
import imgView  from './controller/imgViewController.js'
import getD  from './controller/getD.js'
import formsResolutor from './controller/formResolutor.js'

const router = express()

router.use('/user', user)

router.use('/login', userl)

router.use('/reset', email)

router.use('/photo', camera)

router.use('/denuncia', denuncia)

router.use('/update', update)

router.use('/imgView', imgView )

router.use('/getD', getD )

router.use('/resolutor', formsResolutor)

export default router