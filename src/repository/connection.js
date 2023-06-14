import mysql2 from 'mysql2/promise';


async function connect() {
    const connection = await mysql2.createConnection({
        user : 'root',
        host : 'containers-us-west-164.railway.app',
        port : '7918',
        password: 'zPK220HSRtgYJGdSKp5L',
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



