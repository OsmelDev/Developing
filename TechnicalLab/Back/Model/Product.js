const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
	name: { type: String, required: true },
	category: { type: String, required: true },
	price: { type: String, required: true },
	img: { type: String },
	rate: { type: String },
	parts: { type: String },
	inCart: { type: Boolean, default: false },
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
});

module.exports = mongoose.model("Product", productSchema);
