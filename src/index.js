const express = require("express");
const app = express();
const port = 3000;

app.get('/groceries', (req, res) => {
    res.send([
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
])
})

app.listen(port, () => {
    console.log(`running server. https://localhost:${port}`);
});