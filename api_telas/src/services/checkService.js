import database from '../repository/connection.js'

async function checkEmail(email,telefone){
  const sql = "SELECT * FROM tbl_usuario WHERE email = ? and telefone = ?";
  const dadosVeri = [email, telefone] 

  const conn = await database.connect();
  const [rows] = await conn.query(sql, dadosVeri);
  
  conn.end();
  return rows;
}

async function changePassword(email, telefone, newPassword){
  const sql = "UPADATE tbl_usario SET senha = ? WHERE email = ? and telefone = ?";
  const dataNewPass = [newPassword, email, telefone];

  const conn = await database.connect();
  await conn.query(sql, dataNewPass);
  conn.end();

}

export default {checkEmail, changePassword}