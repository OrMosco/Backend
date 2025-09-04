const http = require('http');


const notes = [
    {
        id: 1,
        content: 'HTML is easy',  
        date: '04092025',
        important: true
    }
];  




const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to my server!');
    } else if (req.method === 'GET' && req.url === '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is the about page');
    } else if (req.method === 'GET' && req.url === '/contact') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Contact: your.email@example.com');
    } else if (req.method === 'GET' && req.url === '/notes') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(notes));
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 - Page not found');
    }
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});
