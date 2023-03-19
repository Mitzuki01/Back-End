import database from '../repository/connection.js';

async function createUser(nome_usuario, email, senha, telefone, nascimento) { 
    const sql = 'INSERT INTO tbl_usuario (nome_usuario, email, senha, telefone, nascimento) VALUES(?, ?, ?, ?, ?)'; 
    const dados = [nome_usuario, email, senha, telefone, nascimento];
    const conn = await database.connect();
    conn.query(sql, dados);
    conn.end();
}

export default {createUser};
