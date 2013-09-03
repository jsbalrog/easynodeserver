
/**
 * Module dependencies.
 */

var express = require('express');

var app = express();

// Configuration
app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Express server listening on port %d in %s mode", process.env.PORT, app.settings.env);
});