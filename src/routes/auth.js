const { Router } = require("express");
const passport = require("passport");
const User = require("../database/schemas/User");
const { hashPassword } = require("../utils/helper");

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

router.post("/register", async (req, res) => {
    const { username, password, email } = req.body;
    const userDB = await User.findOne({ username: username });

    if (userDB) {
        console.log(userDB);
        res.status(400).send("user already exists!");
    } else {
        const hashedPassword = hashPassword(password);
        User.create({
            username,
            password: hashedPassword,
            email,
        });
        res.send(201);
    }
});

module.exports = {
    authRouter: router,
};
