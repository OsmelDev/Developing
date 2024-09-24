const JWT = require("jsonwebtoken");
const { SECRET_JWT_KEY } = require("../config.js");

module.exports = function createAccesToken(payload) {
	return new Promise((resolve, reject) => {
		JWT.sign(payload, SECRET_JWT_KEY, { expiresIn: "1d" }, (err, token) => {
			if (err) reject(err);
			resolve(token);
		});
	});
};
