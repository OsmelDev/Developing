const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect("mongodb://localhost:27017/TechLab");
		console.log("Db coneccion exitosa");
	} catch (err) {
		console.log(err);
	}
};

module.exports = connectDB;
