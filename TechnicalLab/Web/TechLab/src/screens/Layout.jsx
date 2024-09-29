import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./styles/layout.module.css";
import Navbar from "./components/Navbar.jsx";
import Logobar from "./components/Logobar.jsx";
import Cart from "./components/Cart.jsx";
import { useAuth } from "../contexts/UserProvider.jsx";

const Layout = () => {
	const { isAuthenticated } = useAuth();
	return (
		<div className="bg-black h-14 w-full top-0 flex flex-row justify-around fixed">
			<Logobar />
			<div className={styles.navContainer}>
				<Navbar />
				{isAuthenticated ? <Cart /> : null}
			</div>
		</div>
	);
};

export default Layout;
