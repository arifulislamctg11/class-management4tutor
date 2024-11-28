const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String, required: true,unique:true },
        password: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;