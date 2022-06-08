import express from 'express';
import 'dotenv/config';
import { MongoClient } from 'mongodb'

const app = express()
const PORT = process.env.PORT || 8000
const MONGODB_URL = process.env.MONGODB_URL

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


// Throws error if no mongodb_url

if (!MONGODB_URL) throw new Error('MONGODB_URL environment variable required')

// Connection URL

const client = new MongoClient(process.env.MONGODB_URL);

async function main() {

    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('fm2020');
    const collection = db.collection('fm2020collectionclean');

    // Server starts listening on given port
    app.listen(PORT, () => {
        console.log(`Server is now running on ${PORT}.`)
    })

    return 'Main done';
}

main()
  .then(console.log)
  .catch(console.error)