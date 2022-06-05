const express = require('express')
const app = express()
const PORT = 8000

const mongoose = require('mongoose')
const url = 'mongodb+srv://tpacun:z!Baqr8MD9DFcV7@fm2020.jgiwe23.mongodb.net/?retryWrites=true&w=majority'

const players = {
    "Lionel Andrés Messi":{
        "Date of birth": "24 June 1987",
        "Place of birth": "Rosario, Santa Fe, Argentina",
        "Height": "1.69 m",
        "Position":	"Forward"
    },
    "Erling Haaland:":{
        "Date of birth": "24 June 1987",
        "Place of birth": "Rosario, Santa Fe, Argentina",
        "Height": "1.69 m",
        "Position":	"Forward"
    },
    "unknown":{
        "Date of birth": "unknown",
        "Place of birth": "unknown",
        "Height": "unknown",
        "Position":	"unknown"
    }
}

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    let reqName = req.params.name
    res.json(players[reqName])
})

app.listen(PORT, () => {
    console.log(`Server is now running on ${PORT}.`)
})