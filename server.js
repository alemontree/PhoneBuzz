'use strict';
var express = require('express');
// var path = require('path');
var http = require('http');

var app = express();
require('./Routes')(app);

// server.use('/', express.static(path.join(__dirname, '/index.html')));

var server = http.createServer(app);


module.exports = server;
