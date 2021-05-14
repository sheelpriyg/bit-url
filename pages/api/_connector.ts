import { MongoClient } from 'mongodb';
const assert = require('assert');
const envPath = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
require('dotenv').config({ path: envPath });

const env = process.env;
let cachedDb;
const db_uri = "mongodb+srv://biturladmin:AtZRT6CEC9ZG7yY@biturl.vcpjg.mongodb.net/abc?retryWrites=true&w=majority";
export async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }
    console.log('env', db_uri)
    const client = new MongoClient(db_uri, { useNewUrlParser: true });
    console.log('client', client)
    cachedDb = await client.connect();
    return cachedDb;

    // const promise = new Promise((resolve, reject) => {
    //     MongoClient.connect(db_uri, function (err, client) {
    //         console.log('err----', err)
    //         if (err) {
    //             reject(err);
    //         }
    //         cachedDb = client.connect();
    //         resolve(cachedDb);
    //         // client.close();
    //     })
    // })

    // return promise;



}

// connectToDatabase();