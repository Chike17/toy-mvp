var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/takecare');


var db = mongoose.connection;

db.once('open', function () {
  console.log('the database is now open');
});


db.on('error', function (error) {
  console.log(error);
});

module.exports = db;

