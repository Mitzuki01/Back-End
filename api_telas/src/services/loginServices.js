import database from '../repository/connection.js';

async function login(email,senha) {
  const sql = 'SELECT * FROM tbl_usuario WHERE email = ? AND senha =?';
  const dataLogin = [email, senha];
  
  const conn = await database.connect();
  const [rows] = await conn.query(sql, dataLogin);
  
  return rows; //[0]
}

export default {login}
