const { Router } = require("express");
const Grocery = require("../database/schemas/Grocery");
const ObjectId = require("mongodb").ObjectId;
const multer = require("multer");
const fs = require("fs");

const router = Router();

const upload = multer({
    dest: "uploads/images",
    limits: {
        fieldSize: 10 * 1024 * 1024,
    },
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
    let groceryId = req.body.id;
    let grocery = await Grocery.findById(groceryId);

    if (grocery) {
        let filename = grocery.imageURL;

        await Grocery.deleteOne(grocery);

        if (filename != "default.jpg")
            fs.unlinkSync(`uploads/images/${filename}`);

        res.redirect("http://localhost:3000/api/v1/main");
    } else {
        res.send(400);
    }
});

router.get("/edit", async (req, res) => {
    let groceryId = req.query.id;
    let grocery = await Grocery.findById(groceryId);

    if (grocery) {
        res.render("editGrocery.ejs", { grocery: grocery });
    } else {
        res.send(400);
    }
});

router.post("/edit", upload.single("image"), async (req, res) => {
    let { id, item, quantity } = req.body;

    if (req.file) {
        // image 파일이 있을 때
        // 바꿈
        let grocery = await Grocery.findById(id);
        if (grocery.imageURL != "default.jpg")
            fs.unlinkSync(`uploads/images/${grocery.imageURL}`);

        await Grocery.replaceOne(
            { _id: new ObjectId(id) },
            {
                item: item,
                quantity: quantity,
                imageURL: req.file.filename,
            }
        );
    } else {
        // image 파일이 없을 때
        // 그대로 유지

        await Grocery.updateOne(
            { _id: new ObjectId(id) },
            {
                item: item,
                quantity: quantity,
            }
        );
    }

    res.redirect("http://localhost:3000/api/v1/main");
});

module.exports = {
    groceryRouter: router,
};
