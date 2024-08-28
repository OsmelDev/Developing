import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./styles/layout.module.css";
import Navbar from "./components/Navbar.jsx";
import Logobar from "./components/Logobar.jsx";
const Layout = () => {
	return (
		<div className={styles.main}>
			<Logobar />
			<Navbar />
		</div>
	);
};

export default Layout;
