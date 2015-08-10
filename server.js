var http = require('http');
var url  = require('url');

function start(route){

    http.createServer(function(request, response){
        var pathname = url.parse(request.url).pathname;
        
        route(pathname);

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('hello world');
        response.end();
    }).listen(8888);
    
    console.log('server has started');
};

exports.start = start;
    
