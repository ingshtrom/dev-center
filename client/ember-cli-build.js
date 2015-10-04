/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // materialize
  app.import({
    development: 'bower_components/Materialize/dist/js/material.js',
    production:  'bower_components/Materialize/dist/js/material.min.js'
  });
  app.import({
    development: 'bower_components/Materialize/dist/css/material.css',
    production: 'bower_components/Materialize/dist/css/material.min.css'
  });
  // app.import('bower_components/Materialize/dist/font/material-design-icons/Material-Design-Icons.eot');
  // app.import('bower_components/Materialize/dist/font/material-design-icons/Material-Design-Icons.svg');
  // app.import('bower_components/Materialize/dist/font/material-design-icons/Material-Design-Icons.ttf');
  // app.import('bower_components/Materialize/dist/font/material-design-icons/Material-Design-Icons.woff');
  // app.import('bower_components/Materialize/dist/font/material-design-icons/Material-Design-Icons.woff2');

  return app.toTree();
};
