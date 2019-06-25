const http = require('http');

const server = http.createServer(function (request, response) {
});
server.listen(5000, function () {
    console.log('listening');
});
