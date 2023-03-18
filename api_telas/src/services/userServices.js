import database from '../repository/connection.js';

async function createUser(nome, email, senha, telefone, nascimento) { 
    const sql = 'INSERT INTO tbl_usuario (nome_usuario, email, senha, telefone, nascimento) VALUES(?, ?, ?, ?, ?)'; 
    const dados = [nome, email, senha, telefone, nascimento];
    const conn = await database.connect();
    conn.query(sql, dados);
    conn.end();
}
async function updateUser(name, email, senha) { 
  const sql = 'UPDATE tbl_usuario SET nome = ?, email = ?, senha = ?, tipo_usuario = ? WHERE id_usuario = ? '; 
  const dados = [name, email, senha];
  
  const conn = await database.connect();
  conn.query(sql, dados);
  conn.end(); 
}


async function loginUser(email,senha) {
  const sql = 'SELECT * FROM tbl_usuario WHERE email = ? AND senha =?';
  const dataLogin = [email, senha];
  
  const conn = await database.connect();
  const [rows] = await conn.query(sql, dataLogin);
  
  return rows; //[0]
}

export default {createUser, updateUser , loginUser};
