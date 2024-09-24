const express = require("express");
const {
	getProducts,
	getProductCategory,
	createProduct,
} = require("../controller/productController.js");

const router = express.Router();

router.get("/all", getProducts);
router.get("/:category", getProductCategory);
router.post("/create", createProduct);

module.exports = router;
