var express = require('express');
var users = require('../data/staticData');
var app = express();
var bodyParser = require('body-parser');

// var data = "yellow"
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'DELETE');
  next();
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded




//Sets the HTTP response Content-Disposition header field to “attachment”. If a filename is given, then it sets the Content-Type based on the extension name via res.type(), and sets the Content-Disposition “filename=” parameter.

// res.attachment();
// // Content-Disposition: attachment

// res.attachment('path/to/logo.png');
// // Content-Disposition: attachment; filename="logo.png"
// // Content-Type: image/png



// app.get("/user", (req, res) => {
//   res.send(data)

// });

app.post("/user", (req, res) => {
  console.log('BODY: ', req.body);
  console.log('Data', users)
  res.send(users)
  res.end()

});

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
  console.log(data)
  res.send('nobody is home, unless your selling girl scout cookies')
});

app.listen(3000, function () {
  console.log('DayyyyyDayyyyyy... them crazy -- out there again');
});