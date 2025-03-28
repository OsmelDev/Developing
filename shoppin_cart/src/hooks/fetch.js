import { useCallback, useEffect, useState } from "react";
import {
  API_GET_IP,
  API_LOCATION,
  API_URL,
  API_URL_CATEGORIES,
  BACKEND,
} from "../constant/constant";
import { product } from "../assets/products.json";

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

export async function handleRegister({ userRegisted, pass }) {
  const headers = new Headers();
  headers.append("content-type", "application/json");

  const body = `{
    "username":"${userRegisted}",
    "password":"${pass}"
  }`;

  const init = {
    method: "POST",
    headers,
    body,
  };

  const response = await fetch("http://localhost:3000/register", init);
  console.log(`response status is ${response.status}`);
  const mediaType = response.headers.get("content-type");
  let data;
  if (mediaType.includes("json")) {
    data = await response.json();
  } else {
    data = await response.text();
  }
  console.log(data);
}

export async function handleLoginP({ user, password }) {
  const headers = new Headers();
  headers.append("content-type", "application/json");

  const body = `{
    "username":"${user}",
    "password":"${password}"
  }`;

  const init = {
    method: "POST",
    headers,
    body,
  };

  const response = await fetch("http://localhost:3000/login", init);
  console.log(`response status is ${response.status}`);

  const mediaType = response.headers.get("content-type");
  let data;

  if (mediaType.includes("json")) {
    data = await response.json();
  } else {
    data = await response.text();
  }
  return data;
}

function handleLogout() {
  setIsLogin(false);
  setLoginData("");
}
