'use strict;'

const express = require('express');
const app = express();

// Configuration
app.use(express.static(__dirname + '/public'));

// Start server
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Express server listening on port %d in %s mode", process.env.PORT, app.settings.env);
});
