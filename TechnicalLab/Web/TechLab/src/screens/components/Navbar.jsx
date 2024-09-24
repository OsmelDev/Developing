import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "../styles/layout.module.css";
import { menuOptions } from "../../assecs/data.js";
import { useAuth } from "../../contexts/UserProvider.jsx";
// import { logout } from "../../hoocks/useFetch.js";

const Navbar = () => {
	const { username, dataUser, isAuthenticated, logout } = useAuth();
	return (
		<nav className={styles.nav}>
			<ul>
				{menuOptions.map((menu) => (
					<li key={menu.screen}>
						<Link to={menu.link}>{menu.screen}</Link>
					</li>
				))}
				<li>
					{isAuthenticated ? (
						<div className={styles.userContainer}>
							<button onClick={() => logout()}>
								{" "}
								logout, {dataUser.username}
							</button>
							<Link to="/Profile"> Profile</Link>
						</div>
					) : (
						<Link to="/Login"> Login</Link>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
