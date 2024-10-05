const express = require("express");
const authRequired = require("../middlewares/validateToken.js");
const validateSchema = require("../middlewares/validateSchema.js");
const {
	register,
	login,
	logout,
	verifyToken,
	profile,
	edit,
	changePass,
} = require("../controller/authController.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/verify", verifyToken);
router.get("/profile", authRequired, profile);
router.put("/profile/edit/:id", authRequired, edit);
router.put("/profile/edit/pass/:id", changePass);
module.exports = router;
