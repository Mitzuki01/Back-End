import mysql2 from 'mysql2/promise';


async function connect() {
    const connection = await mysql2.createConnection({
        user : '46a8p6go1uildklzm20a',
        host : 'aws.connect.psdb.cloud',
        //port : '7052',
        password: 'pscale_pw_Or8kVRnLDHEUgNqi90maHhAd4Gf067MVn5VDxEVnl1B',
        database : 'reportando'
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



