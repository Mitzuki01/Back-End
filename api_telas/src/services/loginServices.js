import database from '../repository/connection.js';

async function loginUser(email, senha){
  const sql2 = "SELECT * FROM tbl_usuario WHERE email = ? AND senha=?"
  const dados2 = [email, senha]

  const conn = await database.connect();
  const [rows] = await conn.query(sql2, dados2)
  conn.end();

  return rows
}

export default {loginUser};