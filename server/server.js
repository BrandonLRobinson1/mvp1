var express = require('express');
var users = require('../data/staticData');
var app = express();
var bodyParser = require('body-parser');
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

var request = require('request');

// app.use(express.static('../'))

var pokeData = [];

// var data = "yellow"
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE');
  next();
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded




// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage. 
//   }
// })



app.get("/pokemon", (req, res) => {
  res.send('yo')

});

// app.post("/user", (req, res) => {
//   console.log('BODY: ', req.body);
//   console.log('Data', users)
//   res.send(users)
//   res.end()

// });

// app.get("/rooms", (req, res) => {

//   res.send(data)

// });

// app.post("/rooms", (req, res) => {

//   req.body.room

// });

// app.get("/messages", (req, res) => {

//   res.send(data)

// });

// app.post("/messages", (req, res) => {

//   req.body.post

// });

app.all("*", (req, res) => {
  console.log(users)
  res.send('nobody is home, unless your selling girl scout cookies')
});

app.listen(3000, function () {
  console.log('DayyyyyDayyyyyy... them crazy -- out there again');
});