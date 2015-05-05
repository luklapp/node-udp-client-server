# node-udp-client-server
simple udp client-server calculator with node.js

# Usage

There are 4 operations that can be calculated:

* \+ (sum)
* \- (subtract)
* x (multiply)
* / (divide)

To start the calculator, you have to start calculate.js with 3 parameters:

`node calculate [operand1] [operator] [operand2]`

For example, the following command returns  **4**

`node calculate 2 + 2`

The whole output is as follows:

`UDP Server listening on 127.0.0.1:3000
Send message to 127.0.0.1:3000
<Buffer 01 02 02>

ERGEBNIS:
4`