import database from '../repository/connection.js'


async function checkEmail(email){
  const sql = "SELECT * FROM tbl_usuario WHERE email = ?";
  const dadosVeri = [email] 

  const conn = await database.connect();
  const [rows] = await conn.query(sql, dadosVeri);
  
  conn.end();
  return rows;
}

async function changePassword(email, newPassword){
  const sql = "UPADATE tbl_usario SET senha = ? WHERE email = ?";
  const dataNewPass = [newPassword, email];

  const conn = await database.connect();
  await conn.query(sql, dataNewPass);
  conn.end();

}

export default {checkEmail, changePassword}