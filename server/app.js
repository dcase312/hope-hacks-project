const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

.//


// let our server know the dbservice is there
const dbService = require('./dbService');

app.use(cors());
app.use(express.json());

//create
app.post('/insert', (req,res) =>{})

//read
app.get('/getNames', (req,res)=>{
const dbSQL = dbService.getDBService();
 const results = dbSQL.getAllData();

 console.log(results)
})

//update

//delete

app.listen(process.env.PORT, ()=> console.log('We Working'))