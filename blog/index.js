
const express = require('express')
var exphbs  = require('express-handlebars');
const app = express()

const path = require('path')

const port = 3000
// const router = require('./routes/blog')
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname,"static")))//for making a folder as static 
app.use('/', require(path.join(__dirname,'routes/blog.js')))


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/about', (req, res) => {
//     // res.send('pramath')
//     // res.sendFile(path.join(__dirname,'index.html')) making a file to server.
//     // res.json({"pb":99});
//   })