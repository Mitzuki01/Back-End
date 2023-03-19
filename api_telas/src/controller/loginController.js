import express from 'express'
import db from '../services/loginServices.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const {email,senha} = req.body;
  try{
    const users = await db.login(email, senha);
    if(users.length > 0){
      res.status(200).send({message : 'login realizado com sucesso!'});
    } else {
      res.status(401).send({message : 'dados inseridos incorretos!'});
    }
  } catch(err){
    res.status(500).send({message : `Houve um erro no banco de dados. ${err}`})
  }
  
});


export default router
