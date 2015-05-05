var Server = require('./server.js');
var dgram = require('dgram');

/* client.js */

var Client = function () {

    this.server = new Server();
    this.port = 3000;
    this.host = '127.0.0.1';
    this.socket = dgram.createSocket('udp4');

};

Client.prototype.send = function() {

    var msg = new Buffer([1,1,1]);

    var that = this;

    this.socket.send(msg, 0, msg.length, this.port, this.host, function(error) {
        if(error) console.log(error);
        that.socket.close();
    });

}

module.exports = Client;