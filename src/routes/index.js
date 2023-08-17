const { Router } = require("express");
const User = require("../database/schemas/User");
const router = Router();

router.get("/", async (req, res) => {
    let userId = req.user.id;

    let user = await User.findById(userId);
    console.log(user);
    res.render("main.ejs", {groceries: user.groceries});
});

module.exports = {
    indexRouter: router,
};
