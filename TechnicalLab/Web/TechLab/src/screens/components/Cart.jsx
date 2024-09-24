import React, { useId } from "react";
import style from "./styles/cart.module.css";
import { LiaOpencart, LiaCartArrowDownSolid } from "react-icons/lia";
import { useAuth } from "../../contexts/UserProvider.jsx";
import CartItem from "./components/CartItem.jsx";

const Cart = () => {
	const cartCheckBoxId = useId();
	const { car } = useAuth();

	return (
		<>
			<label htmlFor={cartCheckBoxId} className={style.cart_button}>
				{car.length > 0 ? <span>{car.length}</span> : null}
				<LiaOpencart />
			</label>
			<input id={cartCheckBoxId} type="checkbox" hidden />

			<aside className={style.cart}>
				<ul>
					{car.map((inCart) => (
						<CartItem
							key={inCart.name}
							name={inCart.name}
							price={inCart.price}
							quantity={inCart.quantity}
						/>
					))}
				</ul>
				<button id={style.cleanButton}>
					<LiaCartArrowDownSolid />
				</button>
			</aside>
		</>
	);
};

export default Cart;
