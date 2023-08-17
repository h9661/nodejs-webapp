const { Router } = require("express");
const User = require("../database/schemas/User");
const router = Router();

router.get("/", async (req, res) => {
    let userId = req.user.id;
    let user = await User.findById(userId);
    let { filterItem, category } = req.query;
    console.log(category);
    if (filterItem || category) {
        let groceries = user.groceries.filter(
            (g) =>
                new RegExp(filterItem).test(g.item) &&
                new RegExp(category).test(g.category)
        );

        res.render("main.ejs", { groceries: groceries });
    } else {
        res.render("main.ejs", { groceries: user.groceries });
    }
});

module.exports = {
    indexRouter: router,
};
