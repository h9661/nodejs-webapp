const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let groceryList = 
[
    {
        item: 'milk',
        quantity: 2,
    },
    {
        item: 'cereal',
        quantity: 2,
    },
    {
        item: 'cereal',
        quantity: 2,
    },
]

app.get('/groceries', (req, res) => {
    res.send(groceryList);
})

app.post('/groceries', (req, res) => {
    groceryList.push(req.body);
    res.sendStatus(201);
})


app.listen(port, () => {
    console.log(`running server. https://localhost:${port}`);
});