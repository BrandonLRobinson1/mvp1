var express = require('express');
var users = require('../data/staticData');
var app = express();
var bodyParser = require('body-parser');
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

var request = require('request');

// app.use(express.static('../'))
  

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE');
  next();
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded



app.get("/pokemon", (req, res) => {
console.log(req.query.name);
//********
request('http://pokeapi.co/api/v2/pokemon/' + req.query.name +'/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body, ' bodyyyyy') 
  }
  console.log(body, ' log line 58') 
  res.send(body)
})
//***
  //res.send(body)
});



app.all("*", (req, res) => {
  //console.log(users)
  res.send('nobody is home, unless your selling girl scout cookies')
});

app.listen(3000, function () {
  console.log('DayyyyyDayyyyyy... them crazy -- out there again');
});