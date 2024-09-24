import { createContext, useContext, useState, useEffect } from "react";
import { handleAddToCart } from "../hoocks/useFetch.js";
import { useAuth } from "../contexts/UserProvider.jsx";
export const CartContext = createContext();

export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within an CartProvider");
	}
	return context;
};

export const CartProvider = ({ children }) => {
	const { setErr, setMsg, setCar, car, msg } = useAuth();

	async function addToCart(name, price, id, userId) {
		try {
			const res = await handleAddToCart(name, price, id, userId);
			if (res.message) {
				setErr(res.message);
			} else {
				setMsg("agregado al carrito");
			}
		} catch (err) {
			setErr(err);
		}
	}

	useEffect(() => {
		async function checkcar() {
			let resp;
			await fetch("http://localhost:3129/cart/view", {
				credentials: "include",
			})
				.then((data) => data.json())
				.then((d) => (resp = d));
			setCar(resp);
		}
		checkcar();
	}, [msg]);

	return (
		<CartContext.Provider value={{ addToCart }}>
			{children}
		</CartContext.Provider>
	);
};
