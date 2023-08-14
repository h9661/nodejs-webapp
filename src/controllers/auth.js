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
        if (!/^([a-zA-Z]+){4,12}$/.test(username)) var usernameError = true;

        if (!/^([a-zA-Z0-9]+){4,12}$/.test(password)) var passwordError = true;

        if (!/^[a-zA-Z0-9]+\@[a-zA-Z]+\.[a-zA-Z]+$/.test(email)) var emailError = true;

        if (usernameError || passwordError || emailError) {
            req.session.registerError = {
                usernameError,
                passwordError,
                emailError,
            };

            res.redirect("http://localhost:3000/api/v1/auth/register");
            return true;
        } else {
            const hashedPassword = hashPassword(password);

            const newUser = await User.create({
                username,
                password: hashedPassword,
                email,
            });
            console.log(newUser);
            console.log("new user created!");

            res.redirect("http://localhost:3000/api/v1/auth/login");
            return true;
        }
    }
}

module.exports = {
    authRegisterController,
};
