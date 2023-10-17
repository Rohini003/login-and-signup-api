const signUpService = require("../services/sign-up.service");

const signUpController = async (req, res) => {
    try {
        const requestBody = req.body;
        
        const signUpBody = {
            email: requestBody.email,
            password: requestBody.password,
            name: requestBody.name,
            roll_Number:requestBody.roll_Number,
            dept_ID:requestBody.dept_ID,

        }

        const response = await signUpService(signUpBody);

        if (response === true) {
            return res.status(200).send('User registration successful');
        } else {
            // You may want to handle specific error cases here
            return res.status(400).send('User registration failed: Email already in use');
        }

    } catch (error) {
        console.error('An error occurred during registration', error);
        return res.status(500).send("An error occurred during registration");
    }
};

module.exports = signUpController;
