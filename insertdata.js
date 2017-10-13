var mongoose = require('mongoose');
var db = require('./2back-end/dbconfig.js');
var WorkReviewSchema = require('./2back-end/models.js');
mongoose.Promise = require('bluebird');

// Stock Dummy Data

var nailSalonReview = {'FirstName': 'Dummy Nail Salon First Name', 'LastName': 'Dummy Nail Salon Last Name', 'Review': 'Dummy Nail Salon Review', 'Rating': 'Dummy Nail Salon Rating', 'Category': 'Nail Salons', 'Review': 'Dummy Nail Salon Review'};

var barberShopReview = {'FirstName': 'Dummy Barber Shop First Name', 'LastName': 'Dummy BarberShop Last Name', 'Review': 'Dummy Barber Shop Review', 'Rating': 'Dummy Barber Shop Rating', 'Category': 'Barbershops', 'Review': 'Dummy BarberShop Review'};

var massageParlorReview = {'FirstName': 'Dummy Massage Parlor First Name', 'LastName': 'Dummy Massage Parlor First Name', 'Review': 'Dummy Massage Parlor Review', 'Rating': 'Dummy Massage Parlor Rating', 'Category': 'Massage Parlors', 'Review': 'Dummy Massage Parlor Review'};

var stockData = [nailSalonReview, barberShopReview, massageParlorReview];

// // 3 Silly Dummy Reviews

var sillyNailReview = new WorkReviewSchema({
  'FirstName': 'Jack', 
  'LastName': 'Nicholson', 
  'Rating': '5', 
  'Location': 'Chicago',
  'Review': 'The man works magic!',
  'Category': 'Nail Salons'});

sillyNailReview.save();


var sillyMassageReview = new WorkReviewSchema({
  'FirstName': 'Will', 
  'LastName': 'Smith', 
  'Rating': '5', 
  'Location': 'Boston',
  'Review': 'Always on point.',
  'Category': 'Massage Parlors'});

sillyMassageReview.save();


var sillyBarberReview = new WorkReviewSchema({
  'FirstName': 'Nelson', 
  'LastName': 'Mandela', 
  'Rating': '5', 
  'Location': 'Chicago',
  'Review': 'Where did Madiba learn how to cut like this???',
  'Category': 'Barbershops'});

sillyBarberReview.save();


var locations = ['Chicago', 'San Francisco', 'Boston'];


// // insert multiple stock reviews in random locations with random ratings+


var insertStockReviews = function () {
  for (var i = 0; i < stockData.length; i++) {
    var randomIndex = Math.floor(Math.random() * locations.length);
    var randomLocation = locations[randomIndex];
    var randomRating = Math.floor(Math.random() * 6);
    var rvw = new WorkReviewSchema(
      {
        'FirstName': stockData[i].FirstName, 
        'LastName': stockData[i].LastName, 
        'Rating': randomRating, 
        'Location': randomLocation, 
        'Review': stockData[i].Review,
        'Category': stockData[i].Category
      });
    rvw.save();
    console.log(rvw);
  }
};


for (var i = 0; i < 20; i++) {
  insertStockReviews();
}


WorkReviewSchema.find({}, function (error, data) {
  console.log(data);
});





