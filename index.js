var server = require('./server.js');
var router = require('./router.js');
var requestHandlers = require('./requestHandlers.js');
// server.start();
var handle = {};
handle['/']       = requestHandlers.start;
handle['/start']  = requestHandlers.start;
handle['/upload'] = 

server.start(router.start);