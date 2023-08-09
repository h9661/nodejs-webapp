const { Router } = require("express");
const Grocery = require("../database/schemas/Grocery");

const router = Router();

router.get("/", async (req, res) => {
    res.send(await Grocery.find({}));
});

router.post("/", async (req, res) => {
    const { item, quantity } = req.body;
    if (item && quantity) {
        await Grocery.create({ item, quantity });
        res.sendStatus(201);
    } else res.sendStatus(401);
});

router.get("/cart", (req, res) => {
    const { cart } = req.session;
    const { item } = req.query;

    if (!cart) {
        res.send("no items in cart");
    } else {
        if (item) {
            res.send(
                cart.items.filter((ele) => {
                    if (ele.item == item) return true;
                    else return false;
                })
            );
        } else res.send(cart);
    }
});

router.post("/cart", (req, res) => {
    const { item, quantity } = req.body;
    const { cart } = req.session;

    if (cart) {
        req.session.cart.items.push({
            item,
            quantity,
        });
    } else {
        req.session.cart = {
            items: [{ item, quantity }],
        };
    }

    res.send(201);
});

router.get("/:item", async (req, res) => {
    const { item } = req.params;

    res.send(await Grocery.find({ item: item }));
});

module.exports = {
    groceryRouter: router,
};
