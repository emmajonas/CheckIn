'use strict'

const express = require('express')
const bodyParser = require('body-parser')

// Create a new instance of express
const app = express()
const port = 3000;

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

let response;

// Route that receives a POST request
app.post('/', function (req, res) {
  const body = req.body
  res.set('Content-Type', 'text/plain')
  res.send(`You sent: ${body} to Express`)
  console.log(body);
  response = body;
})

app.get('/', (req, res) => {
  res.send(response.patientName + " " + response.patientFeeling);
})

// Tell our app to listen on port 3000
app.listen(port, function (err) {
  if (err) {
    throw err
  }

  console.log('Server started on port 3000')
})
