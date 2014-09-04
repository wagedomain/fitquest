'use strict';

/*
 * Defining the Package
 */
var mean = require('meanio'),
  Module = mean.Module,
  passportObj = require('passport');

var Access = new Module('access');

Access.register(function(database) {

  // Register auth dependency

  var auth = require('./server/config/authorization');
  require('./server/config/passport')(passportObj);

  // This is for backwards compatibility
  mean.register('auth', function() {
    return auth;
  });

  mean.register('passport', function() {
    return passportObj;
  });

  Access.passport = passportObj;
  Access.middleware = auth;

  return Access;
});
