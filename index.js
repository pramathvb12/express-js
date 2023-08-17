
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname,"public")))//for making a folder as static 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    // res.send('pramath')
    // res.sendFile(path.join(__dirname,'index.html')) making a file to server.
    // res.json({"pb":99});
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
