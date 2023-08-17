const { Router } = require("express");
const User = require("../database/schemas/User");
const router = Router();

router.get("/", async (req, res) => {
    let userId = req.user.id;
    let user = await User.findById(userId);
    let { filterItem } = req.query;

    if (filterItem) {
        const regexForFilterItem = new RegExp(filterItem);

        let groceries = user.groceries.filter((g) =>
            regexForFilterItem.test(g.item)
        );

        res.render("main.ejs", { groceries: groceries });
    } else {
        res.render("main.ejs", { groceries: user.groceries });
    }
});

module.exports = {
    indexRouter: router,
};
