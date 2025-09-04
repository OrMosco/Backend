const express = require('express');
const { title } = require('process');
const app = express();

//listing ports 3000 and 8080

app.get('/', (req, res) => {
    console.log('Received a request for the root URL');
    res.send('Welcome to my server!');
});

//books
app.get('/books', (req, res) => {
    const books = {
        108: {title: 'Book One', author: 'Author A'},
        109: {title: 'Book Two', author: 'Author B'},
        110: {title: 'Book Three', author: 'Author C'}
    };
    res.send(books);
} );

app.get('/life', function (request, response) {
    response.send("42")
})
const PORT = 3030;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
