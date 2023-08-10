const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");

require("./database");
//require("./strategies/local");
require("./strategies/discord");

const { groceryRouter } = require("./routes/groceries");
const { authRouter } = require("./routes/auth");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(
    session({
        secret: "ABCD",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: "mongodb://127.0.0.1:27017/expressjs_tutorial",
        }),
    })
);
app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`);
    next();
});
app.use(passport.initialize());
app.use(passport.session());


app.use("/api/v1/auth", authRouter);

app.use((req, res, next) => {
    console.log(req.session);
    console.log("authenticating user");
    console.log(`USER INFO: ${req.user}`);
    if (req.user) next();
    else res.send(401);
});

app.use("/api/v1/groceries", groceryRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port} is now running.`);
});
