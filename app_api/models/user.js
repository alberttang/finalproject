const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;