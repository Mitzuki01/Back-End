import mysql2 from 'mysql2/promise';


async function connect() {
    const connection = await mysql2.createConnection('mysql://tdln1vh33z2ukadacmnh:pscale_pw_7buN28cd9wO8qqT9ps9cTIEPtSYHRoud0R1ThAwzHHJ@aws.connect.psdb.cloud/reportando?ssl={"rejectUnauthorized":true}')

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



