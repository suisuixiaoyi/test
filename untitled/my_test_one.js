var http = require('http');
var serv = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content_Type': 'text/plain' });
    res.end('<marquee>Smashing Node!</marquee>');
});
serv.listen(3000);