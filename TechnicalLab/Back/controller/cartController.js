const Cart = require("../Model/Cart.js");
const User = require("../Model/User.js");
const jwt = require("jsonwebtoken");
const { SECRET_JWT_KEY, SALT_ROUNDS } = require("../config.js");

const getCartUser = async (req, res) => {
	const carts = await Cart.find({
		user: req.user.id,
	}).populate("user");
	if (!carts) return res.status(401).json(["no tiene productos en el carrito"]);

	res.json(carts);
};

const addCart = async (req, res) => {
	const { name } = req.body;
	const { price } = req.body;
	const id = req.params.id;
	const { token } = req.cookies;
	if (token) {
		jwt.verify(token, SECRET_JWT_KEY, async (err, user) => {
			const userFound = await User.findById(user.id);
			if (userFound) {
				try {
					const productFound = await Cart.findOne({ name });
					if (productFound)
						return res.status(400).json({ message: ["ya esta en carrito"] });

					const newProduct = new Cart({
						name,
						price,
						quantity: 1,
						user: userFound.id,
					});
					const savedProduct = await newProduct.save();
					res.json(savedProduct);
				} catch (err) {
					console.log(err);
				}
			} else {
				res.status(400).json(["Unautorized"]);
			}
		});
	}
};
module.exports = { getCartUser, addCart };
