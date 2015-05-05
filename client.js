var Server = require('./server.js');

/* client.js */

var Client = function (port) {

	this.server = new Server();
	this.port = port;

};

module.exports = Client;