import mysql2 from 'mysql2/promise';


async function connect() {
    const connection = await mysql2.createConnection({ 
             user : 's8dojb2oruqduo6yo85c',
             host : 'aws.connect.psdb.cloud',
             password : 'pscale_pw_As7bGbZ5f5AyltJYUU8S4Xyq5zHtZgpTwbvq9AIl64K',
             database : 'reportando',
             ssl : {
               rejectUnauthorized:false,
             }
           })

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



