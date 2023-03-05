import database from '../repository/connection.js';

async function createUser(name, email, password, cpf, telefone, nascimento) { 
    const sql = 'INSERT INTO tbl_usuario (nome_usuario, email, senha, cpf, telefone, nascimento) VALUES(?, ?, ?, ?, ?, ?)'; 
    
    const dados = [name, email, password, cpf, telefone, nascimento];
    
    const conn = await database.connect();
    
    conn.query(sql, dados);
    conn.end();
}
async function updateUser(name, email, password, typeUser, idUser) { 
  const sql = 'UPDATE tbl_usuario SET nome = ?, email = ?, senha = ?, tipo_usuario = ? WHERE id_usuario = ? '; 
  const dados = [name, email, password, typeUser, idUser];
  
  const conn = await database.connect();
  conn.query(sql, dados);
  conn.end(); 
}

export default {createUser, updateUser};