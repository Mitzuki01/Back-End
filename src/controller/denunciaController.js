import express from 'express'
import db from '../services/denunciaService.js'

import nodemailer from "nodemailer"

const router = express.Router()

router.post('/', async (request, response) => {
  const {imageUri,tipo_problema,desc_problema,longitude,latitude} = request.body

  try{    
        await db.setDenuncia(imageUri,tipo_problema,desc_problema,longitude,latitude)

        // sistema para enviar email pra resolutor

        const denuncia = db.dadosDenuncia()

        console.log('formulario denuncia >>> ',denuncia)

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

            const denuncia = db.dadosDenuncia() // ver com o professro oque é promise 

            await trasnporte.sendMail({
                from: 'Reportando <contatandosolucoes@gmail.com>', 
                to: `andrey.justino@etec.sp.gov.br`, 
                subject: 'Uma nova denuncia foi encontrada.', 
                html: `<h1>Nova denuncia feita</h1><br><p>Os dados são: ${denuncia}</p>`, 
                text: `Sua senha foi alterada, Sua nova senha é: ${denuncia}` 
            })

            .then(() => console.log("E-mail enviado com sucesso."))
            .catch((err) => console.log(`Houve um erro: ${err}`))

        }

        response.status(200).send(email())
        console.log('Email de denuncia enviado com sucesso!')
    }
    catch(error){
        response.status(500).send({mensagem:'erro', erro: `${error}`})
    }
})

export default router