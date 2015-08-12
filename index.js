// I assume that request object is "export"
var server = require('./server.js');
var router = require('./router.js');
var requestHandlers = require('./requestHandlers.js');

// server.start();
var handle = {};
handle['/']       = requestHandlers.start;
handle['/start']  = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

// console.log(router.start);
server.start(router.start, handle);