import express from 'express'
import md5 from 'md5'
import db from '../services/loginServices.js'

const router = express.Router()

router.post('/', async (resquest, response) => {
  const {email,senha} = resquest.body
  //const hash = md5(senha);
  await db.loginUser(email,senha)

  try{
    const userl = await db.loginUser(email, senha);

    if(email === '' || senha === ''){
      return(response.status(422).send('Campo em branco'))
    }
    if(userl.length > 0){
      response.status(200).send('Login bem sucedido')
    }
    else{
      response.status(404).send('Usuário não cadastrado')
    }
    }catch{
      response.status(500).send('Error')
    }
})

export default router
