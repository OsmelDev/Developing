import React, { useId, useState } from "react";
import style from "./styles/login.module.css";
import { useTranslation } from "react-i18next";
import { handleLoginP } from "../../hooks/fetch.js";
import { BACKEND } from "../../constant/constant.jsx";

const Login = ({
	user,
	setLoginData,
	loginData,
	setUser,
	password,
	setPassword,
	isLogin,
	setIsLogin,
}) => {
	const [isValid, setIsValid] = useState(false);
	const [error, setError] = useState("");
	const [msg, setMsg] = useState("");
	const loginId = useId();
	const { t, i18n } = useTranslation("global");

	function handleSubmit(e) {
		e.preventDefault();
	}

	async function handleLoggin() {
		let userData = await handleLoginP({ user, password });
		if (typeof userData === "string") {
			setError(userData);
			setIsValid(false);
			setIsLogin(false);
			console.log(userData);
		} else {
			setLoginData(userData);
			setMsg("secion iniciada");
			setIsValid(true);
			setIsLogin(true);
			console.log(userData);
		}
		console.log(typeof userData);
	}
	console.log(loginData);
	function handleLogout() {
		setIsLogin(false);
		setLoginData("");
	}

	return (
		<div>
			<div className={style.loginContainer}>
				{isLogin ? (
					<label onClick={() => handleLogout()} className={style.loginout}>
						<p>{t("header.account.logout")}</p>
					</label>
				) : (
					<div className={style.login}>
						<label htmlFor={loginId} className={style.loginButton}>
							<span>
								<p>{t("header.account.greeting")}</p>
							</span>
						</label>
					</div>
				)}
			</div>

			<input type="checkbox" id={loginId} hidden />

			<div className={isLogin ? style.formLoginClose : style.formLogin}>
				<form onSubmit={handleSubmit}>
					<div className={style.formLoginContainer}>
						<label>{t("header.account.user")}</label>
						<input
							type="text"
							placeholder={t("header.account.placeholderUser")}
							value={user}
							onChange={(event) => setUser(event.target.value)}
						/>
						<label>{t("header.account.password")}</label>
						<input
							value={password}
							type="password"
							placeholder={t("header.account.placeholderPass")}
							onChange={(event) => setPassword(event.target.value)}
						/>
					</div>
					{isValid ? "" : <span className={style.error}>{error}</span>}

					<button type="submit" onClick={() => handleLoggin()}>
						{t("header.bottons.login")}
					</button>
				</form>

				<label htmlFor={loginId} className={style.close}>
					X
				</label>
			</div>
		</div>
	);
};

export default Login;
