// const mysql = require('mysql2');
// const dotenv = require('dotenv');
// let instance = null;
// dotenv.config();
// const connection = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//  port: process.env.DB_port,
// });
// connection.connect(err =>{
//     if(err){
//         console.log(err.message)
//         return;
//     }
//     console.log("Connected to MySQL database")
// });
// // pulled data from persons table.
// class dbService{
//     static getDBService(){
//         return instance ? instance : new dbService();
//     }
// getAllData = () =>{
//     const selectAllQuery = 'SELECT * FROM persons1;';
//     //tell the connection the query we want to run
//     connection.query(selectAllQuery, (err,results) => {
//         if(err){
//             console.log(err.message)
//             return;
//         }
//         return (results)
//     })
// }
// }
// module.export = dbService;

// const express = require("express");
// const mysql2 = require("mysql2/promise");
// const bodyParser = require("body-parser");
// const app = express();
// const dotev = ("dotenv")
// app.use(bodyParser.urlencoded({ extended: true }));
// const connection = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//  port: process.env.DB_port,
// });
// app.post("/contact", function (req, res) {
//   let contactINFO = {
//     firstname: req.body.first_name,
//     lastname: req.body.last_name,
//     school: req.body.current_school,
//     income: req.body.income,
//     email: req.body.email,
//   };
//   connection.query(
//     "INSERT INTO contactINFO SET ?",
//     contactDB,
//     function (err, result) {
//       if (err) throw err;
//       res.send(
//         "Thanks for submitting"
//       );
//       // res.redirect("/");
//     }
//   );
// });
// connection.end();