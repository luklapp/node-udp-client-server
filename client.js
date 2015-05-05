var Server = require('./server.js');
var dgram = require('dgram');

/* client.js */

var Client = function () {

    this.server = new Server();
    this.port = 3000;
    this.host = '127.0.0.1';
    this.socket = dgram.createSocket('udp4');

};

Client.prototype.send = function(operator,operand1,operand2) {

    switch(operator) {

        case '+':
            operator_byte = 1;
            break;
        case '-':
            operator_byte = 2;
            break;
        case '/':
            operator_byte = 3;
            break;
        case 'x':
            operator_byte = 4;
            break;
        default:
            operator_byte = 0;
    }

    var msg = new Buffer([operator_byte,operand1,operand2]);

    var that = this;

    this.socket.send(msg, 0, msg.length, this.port, this.host, function(error) {
        if(error) console.log(error);
        else {
            console.log("Send message to " + that.host + ":" + that.port);
            console.log(msg);
        }
        that.socket.close();
    });

}

module.exports = Client;