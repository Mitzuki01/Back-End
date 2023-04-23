import db from '../repository/connection.js';

async function setDenuncia(imageUri,tipo_problema,longitude,latitude) { 
    const sql = 'INSERT INTO denuncia (imagem,tipo_problema,longitude,latitude) VALUES(?,?,?,?)'; 
    
    const dados = [imageUri,tipo_problema,longitude,latitude];

    const conn = await db.connect();
    
    conn.query(sql, dados);
    conn.end();
}

export default {setDenuncia};