const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`);
    next();
})

let groceryList = [
    {
        item: "milk",
        quantity: 2,
    },
    {
        item: "cereal",
        quantity: 2,
    },
    {
        item: "cereal",
        quantity: 2,
    },
];

app.get(
    "/groceries",
    (req, res, next) => {
        console.log("before handling get request");
        next();
    },
    (req, res, next) => {
        res.send(groceryList);
    }
);

app.post("/groceries", (req, res, next) => {
    groceryList.push(req.body);
    res.sendStatus(201);
});

app.listen(port, () => {
    console.log(`running server. https://localhost:${port}`);
});
