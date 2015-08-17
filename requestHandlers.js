// used to fork another process to handle blocking-operation
// var exec = require('child_process').exec;
var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");
    sys = require('sys'); 
    util = require('util');


function start(response, request){
    console.log("Request handler 'start' was called.");
    // function sleep(milliseconds){
    //     var startTime = new Date().getTime();
    //     while( new Date().getTime() < startTime + milliseconds ); 
    // }

    // sleep(10000);

    response.writeHead(200, {'content-type': 'text/html'});
    response.end(
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="text" name="title"><br>'+
        '<input type="file" name="upload" multiple="multiple"><br>'+
        '<input type="submit" value="Upload">'+
        '</form>'
    );



    // response.writeHead(200, {'Content-Type': "text/html"});
    // response.write(body);
    // response.end();

    // var content = "empty";
    // exec("ls -lah", 
    //     {timeout: 10000, maxBuffer: 20000*1024},
    //     function(error, stdout, stderr){
    //     response.writeHead(200, {'Content-Type': "text/plain"});
    //     response.write(stdout);
    //     response.end();
    // });
}

/**
 * Upload image to a specified path.
 *
 * @param object response
 * @param object request 
 */
function upload(response, request){
    // console.log("Request handler 'upload' was called");
    if(request.url == '/upload' && request.method.toLowerCase() == 'post')
    {
        var form = new formidable.IncomingForm();
        form.parse(request, function(error, fields, files) {

            // console.log(files);
            // process.exit(1);
            fs.rename(files.upload.path, '/tmp/test.png', function(error){
                if(error)
                {
                    fs.unlink('/tmp/test.png');
                    fs.rename(files.upload.path, '/tmp/test.png');    
                }
            });
        });
        
        response.writeHead(200, {"content-type" : "text/html"});
        response.write("receive image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    }
}

/**
 * Show uploaded image.
 *
 * @param response
 */
function show(response){
    console.log("Request Handler 'show' was called. ");
    response.writeHead(200, {'content-type': 'image/png'});

    // read the specified path.
    fs.createReadStream("/tmp/test.png").pipe(response);
}

exports.start  = start;
exports.upload = upload; 
exports.show   = show;