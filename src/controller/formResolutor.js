import express, { response } from 'express'
import db from "../services/resolutorService.js"

const router = express.Router()

router.post('/', async (resquest, response) => {
    const {id} = resquest.body
    
    try{

        const resposta = await db.resolutor(id)

        if(id === '' ){
            return(response.status(422).send('Campo em branco'))
        }
        if(resposta.length > 0){
            const results = resposta[0]

            response.status(200).json({mensagem: "ID valido", denuncia: `${results}`})
    }
    else{
      response.status(404).send('ID invalido')
    }
    }catch(error){
        console.log('erro no banco formResolutor >>',error)
    }

})

// tabela
router.get('/', async (resquest, response) => {
    try{
        const results = await db.denuncia() 

        

        if(results.length == 0){
            response.status(204).end();
        } else{
            response.status(200).json(results);
        }

    }catch(error){
        response.status(500).json({message: `Encontramos um erro: ${error}`});
    }
})

export default router