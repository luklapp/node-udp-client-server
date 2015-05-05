var dgram = require('dgram');

var Server = function () {

    // create socket
    this.socket = dgram.createSocket('udp4');
    
    // config
    this.port = 3000;
    this.host = '127.0.0.1';

    var that = this;

    // start listening
    this.socket.on('listening', function() {
        var address = that.socket.address();
        console.log('UDP Server listening on ' + address.address + ':' + address.port);
    });

    // wait for message
    this.socket.on('message', function(msg) {
        
        var operator = msg[0],
            operand1 = msg[1],
            operand2 = msg[2];

        console.log();
        console.log("ERGEBNIS:");

        // convert operator and calculate result
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

        // close socket after calculation
        that.socket.close();
    })

    // bind socket on given port and host
    this.socket.bind(this.port, this.host);

}

// export server as module
module.exports = Server;