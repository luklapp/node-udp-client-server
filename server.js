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
        
        var operator = msg[0],
            operand1 = msg[1],
            operand2 = msg[2];

        console.log();
        console.log("ERGEBNIS:");

        switch(operator) {
            case 1:
                console.log(operand1 + operand2);
                break;
            case 2:
                console.log(operand1 - operand2);
                break;
            case 3: 
                console.log(operand1 / operand2)
                break;
            case 4:
                console.log(operand1 * operand2);
                break;
            default:
                console.log("ERROR: undefined operation");
        }

        that.socket.close();
    })

    this.socket.bind(this.port, this.host);

}

module.exports = Server;