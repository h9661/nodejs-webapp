const express = require("express");
const { groceryRouter } = require("./routes/groceries");
const { marketRouter } = require("./routes/markets");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`);
    next();
});

app.use("/api/v1/groceries", groceryRouter);
app.use("/api/v1/markets", marketRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port} is now running.`);
});
