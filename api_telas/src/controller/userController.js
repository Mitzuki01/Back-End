import express from 'express'
import db from '../services/userServices.js'

const router = express.Router()

router.post('/', async (resquest, response) => {
  const {nome_usuario,email,senha,telefone,nascimento} = resquest.body
console.log(senha)
  await db.createUser(nome_usuario, email, senha, telefone, nascimento)
  
  response.status(200).send({message : 'Salvo com sucesso'})
})

router.post('/', async (resquest, response) => {
  const {email,senha} = resquest.body;
  await db.loginUser(email, senha),
  response.status(200).send({message : 'login realizado com sucesso!'})
})

export default router
