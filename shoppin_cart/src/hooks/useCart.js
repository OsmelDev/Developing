import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("tiene que encerrarlo en el CartProvider");
  }
  return context;
};
