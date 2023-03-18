import database from '../repository/connection.js'

async function loginUser(email,senha) {
  const sql = 'SELECT * FROM tbl_usuario WHERE email = ? AND senha = ?';
  const dataLogin = [email, senha];
  
  const conn = await database.connect();
  const [rows] = await conn.query(sql, dataLogin);
  conn.end();
  
  return rows; //[0]
}

export default {loginUser}
