const http = require('http');
const express = require('express');

// a simple server
const server = http.createServer(function (request, response) {
    // write response
    response.writeHead(200, {'Content-Type': 'text/html'});
    // end response
    response.end('OK');
}).listen(5000, function () {
    // log listening
    console.log('listening on 5000');
});

