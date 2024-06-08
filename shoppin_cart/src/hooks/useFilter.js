import { useContext } from 'react';
import { FilterContext } from '../context/filterContext';
import { useResult } from './useResult';
import { loadProduct } from './fetch';

export function useFilter() {
  const { filter, setFilter } = useContext(FilterContext);
  const { localProducts, data } = loadProduct();

  const filterProducts = () => {
    return data.filter((d) => {
      return filter.category === 'all' && d.category === filter.category;
    });
  };

  const filterProductsLocal = () => {
    const data = localProducts;
    return data.filter((d) => {
      return filter.category === 'all' || d.category === filter.category;
    });
  };
  return { filterProducts, filterProductsLocal, filter, setFilter };
}
