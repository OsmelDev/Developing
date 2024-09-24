import axios from "axios";

const instance = axios.create({
	baseUrl: "http://localhost:3129",
	withCredentials: true,
});

export default instance;
