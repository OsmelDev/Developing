import { useContext } from "react";
import Card from "../components/components/Card";
// import { useCartReducer } from "../reducer/cartReducer";
import { useFilter } from "./useFilter";
import { CartContext } from "../context/cartContext";

export function useResult() {
  const { addToCart, removeFromCart, state } = useContext(CartContext);


  const { filterProducts, filterProductsLocal } = useFilter();
  const checkProductInCart = (localProduct) => {
    return state.some((item) => item.id === localProduct.id);
  };

  const localProducts = filterProductsLocal();
  
  function getLocalResult() {
    return localProducts.map((localproduct) => {
      const isProductInCart = checkProductInCart(localproduct);
      
      return (
        <Card
          localproduct={localproduct}
          key={localproduct.id}
          category={localproduct.category}
          picture={localproduct.image}
          nombre={localproduct.title}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isProductInCart={isProductInCart}
        />
      );
    });
  }

  const data = filterProducts();
  function getFetchResult() {
    return data.map((dataproduct) => {
      const isProductInCart = checkProductInCart(dataproduct);
      return (
        <Card
          product={dataproduct}
          key={dataproduct.id}
          category={dataproduct.category}
          picture={dataproduct.image}
          nombre={dataproduct.title}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isProductInCart={isProductInCart}
        />
      );
    });
  }

  return { getLocalResult, getFetchResult, data };
}
