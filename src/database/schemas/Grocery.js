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
});

module.exports = mongoose.model("groceries", GrocerySchema);
