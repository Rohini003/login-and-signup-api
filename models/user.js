const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,  
    },
    password:{
        type: String,
        required: true,
    },
    profileImageURL: {
        type: String,
        default:"./images/1.png",
    },
    
    role : {
        type:String,
        enum: ["USER","ADMIN"],
        default: 'USER',
    },
});

userSchema

const User = model("user", userSchema);

module.exports = User;