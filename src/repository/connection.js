import mysql2 from 'mysql2/promise';

async function connect() {
    const connection = await mysql2.createConnection('mysql://dm8t9ikvgaivxeq9qt43:pscale_pw_tuj3249nYr1kJuFZPW7WegUot40r00O5kbpXPx2tFMr@aws.connect.psdb.cloud/reportando?ssl={"rejectUnauthorized":true}'
)

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
