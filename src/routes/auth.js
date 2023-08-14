const { Router } = require("express");
const passport = require("passport");
const { authRegisterController } = require("../controllers/auth");

const router = Router();

router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (user) {
            req.logIn(user, (err) => {
                if (err) console.log(err);

                res.redirect("http://localhost:3000/api/v1/main");
            });
        } else {
            console.log(info);
            res.render("login.ejs", {
                errorMessage: "username or password is wrong",
            });
        }
    })(req, res, next);
});

router.post("/register", authRegisterController);

router.get("/login", (req, res) => {
    res.render("login.ejs", { errorMessage: false });
});

router.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log("logout failed!");
            console.log(err);
        }

        console.log("logOuted!");
    });
    res.redirect("http://localhost:3000/api/v1/auth/login");
});

router.get("/discord", passport.authenticate("discord"));

router.get("/discord/redirect", (req, res, next) => {
    passport.authenticate("discord", (err, user, info) => {
        if (user) {
            req.login(user, (err) => {
                if (err) console.log(err);

                res.redirect("http://localhost:3000/api/v1/main");
            });
        } else {
            console.log(info);
            res.redirect("http://localhost:3000/api/v1/auth/login");
        }
    })(req, res, next);
});

router.get("/google", passport.authenticate("google"));

router.get("/google/redirect", (req, res, next) => {
    passport.authenticate("google", (err, user, info) => {
        if (user) {
            req.login(user, (err) => {
                if (err) console.log(err);

                res.redirect("http://localhost:3000/api/v1/main");
            });
        } else {
            console.log(info);
            res.redirect("http://localhost:3000/api/v1/auth/login");
        }
    })(req, res, next);
});

module.exports = {
    authRouter: router,
};
