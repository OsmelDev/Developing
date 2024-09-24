const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
	name: { type: String, required: true, unique: true },
	price: { type: String, required: true },
	img: { type: String },
	parts: { type: String },
	quantity: { type: Number, required: true },
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
});

module.exports = mongoose.model("Cart", cartSchema);
