import { createContext, useState } from 'react';
import { useCartReducer } from '../reducer/cartReducer';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart, dispatch } =
    useCartReducer();
    const [user, setUser]=useState('');

  function handleRegister(){
  let data = {
    username: user,
    password: password
  }
  localStorage.setItem('user', JSON.stringify(data))
  setIsLogin(true)
  setUser('')
}
  function handleLogin(){

}

  return (
    <CartContext.Provider
      value={{
        user,
        setUser,
        state,
        addToCart,
        removeFromCart,
        clearCart,
        dispatch,
        handleRegister,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
