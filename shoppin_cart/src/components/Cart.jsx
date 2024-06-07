import React, { useContext, useId } from "react";
import { LiaOpencart, LiaCartArrowDownSolid } from "react-icons/lia";
import style from "./styles/cart.module.css";
import { useCart } from "../hooks/useCart";
import { CartIten } from "./components/CartIten";

const Cart = () => {
  const cartCheckboxId = useId();
  const { state, addToCart, clearCart } = useCart();
  return (
    <>
      <label htmlFor={cartCheckboxId} className={style.cart_button}>
        {state.length == 0 ? "" : state.length}
        <LiaOpencart />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className={style.cart}>
        {state.map((d) => (
          <CartIten key={state.id} {...d} addToCart={() => addToCart(d)} />
        ))}
        <button onClick={clearCart} id={style.cleanButton}>
          <LiaCartArrowDownSolid />
        </button>
      </aside>
    </>
  );
};

export default Cart;
