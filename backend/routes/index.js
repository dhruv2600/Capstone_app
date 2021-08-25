var express = require('express');
var router = express.Router();
let ejs = require('ejs');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cool', function(req, res, next) {
  res.render('index', { title: 'Cool' });
});

router.get('/leetcode', function (req, res) {
  res.send('hello world')
})



module.exports = router;
