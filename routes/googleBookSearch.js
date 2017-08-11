var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var models = require('../models/marketplaceModel')
var books = require('google-books-search');

router.use(bodyParser.json());

router.post('/', function(req, res, next) {
  if (req.session.user === null) { res.redirect('../')}
  var query = req.body.searchQ;
  books.search(query, function(error, results) {
    if (!error) {

      console.log(results);
      res.send(results)
      } else {
      }
  });
});


module.exports = router;
