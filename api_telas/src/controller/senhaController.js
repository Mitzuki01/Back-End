import express from 'express'
import db from '../services/checkService.js'
import { generatePassword } from '../helper/recuperarPassword.js'

const router = express.Router()

router.post('/reset', async(req, res)=>{

  const {email, telefone} = req.body;

  try{
    const user = await db.checkEmail(email, telefone);
    
    if(user.length > 0){
      const newPassword = generatePassword();
      await db.changePassword(email, telefone, newPassword);
      res.status(200).send({messsage: `Nova senha: ${newPassword}`});

    }else{
      res.status(404).send({messsage: `Usuário não encontrado`});
    }

  }catch(err){
    res.status(500).send({messsage: `Houve um erro no banco de dados. ${err}`})
  }

});

export default router