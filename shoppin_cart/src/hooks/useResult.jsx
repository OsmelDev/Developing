import Card from "../components/Card";
import { useCart } from "./useCart";
import { useFilter } from "./useFilter";

export function useResult() {
  const { addToCart, removeFromCart, state } = useCart();
  const { filterProducts, filterProductsLocal } = useFilter();
  
  
  const checkProductInCart = (localProduct) => {
    return state.some((item) => item.id === localProduct.id);
  };

  const localProducts = filterProductsLocal();
  function getLocalResult() {
    return localProducts.map((d) => {
      const isProductInCart = checkProductInCart(d);
      return (
        <Card
          d={d}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isProductInCart={isProductInCart}
          key={d.id}
          category={d.category}
          picture={d.image}
          nombre={d.title}
        />
      );
    });
  }


  const data = filterProducts();
  function getFetchResult() {
    return data.map((d) => {
      const isProductInCart = checkProductInCart(d);
      return (
        <Card
          d={d}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isProductInCart={isProductInCart}
          key={d.id}
          category={d.category}
          picture={d.image}
          nombre={d.title}
        />
      );
    });
  }

  return { getLocalResult, getFetchResult, data };
}
