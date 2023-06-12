import mysql2 from 'mysql2/promise';

async function connect() {
    const connection = await mysql2.createConnection('mysql://5qt7otzr0ih541zbl8tl:pscale_pw_6Qu0ycvFj19gHODSmi1u7V2WsYOV29OJEgAFT0snmm1@aws.connect.psdb.cloud/reportando?ssl={"rejectUnauthorized":true}'
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

