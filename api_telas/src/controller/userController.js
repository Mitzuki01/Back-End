import express from 'express'
import db from '../services/userServices.js'
import bcrypt from 'bcrypt'

const router = express.Router()

router.post('/', async (resquest, response) => {
  const {nome_usuario,email,senha,telefone,nascimento} = resquest.body
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(senha, salt);
  console.log(hash)
  await db.createUser(nome_usuario, email, senha, telefone, nascimento)
  //crypto funcionando, basta substituir a senha pelo hash dentro dessa await
  
  response.status(200).send({message : 'Salvo com sucesso'})
})


export default router
