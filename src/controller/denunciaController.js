import express from 'express'
import db from '../services/denunciaService.js'

const router = express.Router()

router.post('/', async (request, response) => {
  const {imageUri,tipo_problema,desc_problema,longitude,latitude} = request.body

  try{    
        await db.setDenuncia(imageUri,tipo_problema,desc_problema,longitude,latitude)
        response.status(200).send("envio de dados realizado")
        console.log("pegou")
    }
    catch{
        return((response.status(500).send("Error")))
        console.log("deu ruim")
        console.error(error);
    }
})

export default router