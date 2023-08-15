const { Router } = require("express");
const Grocery = require("../database/schemas/Grocery");
const router = Router();

router.get("/", async (req, res) => {
    const groceries = await Grocery.find({});
    res.render("main.ejs", { groceries: groceries });
});

module.exports = {
    indexRouter: router,
};
