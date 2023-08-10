const passport = require("passport");
const { Strategy } = require("passport-discord");
const DiscordUser = require("../database/schemas/DiscordUser");

passport.serializeUser((user, done) => {
    console.log("Serializing User");
    console.log(user);
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    console.log("Deserializing User");
    console.log(id);

    const userDB = await DiscordUser.findById(id);
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

            const discordUserDB = await DiscordUser.findOne({
                discordId: profile.id,
            });

            if (discordUserDB) {
                console.log("Discord User Already Exist");
                done(null, discordUserDB);
            } else {
                console.log("Created New Discord User");
                const newDiscordUser = await DiscordUser.create({
                    discordId: profile.id,
                });

                done(null, newDiscordUser);
            }
        }
    )
);
