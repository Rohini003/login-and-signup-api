const User = require("../models/user");

const getUser = async (email) => {
    return await User.findOne({ email: email })
}

const createNewUser = async (record) => {
    return await User.create(record)
}

module.exports = {
    getUser,
    createNewUser,
}

