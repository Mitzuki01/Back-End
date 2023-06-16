import mysql2 from 'mysql2/promise';


async function connect() {
    const connection = await mysql2.createConnection({ 
            database: 'reportando',
            user: 'ex1ul95czxk791u30ai5',
            host: 'aws.connect.psdb.cloud',
            password: 'pscale_pw_MSrPExPFdLuddw83WXCJ54OdRVWkMxO95MsueJsgPz5',
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



