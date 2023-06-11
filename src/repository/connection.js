import mysql2 from 'mysql2/promise';

async function connect() {
    const connection = await mysql2.createConnection('mysql://oftachouj8a5ivxu7jc7:pscale_pw_EC44pmqWnGNvi1Mauk2UWc306t3nBlE7z5KJ9I1An4L@aws.connect.psdb.cloud/reportando?ssl={"rejectUnauthorized":true}')

    return connection;
};

export default {connect};

// { 
//     user : 'root',
//     host : 'localhost',
//     port : 3306,
//     password : 'Pai260775',
//     database : 'constsolucion'
//   }
