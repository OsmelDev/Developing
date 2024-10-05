import { useState, useEffect } from "react";
import { useAuth } from "../contexts/UserProvider.jsx";

const API_URL = "http://localhost:3129";

export const useFetchData = () => {
	const [data, setData] = useState([]);

	const fetching = (category) => {
		fetch(`${API_URL}/products/${category}`)
			.then((res) => res.json())
			.then((res) => {
				setData(res);
				localStorage.setItem("data", JSON.stringify(data));
			});
	};
	return { data, fetching };
};

export async function handleRegister(username, password) {
	const headers = new Headers();
	headers.append("content-type", "application/json");

	const body = `{
    "username":"${username}",
    "password":"${password}"
  }`;
	const init = {
		method: "POST",
		credentials: "include",
		headers,
		body,
	};

	const response = await fetch("http://localhost:3129/register", init);
	const mediaType = response.headers.get("content-type");
	let data;
	if (mediaType.includes("json")) {
		data = await response.json();
	} else {
		data = await response.text();
	}
	return data;
}

export async function handleUpdate({
	id,
	fristName,
	lastName,
	username,
	email,
	ci,
}) {
	const headers = new Headers();
	headers.append("content-type", "application/json");

	const body = `{
    "username":"${username}",
    "fristName":"${fristName}",
    "lastName":"${lastName}",
    "email":"${email}",
    "CI":"${ci}"
  }`;

	const init = {
		method: "PUT",
		credentials: "include",
		headers,
		body,
	};

	const response = await fetch(
		`http://localhost:3129/profile/edit/${id}`,
		init,
	);
	const mediaType = response.headers.get("content-type");
	let data;
	if (mediaType.includes("json")) {
		data = await response.json();
	} else {
		data = await response.text();
	}
	return data;
}

export async function handleLogin({ username, password }) {
	const headers = new Headers();
	headers.append("content-type", "application/json");

	const body = `{
    "username":"${username}",
    "password":"${password}"
  }`;
	const init = {
		method: "POST",
		credentials: "include",
		headers,
		body,
	};
	const response = await fetch("http://localhost:3129/login", init);
	const mediaType = response.headers.get("content-type");
	let data;
	if (mediaType.includes("json")) {
		data = await response.json();
	} else {
		data = await response.text();
	}
	return data;
}

export async function handleLogout() {
	const init = {
		method: "POST",
		credentials: "include",
	};

	return await fetch("http://localhost:3129/logout", init);
}

export async function handleAddToCart(name, price, id, userId) {
	const headers = new Headers();
	headers.append("content-type", "application/json");

	const body = `{
    "name":"${name}",
    "price":"${price}",
    "id":"${id}",
    "user":"${userId}"
  }`;
	const init = {
		method: "POST",
		credentials: "include",
		headers,
		body,
	};
	const response = await fetch(`http://localhost:3129/cart/add/${id}`, init);
	const mediaType = response.headers.get("content-type");
	let data;
	if (mediaType.includes("json")) {
		data = await response.json();
	} else {
		data = await response.text();
	}
	return data;
}
