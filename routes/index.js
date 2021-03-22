var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.sendFile('index.html', {root: './public/site'})
});

router.get('/navigation.html', function(req, res, next){
  res.sendFile('navigation.html', {root: './public/site'})
});

router.get('/ex2.html', function(req, res, next){
  res.sendFile('ex2.html', {root: './public/site'})
});

router.get('/ex3.html', function(req, res, next){
  res.sendFile('ex3.html', {root: './public/site'})
});

module.exports = router;
