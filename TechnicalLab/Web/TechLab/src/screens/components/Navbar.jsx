import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "../styles/layout.module.css";
import { menuOptions } from "../../assecs/data.js";

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{menuOptions.map((menu) => (
					<li key={menu.screen}>
						<Link to={menu.link}>{menu.screen}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
