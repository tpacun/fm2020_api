import fs from 'fs'
import path from 'path'

import { MongoClient } from 'mongodb'
import 'dotenv/config'
import * as CSV from 'csv-string'

// read in file

const data = fs.readFileSync(path.join('data', 'datafm20.csv')).toString()


// clean up weird letters

let fixed_data = data.replaceAll("Ã©", "é")
.replaceAll("Ã\u0081", "á")
.replaceAll("Ã¡", "á")
.replaceAll("Ã³", "ó")
.replaceAll("Ãº", "ú")
.replaceAll("Ã", "í")
.replaceAll("Ã©", "é")



// put csv/string data into readable format for mongodb

let arr = CSV.parse(fixed_data) // parses string into an array of arrays, uses library to avoid issues with delimiters (commas) inside of the list of positional fields
let jsonObj = [] // for holding objects generated
let headers = arr[0].map((c) => c.replaceAll(' ', '')) // stripping white space out of headers
headers[0] = "_id" // according MDB needs
headers[32] = 'OneVOne'

//push it to array of objects

for (let i = 1; i < arr.length; i++) {
    let rowObj = {}
    let rowData = arr[i]
    headers.forEach((header, x) => {
        rowObj[header] = rowData[x]
    })
    jsonObj.push(rowObj)
}

console.log(jsonObj.length)

// Set up connection to db and insertcontent to db
const client = new MongoClient(process.env.MONGODB_URL)

async function insertEntries(data) {
    await client.connect()
    console.log('Connected successfully to server for upload')
    const db = client.db('fm2020')
    const collection = db.collection('fm2020collectionclean')
    collection.insertMany(data)
}

insertEntries(jsonObj)
    .then(console.log)
    .catch(console.log)