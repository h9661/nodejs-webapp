const { Router } = require("express");
const Grocery = require("../database/schemas/Grocery");
const router = Router();

router.get("/", async (req, res) => {
    const groceries = await Grocery.find({});
    console.log(groceries);
    res.render("main.ejs");
});

module.exports = {
    indexRouter: router,
};
