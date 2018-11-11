var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var fs = require('fs');
  var url = require('url');
  var q = url.parse(req.url, true).query;
  
    
    fs.readFile('number.txt', 'utf8', function(err, contents) {
    console.log(contents);
    var guess = contents == q.myGuess;
    res.render('interact', { title: 'interact', corNum: guess, myNumber: q.myGuess});
  });
  

});

module.exports = router;
