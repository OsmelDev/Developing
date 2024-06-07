import { useReducer } from "react";
import { cartInitialState, cartReducer  } from "./cart";
//empieza el reducer
export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (localProduct) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: localProduct,
    });

  const removeFromCart = (localProduct) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: localProduct,
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return { state, addToCart, removeFromCart, clearCart,  dispatch };
}
//termina el reducer