import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
	handleRegister,
	handleLogin,
	handleLogout,
	handleUpdate,
} from "../hoocks/useFetch.js";
import Cookie from "js-cookie";

export const UserContext = createContext(null);

export const useAuth = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

export const UserProvider = ({ children }) => {
	const navigation = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [fristName, setFristName] = useState("");
	const [lastName, setLastName] = useState("");
	const [ci, setCi] = useState("");
	const [email, setEmail] = useState("");
	const [msgUpd, setMsgUpd] = useState("");

	const [confirmPass, setConfirmPass] = useState("");
	const [dataUser, setDataUser] = useState([]);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [err, setErr] = useState([]);
	const [msg, setMsg] = useState([]);
	const [isLogout, setIsLogout] = useState(false);
	const [isLogin, setIsLogin] = useState(true);
	const [userId, setUserId] = useState([]);
	const [car, setCar] = useState([]);
	const [isRegister, setIsRegister] = useState(false);

	async function Login() {
		if (username === "" || password === "") {
			setErr(["All field its required"]);
		} else {
			let userData = await handleLogin({ username, password });
			try {
				if (userData._id) {
					setMsg("iniciando seccion");
					setDataUser(userData);
					setTimeout(() => {
						setIsAuthenticated(true);
						setUserId(userData._id);
					}, 2000);
				} else if (!userData._id) {
					setErr(userData);
				}
			} catch (err) {
				setErr(err);
			}
		}
	}

	async function Register() {
		if (username === "" || password === "" || confirmPass === "") {
			setErr(["All field its required"]);
		} else {
			if (password.length >= 6) {
				if (password === confirmPass) {
					let userData = await handleRegister(username, password);
					if (userData._id) {
						setMsg("usuario registrado");
						setIsRegister(true);
						setUsername("");
						setPassword("");
					} else {
						setErr(userData);
					}
				} else {
					setErr("the pass do not match");
					console.log(userData);
				}
			} else {
				setErr(["La contrase;a debe tener al menos 6 caracteres"]);
			}
		}
	}

	async function update() {
		let id = dataUser._id;
		console.log(id);
		let dataUpdate = await handleUpdate({
			id,
			fristName,
			lastName,
			ci,
			email,
			username,
		});
		if (!dataUpdate) console.log("no hay datos");

		setMsgUpd(dataUpdate);
	}

	async function logout() {
		const res = await handleLogout();
		if (res.status === 200) {
			setIsAuthenticated(false);
			setIsLogin(false);
		}
	}

	useEffect(() => {
		if (err.length > 0 || msg.length > 0) {
			const timer = setTimeout(() => {
				setErr([]);
				setMsg([]);
				setMsgUpd([]);
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [err, msg, msgUpd]);

	useEffect(() => {
		if (isAuthenticated) navigation("/Profile");
	}, [isAuthenticated]);

	useEffect(() => {
		async function checkLogin() {
			const cookie = Cookie.get();
			if (cookie.token) {
				try {
					let res;
					await fetch("http://localhost:3129/verify", {
						credentials: "include",
					})
						.then((data) => data.json())
						.then((d) => (res = d));
					if (!res) {
						setIsAuthenticated(false);
					} else {
						setIsAuthenticated(true);
						setDataUser(res);
					}
				} catch (error) {
					console.log(error);
				}
			}
		}
		checkLogin();
	}, []);

	return (
		<UserContext.Provider
			value={{
				username,
				setUsername,
				password,
				setPassword,
				confirmPass,
				setConfirmPass,
				setDataUser,
				dataUser,
				err,
				setErr,
				msg,
				setMsg,
				isAuthenticated,
				setIsAuthenticated,
				setIsLogout,
				Login,
				Register,
				logout,
				isLogin,
				setIsLogin,
				userId,
				car,
				setCar,
				fristName,
				setFristName,
				lastName,
				setLastName,
				ci,
				setCi,
				email,
				setEmail,
				update,
				msgUpd,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
