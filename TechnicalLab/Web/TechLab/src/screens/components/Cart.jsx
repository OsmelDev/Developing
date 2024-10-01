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
			<label
				htmlFor={cartCheckBoxId}
				className="flex  items-center
				cursor-pointer transition-all duration-150 ease-in-out 
				text-white h-10 w-14 z-50 p-0  mb-3"
				id={style.cart_button}
			>
				{car.length > 0 ? (
					<span
						className="flex relative left-9 top-2 rounded-full
					 bg-red-700 h-4 w-6 items-center justify-center text-sm"
					>
						{car.length}
					</span>
				) : null}
				<LiaOpencart className="h-full w-full active:text-gray-700" />
			</label>
			<input id={cartCheckBoxId} type="checkbox" hidden />

			<aside
				className="fixed  bg-black h-full top-0 -right-96 w-52 
				overflow-hidden transition-all duration-1000 ease-in-out py-16 px-8
				 text-white flex flex-col text-center rounded-l-xl"
				id={style.cart}
			>
				<ul className="grid grid-cols-1 gap-5">
					{car.map((inCart) => (
						<CartItem
							key={inCart.name}
							name={inCart.name}
							price={inCart.price}
							quantity={inCart.quantity}
						/>
					))}
				</ul>
				<button
					className="absolute text-white bottom-5 right-8 h-8 w-8 flex 
				items-center justify-center hover:scale-150 hover:text-red-700 cursor-pointer
				cursor-pointer"
				>
					<LiaCartArrowDownSolid className="h-full w-full" />
				</button>
			</aside>
		</>
	);
};

export default Cart;
