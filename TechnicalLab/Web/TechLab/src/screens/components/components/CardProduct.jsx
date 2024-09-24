import React from "react";
import styles from "./styles/cardproduct.module.css";
import { useCart } from "../../../contexts/CartProvider.jsx";
import { useAuth } from "../../../contexts/UserProvider.jsx";

const CardProduct = ({ category, description, image, price, id }) => {
	const { userId, err, isAuthenticated } = useAuth();
	const { addToCart } = useCart();

	return (
		<div key={image} className={styles.card}>
			<span>{err}</span>
			<img src={image} alt={category} />
			<span>{category}</span>
			<p>{description}</p>
			<strong>Price: {price}</strong>
			{isAuthenticated ? (
				<button
					onClick={() => {
						addToCart(description, price, id, userId);
					}}
				>
					Add
				</button>
			) : null}
		</div>
	);
};

export default CardProduct;
