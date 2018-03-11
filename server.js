var express = require('express');
var app = express();
var longpoll = require("express-longpoll")(app);
 
// Creates app.get("/poll") for the long poll 
longpoll.create("/poll");

app.get("/", function(req, res) {
	console.log('- get index.html');
	res.sendfile('index.html')
});

app.get("/jquery-1.5.min.js", function(req, res) {
	console.log('- get jquery');
	res.sendfile('jquery-1.5.min.js')
});

app.listen(8080, function() {
    console.log("Listening on port 8080");
});
 
// Publishes data to all clients long polling /poll endpoint 
// You need to call this AFTER you make a GET request to /poll 
//longpoll.publish("/poll", { text: 'started.' });
 
var dgram = require('dgram')
var socket = dgram.createSocket('udp4')

socket.on('message', function(msg) {
	t = msg.toString();
	console.log('- publishing: ' + t);
	longpoll.publish("/poll", { text: t });
});

socket.bind(5514, '127.0.0.1');
