import { createContext } from 'react';
import { useCartReducer } from '../reducer/cartReducer';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart, dispatch } =
    useCartReducer();

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        clearCart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
