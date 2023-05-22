import database from '../repository/connection.js';

async function resolutor(id){
  const sql = "SELECT * FROM tbl_denuncia WHERE id_denuncia = ?"
  const dados = [id]

  const conn = await database.connect();
  const [rows] = await conn.query(sql, dados)
  conn.end();

  return rows
}

async function denuncia(){
  const sql = 'SELECT * FROM tbl_denuncia'

  const conn = await database.connect();
  const [rows] = await conn.query(sql)

  conn.end()

  return rows
}

export default {resolutor, denuncia};