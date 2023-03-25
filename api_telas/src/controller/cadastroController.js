import express from 'express'
import md5 from 'md5'
import db from '../services/cadastroServices.js'

const router = express.Router()

router.post('/', async (request, response) => {
  const {nome_usuario, email, senha, telefone, nascimentoP} = request.body
  const hash = md5(senha);

  await db.duplicate(email,hash)

  try{    
    const userd = await db.duplicate(nome_usuario, email, hash)
 
    if(nome_usuario === '' || email === '' || hash === ''){
      response.status(422).send("Campo em branco")
    }
    else if(userd.length > 0){
      response.status(409).send("Usuario já cadastrado")
    }
    else{
      await db.createUser(nome_usuario, email ,hash, telefone, nascimentoP)
      response.status(200).send("Cadastro realizado")
    }
    }catch{
      return((response.status(500).send("Error")))
    }
})

export default router