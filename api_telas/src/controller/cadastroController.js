import express from 'express'
import db from '../services/cadastroServices.js'

const router = express.Router()

router.post('/', async (resquest, response) => {
  const {nome, email, senha} = resquest.body
  await db.duplicate(email,senha)

  try{    
    const userd = await db.duplicate(nome, email, senha)
 
    if(nome === '' || email === '' || senha === ''){
      response.status(422).send("Campo em branco")
    }
    else if(userd.length > 0){
      response.status(409).send("Usuario já cadastrado")
    }
    else{
      await db.createUser(nome, email ,senha)
      response.status(200).send("Cadastro realizado")
    }
    }catch{
      return((response.status(500).send("Error")))
    }
})

export default router