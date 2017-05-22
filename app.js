var express = require('express');
var bodyParser = require('body-parser');
var database = require('./database/db.config');
var videos = require('./routes/videos');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', videos);

module.exports = app;