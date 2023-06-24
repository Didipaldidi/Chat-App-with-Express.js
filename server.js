// require express and create a reference variable
var express = require('express');

var app = express();

//listening to port
var server = app.listen(3000, () => {
    console.log('server is running on port', server.address().port);
   });