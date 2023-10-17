const { createNewUser, getUser } = require("../repositories/user-repository");

const signUpService = async (newUser) => {
    try {
        const existingUser = await getUser(newUser.email);
        
        if (existingUser) {
            return false;
        } else {
            const response = await createNewUser(newUser);
            return response !== null; 
        }
    } catch (error) {
        console.log('sign-up.service error', error);
        
        throw error; 
    }
}

module.exports = signUpService;
