/**
 * @param object handle
 * @param string pathname
 * @param object Response
 */
function route(handle, pathname, response, request)
{
    console.log("About to route a request for" + pathname);
    if(typeof handle[pathname] === 'function'){
        return handle[pathname](response, request);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404);
        response.write("404 Not found");
        response.end();
    }
}

exports.start = route;