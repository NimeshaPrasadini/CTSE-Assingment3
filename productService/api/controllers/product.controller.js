const Product = require("../models/product.model");



const saveProduct = async (request, response) => {
	if (request.body) {
		
		const newProduct = new Product(request.body);
		try {
			await newProduct.save();
			response.status(201).json({ id: newProduct.id });
		} catch (error) {
			response.status(406).json({ message: error.message });
		}
	}
};

module.exports = { saveProduct };