import mysql2 from 'mysql2/promise';


async function connect() {
    const connection = await mysql2.createConnection('mysql://tak140iu6rv8jepbi4oq:pscale_pw_5qlTxC8MxhT8LmAdYIzCIIlxL5GA79EB5pm1iV24Mgt@aws.connect.psdb.cloud/reportando?ssl={"rejectUnauthorized":true}')

    return connection;
};

export default {connect};

// { 
//     user : 'root',
//     host : 'localhost',
//     port : 3306,
//     password : '',
//     database : 'constsolucion'
//   }



