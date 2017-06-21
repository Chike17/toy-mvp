var mongoose = require('mongoose');
var db = require('./2back-end/dbconfig.js');
var Review = require('./2back-end/models.js');
mongoose.Promise = require('bluebird');


var nailSalonReview = {'name': 'Dummy Nail Salon Name', 'review': 'Dummy Nail Salon Review', 'rating': 'Dummy Nail Salon Rating', 'category': 'Nail Salons'};

var barberShopReview = {'name': 'Dummy Barber Shop Name', 'review': 'Dummy Barber Shop Review', 'rating': 'Dummy Barber Shop Rating', 'category': 'Barbershops'};

var massageParlorReview = {'name': 'Dummy Massage Parlor Name', 'review': 'Dummy Massage Parlor Review', 'rating': 'Dummy Massage Parlor Rating', 'category': 'Massage Parlors'};

var allData = [nailSalonReview, barberShopReview, massageParlorReview];

var locations = ['Chicago', 'San Francisco', 'Boston'];

var number = 1;

var insertReviews = function () {
  for (var i = 0; i < allData.length; i++) {
    var randomIndex = Math.floor(Math.random() * locations.length);
    var location = locations[randomIndex];
    var rvw = new Review({
      'name': allData[i].name + ' ' + number, 
      'review': allData[i].review + ' ' + number, 
      'rating': allData[i].rating + ' ' + number, 
      'location': location, 
      'category': allData[i].category});
    rvw.save();
    number++;
    console.log(number);
  }
};

for (var i = 0; i < 5; i++) {
  insertReviews();
}

