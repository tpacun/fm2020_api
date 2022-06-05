import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 8000

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
    res.send('Hello World')
})


app.get('/api/:name', (req, res) => {
    let reqName = req.params.name
    res.json(players[reqName])
})

app.listen(PORT, () => {
    console.log(`Server is now running on ${PORT}.`)
})