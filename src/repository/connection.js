import mysql2 from 'mysql2/promise';


async function connect() {
    const connection = await mysql2.createConnection({ 
            database: 'id20758368_reportando',
            user: 'id20758368_root',
            host: 'localhost',
            password: 'Etecembu@123',
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



