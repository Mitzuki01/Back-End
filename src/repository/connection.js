import mysql2 from 'mysql2/promise';


async function connect() {
    const connection = await mysql2.createConnection({
        user : 'root',
        host : 'containers-us-west-32.railway.app',
        port : '7052',
        password: 'lSheI9PmKG0aSg9IyAce',
        database : 'railway'
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



