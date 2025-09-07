const express = require('express');
const app = express();

const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '04092025',
        important: true
    }
];

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});npm 

app.get('/contact', (req, res) => {
    res.send('Contact: your.email@example.com');
});

app.get('/notes', (req, res) => {
    res.json(notes);
});

app.use((req, res) => {
    res.status(404).send('404 - Page not found');
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
