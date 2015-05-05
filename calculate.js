var Client = require('./client.js');

// create new client
// client creates its own socket

var client = new Client(),
    operand1 = process.argv[2],
    operator = process.argv[3],
    operand2 = process.argv[4];

// send params from command line to client
client.send(operator,operand1,operand2);