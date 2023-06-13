import mysql2 from 'mysql2/promise';


async function connect() {
    const connection = await mysql2.createConnection('mysql://nsknmtsisfbnp489nver:pscale_pw_R8MEz8pe8KfaQCleeTVZ1231783txT6l5LhKiBkcE75@aws.connect.psdb.cloud/reportando?ssl={"rejectUnauthorized":true}')

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



