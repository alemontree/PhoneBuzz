var path = require('path');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var twilio = require('twilio');
var config = require("../config");
var fizzBuzz = require("../fizzbuzz");

var client = twilio(config.accountSid, config.authToken);

module.exports = function(app) {
    app.use(express.static(path.join(process.cwd(), 'Public')));

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(morgan('combined'));

    app.get('/', function(request, response) {
        response.sendFile(path.join(process.cwd(),'Public/index.html'));
    });

    app.post('/call', function(request, response) {
        var url = 'http://' + request.headers.host + '/outbound';
        
        client.makeCall({
            to: request.body.phoneNumber,
            from: config.twilioNumber,
            url: url
        }, function(err, message) {
            console.log(err);
            if (err) {
                response.status(500).send(err);
            } else {
                response.send({
                    message: 'Thank you! We will be calling you shortly.'
                });
            }
        });
    });

    app.post('/outbound', function(request, response) {
        response.type('text/xml');

        var resp = twilio.TwimlResponse();
        resp.say("Please enter a number",
        {
            voice: 'woman',
            language:'en-gb'
        });
        console.log(resp.toString());
        response.type('text/xml');
        response.send(resp.toString());

    });
};
