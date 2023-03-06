import database from '../repository/connection.js';

async function createUser(nome, email, senha, telefone, nascimento) { 
    const sql = 'INSERT INTO tbl_usuario (nome_usuario, email, senha, telefone, nascimento) VALUES(?, ?, ?, ?, ?)'; 
    
    const dados = [nome, email, senha, telefone, nascimento];
    
    const conn = await database.connect();
    
    conn.query(sql, dados);
    conn.end();
}
async function updateUser(name, email, password) { 
  const sql = 'UPDATE tbl_usuario SET nome = ?, email = ?, senha = ?, tipo_usuario = ? WHERE id_usuario = ? '; 
  const dados = [name, email, password];
  
  const conn = await database.connect();
  conn.query(sql, dados);
  conn.end(); 
}

export default {createUser, updateUser};