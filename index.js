const http = require('http');

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

const server = http.createServer((req, res) => {
    res,statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});