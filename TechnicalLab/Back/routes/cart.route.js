const express = require("express");
const { getCartUser, addCart } = require("../controller/cartController.js");
const router = express.Router();
const authRequired = require("../middlewares/validateToken.js");

router.get("/view", authRequired, getCartUser);
router.post("/add/:id", authRequired, addCart);
router.delete("/delete");

module.exports = router;
