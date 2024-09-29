import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { menuOptions } from "../../assecs/data.js";
import { useAuth } from "../../contexts/UserProvider.jsx";
// import { logout } from "../../hoocks/useFetch.js";

const Navbar = () => {
	const { username, dataUser, isAuthenticated, logout } = useAuth();
	return (
		<nav className="flex justify-center items-center min-w-7 text-white">
			<ul className="flex gap-8 list-none">
				{menuOptions.map((menu) => (
					<li key={menu.screen}>
						<Link
							to={menu.link}
							className="hover:text-blue-600 hover:underline transition-all ease-in-out"
						>
							{menu.screen}
						</Link>
					</li>
				))}
				<li>
					{isAuthenticated ? (
						<div className="flex justify-between w-48 h-5 content-center items-center ">
							<button
								onClick={() => logout()}
								className="hover:text-red-600 hover:underline"
							>
								{" "}
								logout, {dataUser.username}
							</button>
							<Link
								to="/Profile"
								className="hover:text-blue-600 hover:underline transition-all ease-in-out"
							>
								{" "}
								Profile
							</Link>
						</div>
					) : (
						<Link
							to="/Login"
							className="hover:text-blue-600 hover:underline transition-all ease-in-out"
						>
							{" "}
							Login
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
