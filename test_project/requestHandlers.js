var exec = require('child_process').exec;
var querystring = require("querystring"),
    fs = require("fs"),
    formidable = require("formidable");

function start(response,postData) {
    console.log("Request handler 'start' was called.");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="file" name="upload">'+
        '<input type="submit" value="Upload file" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
    // exec("ls -lah",function (err, stdout, stderr) {
    //     response.writeHead(200,{"Content-Type":"text/plain"});
    //     response.write(stdout);
    //     response.end();
    // });
}

function upload(response,postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("You`ve sent:" + querystring.parse(postData).text);
    response.end();
}


function show(response, postData) {
    console.log("Request handler 'show' was called.");
    fs.readFile("C:/Users/Administrator/WebstormProjects/test_project/tmp/test.png", "binary", function(error, file) {
        if(error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;