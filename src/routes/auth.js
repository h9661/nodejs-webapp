const { Router } = require("express");
const passport = require("passport");
const User = require("../database/schemas/User");
const { hashPassword } = require("../utils/helper");
const fs = require("fs");
const { authRegisterController } = require("../controllers/auth");

const router = Router();

// router.post("/login", async (req, res) => {
//     const { username, password } = req.body;

//     if (username && password) {
//         const userDB = await User.findOne({ username: username });

//         if (userDB) {
//             if (comparePassword(password, userDB.password)) {
//                 req.session.user = {
//                     username,
//                 };
//                 console.log(req.session);
//                 res.status(200).send(`hello ${username}!`);
//             } else {
//                 res.status(400).send("wrong password!");
//             }
//         } else {
//             res.status(401).send("user not exists!");
//         }
//     } else {
//         res.status(400).send("email or password is not provided.");
//     }
// });

router.post("/login", passport.authenticate("local"), (req, res) => {
    console.log("Logged in");
    res.send(200);
});

router.post("/register", authRegisterController);

router.get("/login", (req, res) => {
    fs.readFile("./src/webpages/login.html", (err, html) => {
        if (err) {
            console.log(err);
            res.send(500);
        }

        res.status(200).contentType(".html").send(html);
    });
});

router.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log("logout failed!");
            console.log(err);
        }

        console.log("logOuted!");
    });
    res.redirect("back");
});

router.get("/discord", passport.authenticate("discord"), (req, res) => {
    res.send(200);
});

router.get(
    "/discord/redirect",
    passport.authenticate("discord"),
    (req, res) => {
        res.send(200);
    }
);

router.get("/google", passport.authenticate("google"), (req, res) => {
    res.send(200);
});

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
    res.send(200);
});

module.exports = {
    authRouter: router,
};
