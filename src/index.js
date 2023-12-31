const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const bodyParser = require("body-parser");

require("./database");
require("./strategies/local");
require("./strategies/discord");
require("./strategies/google");

const { groceryRouter } = require("./routes/groceries");
const { authRouter } = require("./routes/auth");
const { indexRouter } = require("./routes/index");

const app = express();
const port = 3000;

app.set("view endgine", "ejs");
app.use("/css", express.static("style/css"));
app.use("/images", express.static("uploads/images"));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
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
app.use("/api/v1/main", indexRouter);
app.use("/api/v1/groceries", groceryRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port} is now running.`);
});
