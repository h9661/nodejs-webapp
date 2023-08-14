const passport = require("passport");
const { Strategy } = require("passport-local");
const User = require("../database/schemas/User");
const { comparePassword } = require("../utils/helper");

passport.serializeUser((user, done) => {
    console.log("Serializing User");
    console.log(user);
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    console.log("Deserializing User");
    console.log(id);

    const userDB = await User.findById(id);
    console.log(userDB);

    if (userDB) done(null, userDB);
    else throw new Error("user not found");
});

passport.use(
    new Strategy(
        {
            // for settings
        },
        async (username, password, done) => {
            console.log(username, password);

            if (username && password) {
                const userDB = await User.findOne({ username: username });

                if (userDB) {
                    if (comparePassword(password, userDB.password)) {
                        console.log("Authenticated Successfully!");
                        done(null, userDB, { message: "validated" });
                    } else {
                        done(null, false, { message: "invalid password" });
                    }
                } else {
                    done(null, false, { message: "no user" });
                }
            } else {
                done(null, false, { message: "info invalid" });
            }
        }
    )
);
