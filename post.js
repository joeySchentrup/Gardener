var querystring = require('querystring');
var http = require('http');
var fs = require('fs');

    var data = JSON.stringify({
        first_name: "1234",
        last_name: "456",
        email: "jschentrup@rocketmail.com",
        password: "password",
        address: {
        street_number: "13651",
        street_name: "NW 131st PL",
        city: "Alachua",
        state: "FL",
        zip: "32615"
        }
        });

    var options = {
        host: '45.55.182.73',
        port: 8000,
        path: '/account/loaner',
      method: 'POST',
     headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        }
    };

    var options = {
        host: '45.55.182.73',
        port: 8000,
        path: '/account/donor',
      method: 'POST',
     headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        }
    };

    var req = http.request(options, function(res) {
        res.setEncoding('utf8');
        res.on(data, function (chunk) {
            console.log("body: " + chunk);
        });
    });
    req.write(data);
    req.end();