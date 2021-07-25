const mongoose = require("mongoose");
const validator = require('validator');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3

    },
    email: {
        type: String,
        required: true,
        validator(value) {
            if (!validator.isEmail(value)) {
                throw new error("Invalid email id")
            }
        },
        phone: {
            type: Number,
            required: true,
            min: 10
        },
        massage: {
            type: String,
            required: true,
            minLength: 3
        },
        date: {
            type: Date,
            default: Date.now
        }

    }
})


// create a collections 

const User = mongoose.model("User", userSchema);


module.exports = User;