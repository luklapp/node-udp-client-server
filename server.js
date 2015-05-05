var dgram = require('dgram');

var Server = function () {

    this.socket = dgram.createSocket('udp4');
    this.port = 3000;
    this.host = '127.0.0.1';

    var that = this;

    this.socket.on('listening', function() {
        var address = that.socket.address();
        console.log('UDP Server listening on ' + address.address + ':' + address.port);
    });

    this.socket.on('message', function(msg) {
        console.log(msg);
        that.socket.close();
    })

    this.socket.bind(this.port, this.host);

}

module.exports = Server;