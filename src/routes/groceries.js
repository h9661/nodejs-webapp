const { Router } = require("express");

const router = Router();

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

router.get(
    "/",
    (req, res, next) => {
        console.log("before handling get request");
        next();
    },
    (req, res, next) => {
        res.send(groceryList);
    }
);

router.get("/:item", (req, res, next) => {
    const item = req.params.item;
    let gItem = groceryList.filter((g) => {
        if (g.item == item) return true;
        else return false;
    });
    res.send(gItem);

    next();
});

router.get("/:item/:quantity", (req, res, next) => {
    const { item } = req.params;
    const { quantity } = req.params;

    let gItem = groceryList.filter((g) => {
        if (g.item == item && g.quantity == quantity) return true;
        else return false;
    });
    res.send(gItem);

    next();
});

router.post("/", (req, res, next) => {
    groceryList.push(req.body);
    res.sendStatus(201);
});

module.exports = {
    groceryRouter: router,
};
