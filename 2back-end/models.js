var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// var ReviewSchema = new Schema({
//   'name': String,
//   'review': String,
//   'rating': String,
//   'location': String,
//   'category': String
// });


WorkerReviewSchema = new Schema({
  'FirstName': String,
  'LastName': String,
  'Rating': String,
  'Location': String,
  'Category': String,
  'Review': String
});

module.exports = mongoose.model('reviews', WorkerReviewSchema);

