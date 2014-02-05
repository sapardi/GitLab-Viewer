/**
 * Created by sapardi 
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, '../client')));

http.createServer(app).listen(3000, function () {
    console.log("Listening on http://localhost:3000...");
});


