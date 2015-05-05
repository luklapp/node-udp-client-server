var Client = require('./client.js');

var port = process.argv[2] || 3000;

var client = new Client(port);

console.log(client);