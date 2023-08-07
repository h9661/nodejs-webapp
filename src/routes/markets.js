const { Router } = require("express");

const router = Router();

let supermarket = [
    {
        store: "Whole Foods"
    },
    {
        store: "Trader Joes"
    },
    {
        store: "Albertsons"
    }
]

router.get('/', (req, res, next) => {
    res.send(supermarket);
})

module.exports = {
    marketRouter: router
}