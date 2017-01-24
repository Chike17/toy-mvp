var review = {'name': 'a', 'review': 'b', 'rating': 'c', 'location': 'd', 'category': 'Barbershops'}


var reviews =  [review, review, review, review, review, review, review,
				review, review, review, review, review, review, review,
				review, review, review, review, review, review, review,
				review, review, review, review, review, review, review,
				review, review, review, review, review, review, review,
				review, review, review, review, review, review, review]



var express = require('express')
var app = express()
var cors = require ('cors')
var bodyParser = require('body-parser')
var path = require('path')
var mongoos = require('mongoose')

// app.use(cors());

app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname));


app.get('/', function (req, res) {
  res.send('Hello World!')
}); 

app.post('/filter', function (req, res) {
  console.log(req.body.query, '***********************')
  var filteredReviews = reviews.filter(function (review) {
  	 return review.category === req.body.query;
  })
  filteredReviews = JSON.stringify(filteredReviews)
  console.log(filteredReviews)
  res.send(filteredReviews)
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})