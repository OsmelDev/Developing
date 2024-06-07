import { useCallback, useEffect, useState } from "react";
import { API_URL, API_URL_CATEGORIES } from "../constant/constant";
import { product } from "../assets/products.json";

export const loadProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = useCallback(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  });

  const localProducts = product;

  const [categories, setCategories] = useState([]);
  const loadCategories = useCallback(async () => {
    await fetch(API_URL_CATEGORIES)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .finally(() => setLoading(false));
  });

  useEffect(() => {
    setLoading(true);
    loadData();
    loadCategories();
  }, []);

  return { data, localProducts, loading, categories };
};
