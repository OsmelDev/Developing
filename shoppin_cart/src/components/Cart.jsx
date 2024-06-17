import React, { useId, useContext } from 'react';
import { LiaOpencart, LiaCartArrowDownSolid } from 'react-icons/lia';
import style from './styles/cart.module.css';
import { CartIten } from './components/CartIten';
import { CartContext } from '../context/cartContext';

const Cart = () => {
  const cartCheckboxId = useId();
  const { state, addToCart, clearCart } = useContext(CartContext);

  return (
    <>
      <label htmlFor={cartCheckboxId} className={style.cart_button}>
        {state.length == 0 ? '' : state.length}
        <LiaOpencart />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
 
      <aside className={style.cart}>
        {state.map((product) => (
          <CartIten
            key={product.id}
            {...product}
            addToCart={() => addToCart(product)}
          />
        ))}
        <button onClick={clearCart} id={style.cleanButton}>
          <LiaCartArrowDownSolid />
        </button>
      </aside>
    </>
  );
};

export default Cart;
