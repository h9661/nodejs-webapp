const { Router, request } = require("express");

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

router.get("/", (req, res, next) => {
    res.cookie("visited", true, {
        maxAge: 100000,
    });
    res.send(groceryList);
});

router.get("/:item", (req, res, next) => {
    console.log(req.cookies);

    const item = req.params.item;
    let gItem = groceryList.filter((g) => {
        if (g.item == item) return true;
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
