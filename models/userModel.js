var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//user schema
var userSchema = new Schema({
  email: String,
  name: String,
  password: String,
  booksOnSale: [String],
  booksSold: [String],
  offersMade: [{book: String, offerAmount: Number, status: String}]
});

//user model
var User = mongoose.model('User', userSchema);

//export
module.exports = User;
