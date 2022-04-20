'use strict'

const express = require('express')
const bodyParser = require('body-parser')

// Create a new instance of express
const app = express()
const port = 3000;
app.set('view engine', 'ejs')

// connect to database
const MongoClient = require('mongodb').MongoClient;
const uri = "dummyuri";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    const database = client.db('CheckIn');
    const collection = database.collection('moodEntries');

    app.post('/', function (req) {
      collection.insertOne(req.body)
        .then(result => {
          console.log(result)
        })
        .catch(error => console.error(error))
    });

    app.get('/', (res) => {
      database.collection('moodEntries').find().toArray()
      .then(results => {
        res.render('index.ejs', { entries: results })
      })
      .catch(error => console.error(error))
    });
    
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Tell our app to listen on port 3000
app.listen(port, function (err) {
  if (err) {
    throw err
  }

  console.log('Server started on port 3000')
})
