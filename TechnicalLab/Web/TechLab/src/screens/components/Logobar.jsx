import React from "react";
import styles from "../styles/layout.module.css";

const Logobar = () => {
	return (
		<div className={styles.logoContainer}>
			<h1>Tech-Lab</h1>
			<section className={styles.sectionLogo}>
				<p>donde todo</p>
				<p>es posible</p>
			</section>
		</div>
	);
};

export default Logobar;
