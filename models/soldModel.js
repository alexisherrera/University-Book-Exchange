var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a schema
var soldSchema = new Schema({
  bookID: String,
  title: String,
  authors: [String],
  image: String,
  descriptionGoogle: String,
  descriptionUser: String,
  sellerEmail: String,
  buyerEmail: String,
  finalPrice: String,
  offers: [{email: String, offerAmount: Number}]
});

//sold schema
var Sold = mongoose.model('Sold', soldSchema);

//export schema
module.exports = Sold;
