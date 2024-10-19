import { createContext, useState } from "react";
import { useCartReducer } from "../reducer/cartReducer";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart, dispatch } =
    useCartReducer();
  const [user, setUser] = useState("");
  const [loginData, setLoginData] = useState("");
  return (
    <CartContext.Provider
      value={{
        loginData,
        setLoginData,
        user,
        setUser,
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
