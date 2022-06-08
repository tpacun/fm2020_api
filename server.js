import express from 'express';
import 'dotenv/config';
import { MongoClient } from 'mongodb'

const app = express()
const PORT = process.env.PORT || 8000
let db;
let collection;
const MONGODB_URL = process.env.MONGODB_URL

// Throws error if no mongodb_url

if (!MONGODB_URL) throw new Error('MONGODB_URL environment variable required')

// Connection URL

const client = new MongoClient(process.env.MONGODB_URL);

async function main() {

    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    db = client.db('fm2020');
    collection = db.collection('fm2020collectionclean');
    
    // Server starts listening on given port
    app.listen(PORT, () => {
        console.log(`Server is now running on ${PORT}.`)
    })

    return 'Main done';
}

main()
  .then(console.log)
  .catch(console.error)


app.get('/', (req, res) =>{
    res.send('Hello World')
})


app.get('/api/id/:idNumber', (req, res) => {
    let reqName = req.params.idNumber
    collection.find({"_id": {$eq: reqName}}).toArray()
    .then(data => {res.send(data)})
})