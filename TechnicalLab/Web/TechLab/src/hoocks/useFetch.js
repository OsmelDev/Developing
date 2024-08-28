const API_URL = "http://localhost:3129";
import { useState } from "react";

export const useFetchData = () => {
	const [data, setData] = useState([]);

	const fetching = (category) => {
		fetch(`${API_URL}/${category}`)
			.then((res) => res.json())
			.then((res) => setData(res));
	};

	return { data, fetching };
};
