const { Double } = require("bson");
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        productname: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: String,
            required: true,
            trim: true,
            maxlength: 10,
        },
        quantity: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        type: {
            type: Number,
            required: true,
            trim: true,
        },
       
       
    },
    {
        timestamps: true,
    }
);

const DeliveryService = mongoose.model("products", ProductSchema);

module.exports = DeliveryService;