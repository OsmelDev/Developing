const JWT = require("jsonwebtoken");
const { SECRET_JWT_KEY } = require("../config.js");

module.exports = authRequired = (req, res, next) => {
	const { token } = req.cookies;
	if (!token) {
		return res.status(401).json({ message: "no token, authorizacion denied" });
	} else {
		JWT.verify(token, SECRET_JWT_KEY, (err, user) => {
			if (err) {
				return res.status(403).json({ message: "invalid token" });
			} else {
				req.user = user;
				next();
			}
		});
	}
};
