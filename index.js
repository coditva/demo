const http = require('http');
const express = require('express');

// a simple server
const server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('OK');
}).listen(5000, function () {
    console.log('listening on 5000');
});

