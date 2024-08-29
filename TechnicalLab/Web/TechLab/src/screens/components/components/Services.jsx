import React from "react";
import styles from "./styles/service.module.css";
import { servi } from "../../../assecs/data.js";

const Services = () => {
	return (
		<article className={styles.services}>
			{servi.map((service) => (
				<div key={service.name}>
					<h3>{service.name}</h3>
					<p>{service.description}</p>
				</div>
			))}
		</article>
	);
};

export default Services;
