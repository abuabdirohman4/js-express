const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send("Welcome to Nodemon"))
app.get('/:name', (req, res) => res.send(`Nama saya : ${req.params.name}`) )

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))