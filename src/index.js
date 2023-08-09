const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");

require("./database");
require("./strategies/local");

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
    })
);
app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`);
    next();
});
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/groceries", groceryRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port} is now running.`);
});
