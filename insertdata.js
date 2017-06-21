var mongoose = require('mongoose');
var db = require('./2back-end/dbconfig.js');
var Review = require('./2back-end/models.js');
mongoose.Promise = require('bluebird');

// Stock Dummy Data

var nailSalonReview = {'name': 'Dummy Nail Salon Name', 'review': 'Dummy Nail Salon Review', 'rating': 'Dummy Nail Salon Rating', 'category': 'Nail Salons'};

var barberShopReview = {'name': 'Dummy Barber Shop Name', 'review': 'Dummy Barber Shop Review', 'rating': 'Dummy Barber Shop Rating', 'category': 'Barbershops'};

var massageParlorReview = {'name': 'Dummy Massage Parlor Name', 'review': 'Dummy Massage Parlor Review', 'rating': 'Dummy Massage Parlor Rating', 'category': 'Massage Parlors'};

var stockData = [nailSalonReview, barberShopReview, massageParlorReview];


// 3 Silly Dummy Reviews

var sillyNailReview = new Review({
  'name': 'Neverland Nails', 
  'review': 'Great Nail Salon. My feet look great!', 
  'rating': '5', 
  'location': 'Chicago', 
  'category': 'Nail Salon'});

sillyNailReview.save();

var sillyMassageReview = new Review({
  'name': 'Manly Massages', 
  'review': 'My back never felt better!!! These guys are legit!', 
  'rating': '5', 
  'location': 'Boston', 
  'category': 'Massage Parlor'});

sillyMassageReview.save();

var sillyBarberShopReview = new Review({
  'name': 'Fine Cutz', 
  'review': 'My hair is anything but fine. Its a mess. Never Again!', 
  'rating': '2', 
  'location': 'San Francisco', 
  'category': 'BarberShops'});

sillyBarberShopReview.save();


var locations = ['Chicago', 'San Francisco', 'Boston'];

var reviewNumber = 1;

// insert multiple stock reviews in random locations with random ratings

var insertStockReviews = function () {
  for (var i = 0; i < stockData.length; i++) {
    var randomIndex = Math.floor(Math.random() * locations.length);
    var location = locations[randomIndex];
    var randomRating = Math.floor(Math.random() * 6);
    var rvw = new Review({
      'name': stockData[i].name + ' ' + reviewNumber, 
      'review': stockData[i].review + ' ' + reviewNumber, 
      'rating': randomRating, 
      'location': location, 
      'category': stockData[i].category});
    rvw.save();
    reviewNumber++;
    console.log(reviewNumber);
  }
};

for (var i = 0; i < 20; i++) {
  insertStockReviews();
}

