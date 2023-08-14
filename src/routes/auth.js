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
            req.session.loginError = true;
            res.redirect("http://localhost:3000/api/v1/auth/login")
        }
    })(req, res, next);
});

router.get("/login", (req, res) => {
    const {loginError} = req.session
    delete req.session.loginError

    res.render("login.ejs", { loginError: loginError });
});

router.get("/register", (req, res) => {
    const {registerError} = req.session;
    
    if(registerError){
        var {usernameError, passwordError, emailError} = registerError;
        console.log(usernameError, passwordError, emailError);
        delete req.session.registerError;
    }

    res.render("register.ejs", {usernameError, passwordError, emailError});
});

router.post("/register", authRegisterController);


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
