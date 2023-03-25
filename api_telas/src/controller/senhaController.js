import express from 'express'
import db from '../services/checkService.js'
import { generatePassword } from '../helper/recuperarPassword.js'
const nodemailer = require('nodemailer')

const router = express.Router()

router.post('/reset', async(req, res)=>{

  const {email} = req.body;

  try{
    const user = await db.checkEmail(email);
    
    if(user.length > 0){
      const newPassword = generatePassword();
      await db.changePassword(email, newPassword);

      const email = async () => {
        let trasnporte = nodemailer.createTransport({
            host: "smtp.gmail.com",
            secure: true,
            port: 465,
            auth: {
                user: "contatandosolucoes@gmail.com",
                pass: "zpfezrbxqptpujgn"
            },
            tls: {
                rejectUnauthorized: false
              }
        })
    
        await trasnporte.sendMail({
            from: 'Reportando <contatandosolucoes@gmail.com>', 
            to: `${email}`, 
            subject: 'Redefinição de senha realizada.', 
            html: `<h1>Sua senha foi alterada</h1><br><p>Sua nova senha é: ${newPassword}</p>`, 
            text: `Sua senha foi alterada, Sua nova senha é: ${newPassword}` 
        })
    
        .then(() => console.log("E-mail enviado com sucesso."))
        .catch((err) => console.log(`Houve um erro: ${err}`))
      }
    
      res.status(200).send(email());

    }else{
      res.status(404).send({messsage: `Usuário não encontrado`});
    }

  }catch(err){
    res.status(500).send({messsage: `Houve um erro no banco de dados. ${err}`})
  }

});

router.get('/reset', async(req, res)=>{
  
})

export default router