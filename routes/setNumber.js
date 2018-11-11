var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
    var fs = require('fs');
    var url = require('url');
    var q = url.parse(req.url, true).query;
    if(!q.setNumber){
        q.setNumber = 8;
    }
    var _number = parseInt(q.setNumber);

    fs.writeFileSync("number.txt", _number);
    
    res.render('set', { title: 'Set', myNumber: _number });
});

module.exports = router;
