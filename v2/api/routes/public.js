'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/flags', function(req, res, next) {
  res.status(200).send({ message: 'Hello, World!' });
});

module.exports = router;
