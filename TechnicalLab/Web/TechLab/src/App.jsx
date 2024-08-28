import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import Layout from "./screens/Layout.jsx";
import Home from "./screens/Home.jsx";
import Products from "./screens/Products.jsx";
import Contact from "./screens/Contact.jsx";

const App = () => {
	return (
		<div className={styles.app}>
			<Layout />
			<Routes>
				{/*<Route path="/" element={<Layout />} />*/}
				<Route path="/" element={<Home />} />
				<Route path="/Products" element={<Products />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
		</div>
	);
};
export default App;
