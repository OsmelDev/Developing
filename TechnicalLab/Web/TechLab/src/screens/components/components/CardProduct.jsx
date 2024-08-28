import React from "react";
import styles from "./styles/cardproduct.module.css";
const CardProduct = ({ category, description, image, price }) => {
	return (
		<div key={image} className={styles.card}>
			<img src={image} alt={category} />
			<span>{category}</span>
			<p>{description}</p>
			<strong>{price}</strong>
		</div>
	);
};

export default CardProduct;
