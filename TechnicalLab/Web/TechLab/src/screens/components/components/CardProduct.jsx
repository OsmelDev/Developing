import React from "react";
import { useCart } from "../../../contexts/CartProvider.jsx";
import { useAuth } from "../../../contexts/UserProvider.jsx";

const CardProduct = ({ category, description, image, price, id }) => {
	const { userId, err, isAuthenticated } = useAuth();
	const { addToCart } = useCart();

	return (
		<div
			key={image}
			className="flex flex-col justify-between gap-3 bg-gray-800 
			items-center rounded-xl  mb-5 px-5 text-center text-sm w-56 
			h-64 transition-all ease-in-out  hover:border group"
		>
			<span>{err}</span>
			<span className="text-xs group-hover:text-white">{category}</span>
			<img src={image} alt={category} className="h-2/4 rounded-xl" />
			<p className="text-xs group-hover:text-white">{description}</p>
			<div className="flex flex-col justify-between w-full mb-5 content-between h-20">
				<strong className="text-sm group-hover:text-white">
					Price: {price}
				</strong>
				{isAuthenticated ? (
					<button
						onClick={() => {
							addToCart(description, price, id, userId);
						}}
						className="border border-0 w-16 mx-auto rounded-lg 
						group-hover:border hover:bg-black hover:text-white"
					>
						Add
					</button>
				) : null}
			</div>
		</div>
	);
};

export default CardProduct;
