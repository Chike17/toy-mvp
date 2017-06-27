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


Review.find({}).exec(function (error, data) {
  // console.log(data);
});

app.get('/alldata', function (req, res) {
  Review.find({}).exec(function (error, data) {
    // console.log(data, '?????');
    res.send(data);
  });
}); 



app.post('/filter', function (req, res) {
  var query = req.body.query;
  Review.find({}).exec(function (error, data) {
    var filteredData = data.filter(function (r) {
      return r.category === query;
    });
    res.send(filteredData);
  });
});



app.post('/bybusiness', function (req, res) {
  var query = req.body.query;
  Review.find({}).exec(function (error, data) {
    var filteredData = data.filter(function (r) {
      return r.name.indexOf(query) != -1;
    });
    res.send(filteredData);
  });
});



app.post('/bylocation', function (req, res) {
  var query = req.body.query;
  Review.find({}).exec(function (error, data) {
    var filteredData = data.filter(function (r) {
      return r.location.indexOf(query) != -1;
    });
    res.send(filteredData);
  });
});

app.post('/getspecbiz', function (req, res) {
  // console.log(req.body, 'req.body');
  var location = req.body.submit.location;
  location = location.toLowerCase();
  var name = req.body.submit.name;
  name = name.toLowerCase();
  Review.find({}).exec(function (err, data) {
    if (location === '' && name === '') {
      res.send([{name: 'INVALID QUERY'}]);
    } else if (location === '' && name) {
      var filteredData = data.filter(function (r) {
        var nameCopy = r.name.toLowerCase();
        return nameCopy.indexOf(name) != -1;
      });
      res.send(filteredData);
    } else if (name === '' && location) {
      var filteredData = data.filter(function (r) {
        var locCopy = r.location.toLowerCase();
        return locCopy.indexOf(location) != -1;
      });
      res.send(filteredData);
    } else {
      var filteredData = data.filter(function (r) {
        var nameCopy = r.name.toLowerCase();
        var locCopy = r.location.toLowerCase();
        return nameCopy.indexOf(name) != -1 && locCopy.indexOf(location) != -1;
      });
      console.log(filteredData);
      res.send(filteredData);
    }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});