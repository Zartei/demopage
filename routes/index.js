var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var fs = require('fs');
  var url = require('url');
  var q = url.parse(req.url, true).query;
  if(q.newNumber){
    console.log("New Number");
    res.render('index', { title: 'Expresss', myNumber: q.newNumber });
  }else{
    fs.readFile('number.txt', 'utf8', function(err, contents) {
    console.log(contents);
    res.render('index', { title: 'Expresss'});
  });
  }

});

module.exports = router;
