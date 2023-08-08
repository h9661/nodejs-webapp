const express = require("express");
const { groceryRouter } = require("./routes/groceries");
const { authRouter } = require("./routes/auth");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const port = 3000;

require("./database");

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

app.use("/api/v1/auth", authRouter);

app.use((req, res, next) => {
    if (req.session.user) next();
    else {
        res.send(401);
    }
});

app.use("/api/v1/groceries", groceryRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port} is now running.`);
});
