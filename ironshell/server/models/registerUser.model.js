const mongoose = require("mongoose");

const RegisterUserSchema = new mongoose.Schema({
    firstName : {
        type: String, 
        required : [true, "First name is required"],
        minlength: [3, "First name must be at least 2 characters"]
    },
    lastName : {
        type: String, 
        required : [true, "Last name is required"],
        minlength: [3, "Last name must be at least 2 characters"]
    },
    email : {
        type: String, 
        required : [true, "Email  is required"],
        minlength: [3, "Email must be at least 3 characters"]
    },

    password : {
        type: String, 
        required : [true, "Password is required"],
        minlength: [3, "Password must be at least 3 characters"]
    },
    confirmPassword : {
        type: String, 
        required : [true, "Confirm password is required and must match the password"],
        minlength: [3, "Password must be at least 3 characters"]
    },
}, {timestamps: true});

const registerUser = mongoose.model("User", RegisterUserSchema);

module.exports = registerUser