var http = require('http'), 
    url  = require('url'),
    formidable = require('formidable');

function start(route, handle){

    http.createServer(function(request, response){
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, response, request);

        // request.addListener('data', function(postDataChunk){
        //     postData += postDataChunk;
        //     console.log("Received POST data chunk '" + postDataChunk +"'.");
        // });

        // request.addListener('end', function(){
        //     console.log("++++" + pathname + "++++");
        //     route(handle, pathname, response, postData);
        // });

        // route(handle, pathname, response);

        // response.writeHead(200, {'Content-Type': 'text/plain'});
        // response.write(content);
        // response.end();
    }).listen(8888);
    
    console.log('server has started');
};

exports.start = start;
    
