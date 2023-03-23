import database from '../repository/connection.js';

async function duplicate(nome, email, senha) {
    const sql3  = "SELECT * FROM tbl_usuario WHERE email = ?"
    const check = [email] 
    const dados = [nome, senha]
    
    const conn = await database.connect(); 
    const [rows] = await conn.query(sql3, check, dados);
    conn.end(); 

    return rows
}

async function createUser(nome, email, senha, telefone, nascimento) { 
    const sql = 'INSERT INTO tbl_usuario (nome, email, senha, telefone, nascimento) VALUES(?, ?, ?, ?, ?)'; 
    
    const dados = [nome, email, senha, telefone, nascimento];

    const conn = await database.connect();
    
    conn.query(sql, dados);
    conn.end();
}

export default {createUser, duplicate};