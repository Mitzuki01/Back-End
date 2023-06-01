import express from 'express'
import db from '../services/denunciaService.js'

import nodemailer from "nodemailer"

const router = express.Router()

router.post('/', async (request, response) => {
  const {imageUri,tipo_problema,desc_problema,longitude,latitude} = request.body

  try{    
        await db.setDenuncia(imageUri,tipo_problema,desc_problema,longitude,latitude)

        // sistema para enviar email pra resolutor
        // ver como pegar a imagem, email de resolução e filtro

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
                to: `andrey.justino@etec.sp.gov.br`, 
                subject: 'Uma nova denuncia foi encontrada.', 
                html: `<h1>Nova denuncia feita</h1>
                <p>Os dados são:</p>
                <ul>
                  <li>Tipo de problema: ${tipo_problema}</li>
                  <li>Descrição: ${desc_problema}</li>
                  <li>Latitude: ${latitude}</li>
                  <li>Longitude: ${longitude}</li>
                  <li>CEP: teste </li>
                </ul>` 
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