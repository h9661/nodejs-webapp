const { Router } = require("express");

const router = Router();

let supermarket = [
    {
        id: 1,
        store: "Whole Foods",
        miles: 0.6,
    },
    {
        id: 2,
        store: "Trader Joes",
        miles: 1.0,
    },
    {
        id: 3,
        store: "Albertsons",
        miles: 1.5,
    },
];

router.get("/", (req, res, next) => {
    const { miles } = req.query;
    if (miles && !isNaN(parseInt(miles))) {
        res.send(
            supermarket.filter((ele) => {
                if (ele.miles <= miles) return true;
                else return false;
            })
        );
    } else res.send(supermarket);
});

module.exports = {
    marketRouter: router,
};
