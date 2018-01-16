var express = require('express');
var app = express();
var cors = require ('cors');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Review = require('./2back-end/models.js');
var db = require('./2back-end/dbconfig.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Review.find({}).exec(function (error, data) {
//   console.log(data);
// });

app.get('/alldata', function (req, res) {
  Review.find({}).exec(function (error, data) {
    res.send(data);
    console.log(data, '***********');
  });
});


app.post('/filter', function (req, res) {
  var query = req.body.query;
  console.log(query);
  Review.find({'Category': query}).exec(function(err, data) {
    res.send(data);
  });
});

app.post('/getspecbiz', function (req, res) {

  console.log(req.body, 'req.body');

  var firstName = req.body.submit.firstName;
  var lastName = req.body.submit.lastName;
  var location = req.body.submit.location;
  var category = req.body.submit.category;
 
  if (firstName === '' && lastName === '' && location === '' && category === '') {
    res.send([{name: 'INVALID QUERY'}]);
    return;
  }

  var qeuries = [['FirstName', firstName], ['LastName', lastName], ['Location', location ], ['Category', category]];

  var query = {};

  var queryDB = function (queries) {
    queries.forEach(function (field) {
      if (field[1].length > 0) {
        query[field[0]] = { '$regex': field[1], '$options': 'i' };
      }
    });
  };

  queryDB(qeuries);
  
  Review.find(query).exec(function (err, data) {
    if (err) {
      res.send([{name: 'INVALID QUERY'}]);
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});