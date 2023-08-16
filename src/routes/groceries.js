const { Router } = require("express");
const Grocery = require("../database/schemas/Grocery");
const multer = require("multer");
const fs = require("fs");

const router = Router();

const upload = multer({
    dest: "uploads/images",
    limits: {
        fieldSize: 10 * 1024 * 1024,
    },
});

router.get("/", async (req, res) => {
    let groceries = await Grocery.find({});

    res.render("groceries.ejs", { groceries: groceries });
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

router.get("/new", (req, res) => {
    res.render("makeGrocery.ejs");
});

router.post("/new", upload.single("image"), async (req, res) => {
    let { item, quantity } = req.body;

    if (req.file) var { filename } = req.file;

    await Grocery.create({
        item: item,
        quantity: quantity,
        imageURL: filename != undefined ? filename : "default.jpg",
    });

    res.redirect("http://localhost:3000/api/v1/main");
});

router.post("/delete", async (req, res) => {
    let groceryId = req.query.id;

    let grocery = await Grocery.findById(groceryId);
    let filename = grocery.imageURL;

    await Grocery.deleteOne(grocery);

    if (filename != "default.jpg") fs.unlinkSync(`uploads/images/${filename}`);

    res.redirect("http://localhost:3000/api/v1/main");
});

module.exports = {
    groceryRouter: router,
};
