import React from "react";
import CardProduct from "./components/CardProduct.jsx";
import styles from "../styles/products.module.css";

const Stock = ({ data }) => {
	return (
		<div className={styles.cardContainer}>
			{data.map((d, i) => (
				<CardProduct
					category={d.category}
					description={d.description}
					image={d.image}
					price={d.price}
					key={i}
					id={d._id}
				/>
			))}
		</div>
	);
};

export default Stock;
