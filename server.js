// require express and create a reference variable
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//listening to port
var server = app.listen(3000, () => {
    console.log('server is running on port', server.address().port);
   });

app.use(express.static(__dirname));// tell express.js that we will be using static file

var dbUrl = 'mongodb+srv://valdilaurentius:g2aIIRReH4aGW9gX@cluster0.l9uktyd.mongodb.net/'

mongoose.connect(dbUrl, (err) => {
    console.log('mongodb connected', err);
})

var Message = mongoose.model('Message', {name: String, message: String})