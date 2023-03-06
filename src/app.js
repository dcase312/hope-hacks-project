const path = require('path')
const express = require('express') //Express is a function


const app = express(); //Express don't take any arugments
const port = process.env.PORT || 3001

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

// Local Host
app.listen(3001, () => {
    console.log('Server is up on port ' + port)
})
