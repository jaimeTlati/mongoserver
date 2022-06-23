const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url =process.env.DB_CNN;
const client = new MongoClient(url);
const dbName = 'T-TLAND';

const db = client.db(dbName);
// Database Name
async function coneccion() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    // const db = client.db(dbName);


//    ;
//     const collection =  client.db().collection('Usuario');
//     // const collection = db.collection('documents');
// const consulta1 = await collection.find({_id: 'MvrJw7BriWfNqeb5KsOy6160Qct2'});

//   console.log(consulta1);
//     // the following code examples can be pasted here...
  
    return 'done.';
  }
  module.exports = { coneccion,db , client}
