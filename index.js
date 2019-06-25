const http = require('http');
const express = require('express');

const server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('OK');
});

server.listen(5000, function () {
    console.log('listening');
});
