import React from "react";
import Services from "./components/Services.jsx";
import styles from "../styles/home.module.css";

const About = () => {
	return (
		<div className={styles.about}>
			<h1>Sobre Nosotros</h1>
			<p>
				Somos un equipo que se especializa en brindar servicios tecnicos tanto
				de software como de hardware
			</p>
			<span>Entre nuestros servicios se encuentran:</span>
			<Services />
		</div>
	);
};

export default About;
