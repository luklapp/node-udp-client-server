var Client = require('./client.js');

var client = new Client(),
    operand1 = process.argv[2],
    operator = process.argv[3],
    operand2 = process.argv[4];

client.send(operator,operand1,operand2);