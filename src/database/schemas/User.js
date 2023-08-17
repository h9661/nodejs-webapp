const mongoose = require("mongoose");

const GrocerySchema = new mongoose.Schema({
    item: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    quantity: {
        type: mongoose.SchemaTypes.Number,
        required: true,
    },
    category: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    imageURL: {
        type: String,
        required: false,
    },
});

const UserSchema = new mongoose.Schema({
    username: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    email: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    createdAt: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: new Date(),
    },
    groceries: [GrocerySchema],
});

module.exports = mongoose.model("users", UserSchema);
