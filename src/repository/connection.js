import mysql2 from 'mysql2/promise';

async function connect() {
    const connection = await mysql2.createConnection('mysql://olqaumbu34k0rl1pc5jg:pscale_pw_sNYRhtMCxSDk3AvvF2reLrTkxC5m1uMSE0mZoj07r0t@aws.connect.psdb.cloud/reportando?ssl={"rejectUnauthorized":true}')

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
