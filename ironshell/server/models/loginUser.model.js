const mongoose = require("mongoose");

const LoginUserSchema = new mongoose.Schema({
    email : {
        type: String, 
        required : [true, "Email  is required"],
        minlength: [3, "Email must be at least 3 characters"]
    },
    password : {
        type: String, 
        required : [true, "Password is required"],
        minlength: [5, "Password must be at least 5 characters"]
    },
})

const LoginUser = mongoose.model("LoginUser", LoginUserSchema);

module.exports = LoginUser