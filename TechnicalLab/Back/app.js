const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth.route.js");
const productsRoute = require("./routes/products.route.js");
const cartRoute = require("./routes/cart.route.js");
const connectDB = require("./database/db.js");
const { PORT } = require("./config.js");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: "http://localhost:5173",
		origin: "http://localhost:5174",
		credentials: true,
	}),
);

app.use("/", authRoute);
app.use("/products", productsRoute);
app.use("/cart", cartRoute);

// const ACCEPTED_ORIGINS = ["http://localhost:5174", "http://localhost:3000"];
// const PORT = process.env.PORT ?? 3129;

app.listen(PORT, () => {
	console.log(`server listening on port http://localhost:${PORT}`);
	connectDB();
});
