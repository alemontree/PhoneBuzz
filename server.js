'use strict';
var express = require('express');
var server = express();
var path = require('path');



server.use('/', express.static(path.join(__dirname, '/index.html')));

server.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});



var port = process.env.PORT || 8000;
server.listen(port);
console.log('listening on port', port);
