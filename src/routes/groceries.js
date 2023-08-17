const { Router } = require("express");
const ObjectId = require("mongodb").ObjectId;
const multer = require("multer");
const fs = require("fs");
const User = require("../database/schemas/User");

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
    let userId = req.user.id;
    let { item, quantity, category } = req.body;

    if (req.file) {
        var { filename } = req.file;
    }
    let newGrocery = {
        item: item,
        quantity: quantity,
        category: category,
        imageURL: filename != undefined ? filename : "default.jpg",
    };

    await User.findOneAndUpdate(
        { _id: new ObjectId(userId) },
        { $push: { groceries: newGrocery } }
    );

    res.redirect("http://localhost:3000/api/v1/main");
});

router.post("/delete", async (req, res) => {
    let userId = req.user.id;
    let groceryId = req.body.id;

    let user = await User.findById(userId);
    let grocery = await user.groceries.find(
        (g) => g._id.toString() == groceryId
    );

    console.log(grocery);
    await User.findOneAndUpdate(
        { _id: new ObjectId(userId) },
        { $pull: { groceries: { _id: new ObjectId(groceryId) } } }
    );

    if (grocery) {
        let filename = grocery.imageURL;

        if (filename != "default.jpg")
            fs.unlinkSync(`uploads/images/${filename}`);

        res.redirect("http://localhost:3000/api/v1/main");
    } else {
        res.send(400);
    }
});

router.get("/edit", async (req, res) => {
    let userId = req.user.id;
    let groceryId = req.query.id;

    let user = await User.findById(userId);
    let grocery = await user.groceries.find(
        (g) => g._id.toString() == groceryId
    );

    if (grocery) {
        res.render("editGrocery.ejs", { grocery: grocery });
    } else {
        res.send(400);
    }
});

router.post("/edit", upload.single("image"), async (req, res) => {
    let userId = req.user.id;
    let { id, item, quantity, category } = req.body;

    let user = await User.findById(userId);
    let grocery = await user.groceries.find((g) => g._id.toString() == id);

    if (req.file) {
        // image 파일이 있을 때
        // 바꿈

        if (grocery.imageURL != "default.jpg")
            fs.unlinkSync(`uploads/images/${grocery.imageURL}`);

        await User.findOneAndUpdate(
            { _id: new ObjectId(userId), "groceries._id": new ObjectId(id) },
            {
                $set: {
                    "groceries.$": {
                        item: item,
                        quantity: quantity,
                        category: category,
                        imageURL: req.file.filename,
                    },
                },
            }
        );
    } else {
        // image 파일이 없을 때
        // 그대로 유지

        await User.findOneAndUpdate(
            { _id: new ObjectId(userId), "groceries._id": new ObjectId(id) },
            {
                $set: {
                    "groceries.$": {
                        item: item,
                        quantity: quantity,
                        category: category,
                        imageURL: grocery.imageURL,
                    },
                },
            }
        );
    }

    res.redirect("http://localhost:3000/api/v1/main");
});

module.exports = {
    groceryRouter: router,
};
