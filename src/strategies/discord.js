const passport = require("passport");
const { Strategy } = require("passport-discord");
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
            clientID: "1139081248107667486",
            clientSecret: "LO71OsaI3ELmXjigNJFSTiENxZPt6xBr",
            callbackURL: "http://localhost:3000/api/v1/auth/discord/redirect",
            scope: ["identify"],
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(accessToken, refreshToken);
            console.log(profile);

            const discordUserDB = await User.findOne({
                username: profile.id,
            });

            if (discordUserDB) {
                console.log("Discord User Already Exist");
                done(null, discordUserDB);
            } else {
                console.log("Created New Discord User");
                const newDiscordUser = await DiscordUser.create({
                    username: profile.id,
                    password: "DISCORD",
                });

                done(null, newDiscordUser);
            }
        }
    )
);
