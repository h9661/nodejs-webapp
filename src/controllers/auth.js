const User = require("../database/schemas/User");
const { hashPassword } = require("../utils/helper");

async function authRegisterController(req, res) {
    const { username, password, email } = req.body;
    const userDB = await User.findOne({ username: username });

    if (userDB) {
        console.log(userDB);
        res.status(400);
        res.send("user already exists!");
    } else {
        const hashedPassword = hashPassword(password);
        User.create({
            username,
            password: hashedPassword,
            email,
        });
        res.status(201);
    }
}

module.exports = {
    authRegisterController,
};
