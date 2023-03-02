const path = require('path')
const express = require('express') //Express is a function




const app = express(); //Express don't take any arugments
const port = process.env.PORT || 3001

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
// const publicDirectoryPathOne = path.join(__dirname, '../map_page/')
// const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
// app.set('view engine', 'hbs')
// app.set('views', viewsPath)
// hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))
// app.use(express.static(publicDirectoryPathOne))

// app.get('', (req, res) => {
//     res.status('').send('index')
// })
// Define the route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  // Export the router
//   module.exports = router;

app.get('./mission', (req, res) => {
    res.send('about', {
        
    })
})

app.get('./contact', (req, res) => {
    res.render('help', {
      
    })
})

app.get('/map', (req, res) => {
    res.sendFile('404', {
   
    })
})

// app.get('/contact/*', (req, res) => {
//     res.render('404', {
   
//     })
// })

// app.get('*', (req, res) => {
//     res.render('404', {
     
//     })
// })

app.listen(3001, () => {
    console.log('Server is up on port ' + port)
})