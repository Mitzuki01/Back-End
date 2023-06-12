import mysql2 from 'mysql2/promise';

async function connect() {
    const connection = await mysql2.createConnection('mysql://l97y4rz8gtbf2zfg6z4k:pscale_pw_xGhc5RTRGGmO4qWzKRzQgaq63jiWu9EagGjB3cbzMEE@aws.connect.psdb.cloud/reportando?ssl={"rejectUnauthorized":true}
')

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

