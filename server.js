

// var reviews =  [review, review, review, review, review, review, review,
// 				review, review, review, review, review, review, review,
// 				review, review, review, review, review, review, review,
// 				review, review, review, review, review, review, review,
// 				review, review, review, review, review, review, review,
// 				review, review, review, review, review, review, review]

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



var review = {'name': 'server', 'review': 'server', 'rating': 'server', 'location': 'server', 'category': 'Massage Parlors'}



 var rvw = new Review({'name': review.name , 
				 	'review': review.review, 
				 	'rating': review.rating, 
				 	'location': review.location, 
				 	'category': review.category});


// rvw.save();

 // Review.find({}).exec(function (error, data) {
 //    console.log(data);
 //  })

app.get('/alldata', function (req, res) {
  Review.find({}).exec(function (error, data) {
    // console.log(data, '?????');
  res.send(data);
  })
}); 




app.post('/filter', function (req, res) {
  var query = req.body.query;
  Review.find({}).exec(function (error, data) {
    var filteredData = data.filter(function (r) {
     return r.category === query;
    })
  res.send(filteredData);
  })
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})