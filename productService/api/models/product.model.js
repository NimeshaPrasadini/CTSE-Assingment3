const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	productname: { type: String, required: true, trim: true },
	price: { type: String, required: true, trim: true },
	quantity: { type: String, required: true, trim: true },
	
	type: { type: String, required: true, trim: true },
});

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;