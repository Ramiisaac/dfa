var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.sendFile('index.html', {root: './public/site'})
});

router.get('/navigation.html', function(req, res, next){
  res.sendFile('navigation.html', {root: './public/site'})
});

module.exports = router;
