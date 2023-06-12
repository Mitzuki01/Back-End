import mysql2 from 'mysql2/promise';

async function connect() {
    const connection = await mysql2.createConnection('mysql://hrwz213l6zvd7kbpv9zf:pscale_pw_Yf8lbL3n4tuV0m1BHyu7GltwBlRelSOv4z2e6d6QTdr@aws.connect.psdb.cloud/reportando?ssl={"rejectUnauthorized":true}'
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
