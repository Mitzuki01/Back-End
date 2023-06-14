import mysql2 from 'mysql2/promise';


async function connect() {
    const connection = await mysql2.createConnection({
        user : 'id20758381_root',
        host : 'localhost',
        port : '21',
        password: 'Etecembu@123',
        database : 'id20758381_constsolucion'
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



