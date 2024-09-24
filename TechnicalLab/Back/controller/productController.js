const Product = require("../Model/Product.js");

const getProductsUser = async (req, res) => {
	const productsInCart = Product.find({
		user: req.user.id,
	}).populate("user");
	res.json(productsInCart);
};

const getProducts = async (req, res) => {
	try {
		const products = await Product.find();
		if (!products)
			return res.status(400).json(["no hay productos que mostrar"]);

		res.status(200).json(products);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
};

const getProductCategory = async (req, res) => {
	const { category } = req.params;
	console.log(category);
	try {
		const products = await Product.find({ category });
		if (!products)
			return res.status(400).json(["no hay productos que mostrar"]);

		res.status(200).json(products);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
};

const createProduct = async (req, res) => {
	const { name, category, price, img, rate, parts } = req.body;
	try {
		const productFound = await Product.findOne({ name });
		if (productFound) return res.status(401).json(["este producto ya existe"]);

		const newProduct = new Product({
			name,
			category,
			price,
			img,
			rate,
			parts,
		});
		const savedProduct = await newProduct.save();
		res.json(savedProduct);
	} catch (err) {
		console.log(err);
	}
};

module.exports = { getProducts, createProduct, getProductCategory };
