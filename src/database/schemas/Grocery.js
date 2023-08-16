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
    imageURL: {
        type: String,
        required: false,
    },
});

module.exports = mongoose.model("groceries", GrocerySchema);
