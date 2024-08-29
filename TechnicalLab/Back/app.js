const express = require("express");
const cors = require("cors");
const app = express();
const laptops = require("./products/laptops.json");
const pcs = require("./products/pcs.json");
const grafics = require("./products/grafics.json");
const motherboard = require("./products/motherboards.json");
const hdd = require("./products/hdd.json");
const monitores = require("./products/monitores.json");

const ACCEPTED_ORIGINS = [
	"http://localhost:5173",
	"http://localhost:3129",
	"http://movies.com",
];

app.get("/:category", cors(), (req, res) => {
	const origin = req.header("origin");
	if (ACCEPTED_ORIGINS.includes(origin)) {
		res.header("Access-Control-Allow-Origin", "*");
	}
	const { category } = req.params;
	if (category === "laptops") {
		res.json(laptops);
	} else if (category === "pcs") {
		res.json(pcs);
	} else if (category === "grafics") {
		res.json(grafics);
	} else if (category === "motherboard") {
		res.json(motherboard);
	} else if (category === "hdd") {
		res.json(hdd);
	} else if (category === "monitores") {
		res.json(monitores);
	} else if (category === "products") {
		let product = laptops.concat(pcs, grafics, motherboard, hdd, monitores);
		res.json(product);
	}
});

const PORT = process.env.PORT ?? 3129;

app.listen(PORT, () => {
	console.log(`server listening on port http://localhost:${PORT}`);
});
