import db from '../repository/connection.js';

async function duplicate(nome_usuario, email, senha) {
    const sql3  = "SELECT * FROM tbl_usuario WHERE email = ?"
    const check = [email] 
    const dados = [nome_usuario, senha]
    
    const conn = await db.connect(); 
    const [rows] = await conn.query(sql3, check, dados);
    conn.end(); 

    return rows
}


async function createUser(nome_usuario, email, senha, nascimentoP) { 
    const sql = 'INSERT INTO tbl_usuario (nome_usuario, email, senha, nascimento) VALUES(?, ?, ?, ?)'; 
    
    const dados = [nome_usuario, email, senha, nascimentoP];

    const conn = await db.connect();
    
    conn.query(sql, dados);
    conn.end();
}

export default {createUser, duplicate};