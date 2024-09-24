import axios from "./axios.js";

export const registerRequest = (user, pass) => {
	const options = {
		headers: { "Content-Type": "application/json" },
		body: {
			username: user,
			password: pass,
		},
	};
	axios.post("/register", options);
};
