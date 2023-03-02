const mysql = require('mysql2');
const dotenv = require('dotenv');
let instance = null;
dotenv.config();
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
 port: process.env.DB_port,
});
connection.connect(err =>{
    if(err){
        console.log(err.message)
        return;
    }
    console.log("Connected to MySQL database")
});
// pulled data from persons table.
class dbService{
    static getDBService(){
        return instance ? instance : new dbService();
    }
getAllData = () =>{
    const selectAllQuery = 'SELECT * FROM persons1;';
    //tell the connection the query we want to run
    connection.query(selectAllQuery, (err,results) => {
        if(err){
            console.log(err.message)
            return;
        }
        return (results)
    })
}
}
module.export = dbService;