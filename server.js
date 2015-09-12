'use strict';
var express = require('express');
var http = require('http');

var app = express();
require('./Routes')(app);


var server = http.createServer(app);


module.exports = server;
