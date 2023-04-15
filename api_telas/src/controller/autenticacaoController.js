import express from 'express'
import db from '../services/checkService.js'

const router = express.Router()

router.post('/', async(req, res)=>{

    const {email, codigo, senha} = req.body;
  
    try{
      const user = await db.checkCodigo(email, codigo);
      
      if(user.length > 0){

        await db.changePassword(email, senha);

        res.status(200).send('Senha atualizada')
  
      }else{
        res.status(404).send({messsage: `Usuário não encontrado`});
        console.log('senhaController >>>', `Usuário não encontrado`)
      }
  
    }catch(err){
      res.status(500).send({messsage: `Houve um erro no banco de dados. ${err}`})
      console.log('senhaController >>>', err)
    }
  
  });
  
  export default router