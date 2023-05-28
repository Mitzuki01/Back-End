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

            const denuncia = db.dadosDenuncia()

            await trasnporte.sendMail({
                from: 'Reportando <contatandosolucoes@gmail.com>', 
                to: `andrey.justino@etec.sp.gov.br`, 
                subject: 'Uma nova denuncia foi encontrada.', 
                html: `<h1>Nova denuncia feita</h1>
                <p>Os dados são:</p>
                <ul>
                  <li>ID da denuncia: ${denuncia[0].id_denuncia}</li>
                  <li>Quantidade de denuncia: ${denuncia[0].qnt_denuncia}</li>
                  <li>Tipo de problema: ${denuncia[0].tipo_problema}</li>
                  <li>Descrição: ${denuncia[0].desc_problema}</li>
                  <li>Latitude: ${denuncia[0].latitude}</li>
                  <li>Longitude: ${denuncia[0].longitude}</li>
                  <li>CEP: ${denuncia[0].fk_cep}</li>
                </ul>`, 
                text: `Nova denuncia encontrada dados: ${denuncia}` 
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