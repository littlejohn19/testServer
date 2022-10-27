const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello');
        response.end();
    }
    if
});

server.listen(3000);

console.log('Server is running on port 3000');
