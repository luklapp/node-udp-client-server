var Server = require('./server.js');

/* client.js */

var Client = function () {

	this.server = new Server();
	this.port = 3000;

};

module.exports = Client;