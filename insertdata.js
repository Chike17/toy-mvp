var mongoose = require('mongoose');
var db = require('./2back-end/dbconfig.js');
var WorkReviewSchema = require('./2back-end/models.js');
mongoose.Promise = require('bluebird');


// var rvw = new WorkReviewSchema(
//       {
//         'FirstName': 'ffff', 
//         'LastName': 'fffff', 
//         'Rating': 'ffffffff', 
//         'Location': 'ffffffffff', 
//         'Review': 'ffffffff',
//         'Categor': 'ffffff'
//       });

// console.log(rvw);

// Stock Dummy Data



var nailSalonReview = {'FirstName': 'Dummy Nail Salon First Name', 'LastName': 'Dummy Nail Salon Last Name', 'Review': 'Dummy Nail Salon Review', 'Rating': 'Dummy Nail Salon Rating', 'Category': 'Nail Salons', 'Review': 'Dummy Nail Salon Review'};

var barberShopReview = {'FirstName': 'Dummy Barber Shop First Name', 'LastName': 'Dummy BarberShop Last Name', 'Review': 'Dummy Barber Shop Review', 'Rating': 'Dummy Barber Shop Rating', 'Category': 'Barbershops', 'Review': 'Dummy BarberShop Review'};

var massageParlorReview = {'FirstName': 'Dummy Massage Parlor First Name', 'LastName': 'Dummy Massage Parlor First Name', 'Review': 'Dummy Massage Parlor Review', 'Rating': 'Dummy Massage Parlor Rating', 'Category': 'Massage Parlors', 'Review': 'Dummy Massage Parlor Review'};

var stockData = [nailSalonReview, barberShopReview, massageParlorReview];




// // 3 Silly Dummy Reviews

// var sillyNailReview = new Review({
//   'name': 'Neverland Nails', 
//   'review': 'Great Nail Salon. My feet look great!', 
//   'rating': '5', 
//   'location': 'Chicago', 
//   'category': 'Nail Salon'});

// sillyNailReview.save();

// var sillyMassageReview = new Review({
//   'name': 'Manly Massages', 
//   'review': 'My back never felt better!!! These guys are legit!', 
//   'rating': '5', 
//   'location': 'Boston', 
//   'category': 'Massage Parlor'});

// sillyMassageReview.save();

// var sillyBarberShopReview = new Review({
//   'name': 'Fine Cutz', 
//   'review': 'My hair is anything but fine. Its a mess. Never Again!', 
//   'rating': '2', 
//   'location': 'San Francisco', 
//   'category': 'BarberShops'});

// sillyBarberShopReview.save();


var locations = ['Chicago', 'San Francisco', 'Boston'];

var reviewNumber = 1;

// // insert multiple stock reviews in random locations with random ratings



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
    reviewNumber++;
    console.log(rvw);
  }
};


for (var i = 0; i < 20; i++) {
  insertStockReviews();
}


// WorkReviewSchema.find({}, function (error, data) {
//   console.log(data);
// });





