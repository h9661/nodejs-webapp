const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");
const User = require("../database/schemas/User");

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
            clientID:
                "738199081163-1001o623pojlncvi97k4hiancdibnajp.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:3000/api/v1/auth/google/redirect",
            scope: ["profile"],
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(accessToken, refreshToken);
            console.log(profile);

            const userDB = await User.findOne({
                username: profile.id,
            });

            if (userDB) {
                console.log("Google User Already Exist");
                done(null, userDB);
            } else {
                console.log("Create New Google User");
                const newGoogleUser = await User.create({
                    username: profile.id,
                    password: "GOOGLE",
                    email: `${profile.id}@GOOGLE.com`,
                });

                done(null, newGoogleUser);
            }
        }
    )
);
