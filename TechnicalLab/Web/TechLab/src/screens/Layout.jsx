import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Logobar from "./components/Logobar.jsx";
import Cart from "./components/Cart.jsx";
import { useAuth } from "../contexts/UserProvider.jsx";

const Layout = () => {
	const { isAuthenticated } = useAuth();
	return (
		<div className="bg-black h-14 w-full top-0 flex flex-row justify-between px-8 fixed">
			<Logobar />
			<div className="flex flex-row justify-center items-center gap-8">
				<Navbar />
				{isAuthenticated ? <Cart /> : null}
			</div>
		</div>
	);
};

export default Layout;
