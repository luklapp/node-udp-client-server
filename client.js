var Server = require('./server.js');
var dgram = require('dgram');

/* client.js */

var Client = function () {

	this.server = new Server();
	this.port = 3000;
	this.host = '127.0.0.1';
	this.socket = dgram.createSocket('udp4');

};

module.exports = Client;