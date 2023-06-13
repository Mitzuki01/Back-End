import mysql2 from 'mysql2/promise';


async function connect() {
    const connection = await mysql2.createConnection('mysql://lm9j4ffmagmv4vtvbtve:pscale_pw_4MBzBivF4k8d7PAHJLNExtdA9Y7qotEnMOAIFYXvfLm@aws.connect.psdb.cloud/reportando?ssl={"rejectUnauthorized":true}')

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



