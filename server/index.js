const express = require("express");
const app = express();
const pool = require("./db");
const path = require('path');


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../')


// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// Define the route
// Index(Home Page)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

// Mission Page
app.get('./mission', (req, res) => {
    res.send('about', {
        
    })
})

// Contact Page
// app.get('/contact', (req, res) => {
//     res.render('help', {
      
//     })
// })

// Map Page
app.get('/map', (req, res) => {
    res.sendFile('404', {
   
    })
})


//Parse the request body as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


// Defined a GET endpoint for the contact form
app.get('/contact', (req,res) => {
    res.sendFile('contact');
});

//Define a POST endpoint for submitting rhe contact form
app.post('/contact', async (req,res) => {
    
    const {first_name, last_name, current_school, annual_income, email_address} = req.body;
    if (!first_name || !last_name || !current_school || !annual_income || !email_address) {
        res.status(400).send('All fields are required.');
        return;
      }
    console.log (`New Contact Form Submission: ${first_name}, ${last_name}, ${current_school}, ${annual_income}, ${email_address}`);
    try {
        const conn = await pool.getConnection();
        const [rows, fields] = await conn.execute(
            'INSERT INTO contactINFO (first_name, last_name, current_school, annual_income, email_address) VALUES (?, ?, ?, ?, ?)',
            [first_name, last_name, current_school, annual_income, email_address]
        );
        console.log(`Inserted ${rows.affectedRows} rows(s)`)
        conn.release();
        res.send('Form Submitted');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Local Host
app.listen(3001, () => {
    console.log('Server is up on port ')
})