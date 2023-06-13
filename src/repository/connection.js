import mysql2 from 'mysql2/promise';


async function connect() {
    const connection = await mysql2.createConnection('mysql://0pyvnob9lu5rrz56z0ry:pscale_pw_p27mgKYHXJerepDtNaUrTJ0IcTSeVAS6jwnkpa3yGrF@aws.connect.psdb.cloud/reportando?ssl={"rejectUnauthorized":true}')

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



