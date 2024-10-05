const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		// _id: { type: String },
		name: { type: String },
		username: { type: String, required: true },
		password: { type: String, required: true },
		email: { type: String, unique: true },
		CI: { type: String, unique: true },
		avatar: { type: String },
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("User", userSchema);
