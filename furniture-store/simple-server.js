const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'price-check.html'));
});

const store = [
    { name: "table", price: 800, inventory: 3 },
    { name: "chair", price: 120, inventory: 16 },
    { name: "couch", price: 1200, inventory: 1 },
    { name: "picture frame", price: 70, inventory: 31 }
];
// Route to buy an item and reduce inventory
app.get('/buy/:name', (req, res) => {
    const itemName = req.params.name;
    const item = store.find(i => i.name === itemName);
    if (item) {
        if (item.inventory > 0) {
            item.inventory -= 1;
            res.send(item);
        } else {
            res.status(400).send({ error: 'Out of stock', item });
        }
    } else {
        res.status(404).send({ error: 'Item not found' });
    }
});

app.get('/priceCheck/:name', (req, res) => {
    const itemName = req.params.name;
    const item = store.find(i => i.name === itemName);
    res.send({ price: item ? item.price : null });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
