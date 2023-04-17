import mysql2 from 'mysql2/promise';

async function connect() {
  const connection = await mysql2.createConnection({ 
    user : 'admin',
    host : 'reportando.cpannwpkgdt6.us-east-2.rds.amazonaws.com',
    port : 3306,
    password : 'Etecembu',
    database : 'constsolucion'
  })
  
  return connection;
};

export default {connect};