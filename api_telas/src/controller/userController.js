import express from 'express'
import db from '../services/userServices.js'

const router = express.Router()

router.post('/', async (resquest, response) => {
  const {nome, email, senha, cpf, telefone, nascimento} = resquest.body

  await db.createUser(nome, email, senha, cpf, telefone, nascimento)

  response.status(200).send({message : 'Salvo com sucesso'})
})

export default router