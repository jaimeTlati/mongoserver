const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = process.env.DB_CNN;
const client = new MongoClient(url);
const dbName = 'T-TLAND';

const db = client.db(dbName);
async function coneccion() {
    await client.connect();
    console.log('Conexion con el servidor');

    return 'done.';
}
module.exports = { coneccion, db, client }
