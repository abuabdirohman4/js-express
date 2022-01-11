const express = require('express')
const app = express()
const port = 3000

app.set('views', './views') // Specify the views directory
app.set('view engine', 'ejs') // Register the template engine

app.get('/', (req, res) => {
    const buah = [
        {name : 'apel'},
        {name : 'melon'},
        {name : 'mangga'},
    ]

    res.render('index', {
        name: 'Abu Abdirohman Rosikhun',
        umur: 24,
        buah: buah,
        // buah
    })
})

// app.get('/', (req, res) => res.send("Welcome to Nodemon"))
app.get('/:name', (req, res) => res.send(`Nama saya : ${req.params.name}`) )

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))