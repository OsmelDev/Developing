import { useCallback, useEffect, useState } from 'react';
import { API_GET_IP, API_LOCATION, API_URL, API_URL_CATEGORIES } from '../constant/constant';
import { product } from '../assets/products.json';

export const loadProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const loadData = useCallback(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  });
  const localProducts = product;

  const getCategories = useCallback(() => {
    fetch(API_URL_CATEGORIES)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .finally(() => setLoading(false));
  });

  useEffect(() => {
    setLoading(true);
    loadData();
    getCategories();
  }, []);

  return { data, categories, localProducts, loading };
};

export const getUserIp = () => {
  const [IP, setIP] = useState();
  const getData = useCallback(() => {
    fetch(`${API_GET_IP}`)
      .then((resp) => resp.json())
      .then((data) => setIP(data.ip));
  });
  useEffect(() => {

    getData();
  }, []);
  return { IP };
};

export const getCoutryUser = () => {
  const { IP } = getUserIp();
  const [country, setCountry] = useState();
  fetch(`${API_LOCATION}/${IP}`)
    .then((resp) => resp.json())
    .then((data) => setCountry(data.country));
  return { country };
};
