const { Router } = require("express");
const passport = require("passport");
const User = require("../database/schemas/User");
const { hashPassword } = require("../utils/helper");
const fs = require("fs");
const { authRegisterController } = require("../controllers/auth");

const router = Router();

router.post("/login", passport.authenticate("local"), (req, res) => {
    console.log("Logged in");
    res.send(200);
});

router.post("/register", authRegisterController);

router.get("/", (req, res) => {
    res.render("login.ejs");
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
        res.status(200).redirect("http://localhost:3000/api/v1/main");
    }
);

router.get("/google", passport.authenticate("google"), (req, res) => {
    res.send(200);
});

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
    res.status(200).redirect("http://localhost:3000/api/v1/main");
});

module.exports = {
    authRouter: router,
};
