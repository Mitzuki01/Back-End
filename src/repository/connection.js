import mysql2 from 'mysql2/promise';


async function connect() {
    const connection = await mysql2.createConnection({
        user : 'j8f2a2zsrgahfjszz98z',
        host : 'aws.connect.psdb.cloud',
        //port : '7052',
        password: 'pscale_pw_Dvdds31LtU2JDkTo6bBIRPjhZwJYki6CWbd3Rg51RCq',
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



