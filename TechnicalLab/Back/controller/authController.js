const User = require("../Model/User.js");
const bcrypt = require("bcrypt");
const createAccesToken = require("../libs/jwt.js");
const jwt = require("jsonwebtoken");
const { SECRET_JWT_KEY, SALT_ROUNDS } = require("../config.js");

const register = async (req, res) => {
	const { username, password } = req.body;
	console.log(req.body);
	try {
		const userFound = await User.findOne({ username });

		if (userFound)
			return res.status(400).json(["the username is already in use"]);
		const hashedPass = await bcrypt.hash(password, SALT_ROUNDS);
		const newUser = new User({
			username,
			password: hashedPass,
		});

		const userSaved = await newUser.save();

		const token = await createAccesToken({ id: userSaved._id });

		res.cookie("token", token);

		res.status(200).json(userSaved);
	} catch (err) {
		res.status(500).send(err);
	}
};

const login = async (req, res) => {
	const { username, password } = req.body;

	try {
		const userFound = await User.findOne({ username });

		if (!userFound) return res.status(400).json(["User not found"]);

		//comparando los passwords
		const isMatch = await bcrypt.compare(password, userFound.password);
		if (!isMatch) return res.status(400).json(["incorrect password"]);

		const token = await createAccesToken({ id: userFound._id });

		res.cookie("token", token);

		res.json({
			_id: userFound._id,
			name: userFound.name,
			CI: userFound.CI,
			email: userFound.email,
			username: userFound.username,
			createdAt: userFound.createdAt,
			updatedAt: userFound.updatedAt,
		});
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
};

const logout = (req, res) => {
	res.cookie("token", "");
	console.log("saliendo");
	return res.status(200).json("Ok");
};

const profile = async (req, res) => {
	const userFound = await User.findById(req.user.id);
	if (!userFound) return res.status(400).json({ message: "User not found" });
	return res.json({
		_id: userFound._id,
		name: userFound.name,
		CI: userFound.CI,
		email: userFound.email,
		username: userFound.username,
		createdAt: userFound.createdAt,
		updatedAt: userFound.updatedAt,
	});
};

const edit = async (req, res) => {
	const { username, email, CI, fristName, lastName } = req.body;
	const { id } = req.params;
	console.log(req.params);
	const name = fristName + " " + lastName;
	await User.updateOne({ _id: id }, { $set: { CI, email, username, name } });
	res.json(["Usuario Actualizado"]);
};

const verifyToken = async (req, res) => {
	const { token } = req.cookies;
	if (!token) return res.status(401).json({ message: "Unauthorized" });

	jwt.verify(token, SECRET_JWT_KEY, async (err, user) => {
		const userFound = await User.findById(user.id);

		if (!userFound) return res.status(401).json({ message: "Unauthorized" });

		res.json({
			_id: userFound._id,
			name: userFound.name,
			CI: userFound.CI,
			email: userFound.email,
			username: userFound.username,
			createdAt: userFound.createdAt,
			updatedAt: userFound.updatedAt,
		});
	});
};

module.exports = { register, login, logout, verifyToken, profile, edit };
