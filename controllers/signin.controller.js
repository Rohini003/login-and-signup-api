const signInService = require("../services/signin.service");

const signin = async (req, res) => {
    try {

        const email = req.body.email;
        const password = req.body.password;
        const success = await signInService.findByEmailAndPassword({ email, password });
        const user = req.body.user;
        console.log(user);
        if (success===true) {
            // Authentication successful
            return res.status(200).json({ message: "Authentication successful", user });
        } else {

            // Authentication failed
            return res.status(401).json({ message: "Authentication failed: Invalid email or password" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred during authentication" });
    }
};

module.exports = signin;
