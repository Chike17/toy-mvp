var mongoose = require('mongoose');

var Schema = mongoose.Schema

var ReviewSchema = new Schema({
  'name': String,
  'review': String,
  'rating': String,
  'location': String,
  'category': String
})



module.exports =  mongoose.model('reviews', ReviewSchema)

