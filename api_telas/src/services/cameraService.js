import db from '../repository/connection.js';

async function setPhoto(capturedPhoto) { 
    const sql = 'INSERT INTO tbl_usuario (imagem) VALUES(?)'; 
    
    const dados = [capturedPhoto];

    const conn = await db.connect();
    
    conn.query(sql, dados);
    conn.end();
}

export default {setPhoto};