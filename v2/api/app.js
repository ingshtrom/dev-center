'use strict';

let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let logger = require('./logger').logger;
let loggerStream = require('./logger').stream;

// let privateRoutes = require('./routes/private');
let publicRoutes = require('./routes/public');

let app = express();

// setup the logger
// as-per: http://stackoverflow.com/questions/9141358/how-do-i-output-connect-expresss-logger-output-to-winston
app.use(require('morgan')('combined', { stream: loggerStream }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', publicRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  // we purposefully always send a 500 just to obfuscate
  // what might have really went wrong since it could be
  // a public endpoint
  res.status(500).end();
});


module.exports = app;
