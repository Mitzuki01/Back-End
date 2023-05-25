import db from '../repository/connection.js';

async function setDenuncia(imageUri,tipo_problema,desc_problema,longitude,latitude) { 
    const sql = 'INSERT INTO tbl_denuncia (imagem,tipo_problema,desc_problema,longitude,latitude) VALUES(?,?,?,?,?)'; 
    
    const dados = [imageUri,tipo_problema,desc_problema,longitude,latitude];

    const conn = await db.connect();
    
    conn.query(sql, dados);
    conn.end();
}
// ---------------------------------------------------
async function dadosDenuncia(){
    const sql = 'select * from tbl_denuncia where id_denuncia =  (select max(id_denuncia) from tbl_denuncia) ;'

    const conn = await db.connect()

    const [rows] = conn.query(sql)
    conn.end()

    return rows
}

export default {setDenuncia, dadosDenuncia};