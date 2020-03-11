var express = require('express');
var app = express();
var longpoll = require("express-longpoll")(app);
 
longpoll.create("/poll");

app.get("/", function(req, res) {
	console.log('- get index.html');
	res.sendfile('index.html')
});

app.get("/jquery-1.5.min.js", function(req, res) {
	console.log('- get jquery');
	res.sendfile('jquery-1.5.min.js')
});

app.get("/hexdump.js", function(req, res) {
	console.log('- get hexdump');
	res.sendfile('hexdump.js')
});


app.listen(8080, function() {
    console.log("Listening on port 8080");
});
 
var dgram = require('dgram')
var socket = dgram.createSocket('udp4')


socket.on('message', function(msg, rinfo) {
	console.log('- '+ rinfo.address +' : '+ rinfo.port +' '+ rinfo.size +'b => ' + msg.toString() + "\n");
	longpoll.publish("/poll", { 
		src_addr: rinfo.address,
		src_port: rinfo.port,
		size: rinfo.size,
		msg: msg.toString(),
		data: msg,
	});
});

socket.bind(500, '127.0.0.1');
