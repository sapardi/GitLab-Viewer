/**
 * Created by sapardi on 1/19/14.
 */

var express = require('express');
var    path = require('path');
// var gitlab = require('./routes/gitlab');

var app = express();
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, '../client')));

// app.get('/projects', gitlab.projects);

app.listen(3000);
console.log("Listening on http://localhost:3000...");
