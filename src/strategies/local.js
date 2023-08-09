const passport = require("passport");
const { Strategy } = require("passport-local");
const User = require("../database/schemas/User");
const { comparePassword } = require("../utils/helper");

passport.use(
    new Strategy(async (username, password, done) => {
        console.log(username, password);

        if (username && password) {
            const userDB = await User.findOne({ username: username });

            if (userDB) {
                if (comparePassword(password, userDB.password)) {
                    console.log("Authenticated Successfully!");
                    done(null, userDB);
                } else {
                    throw new Error("wrong password.");
                }
            } else {
                throw new Error("there is no user info.");
            }
        } else {
            throw new Error("Bad Request.");
        }
    })
);
