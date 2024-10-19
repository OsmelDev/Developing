import React, { useId, useState } from "react";
import style from "./styles/register.module.css";
import { useTranslation } from "react-i18next";
import { handleRegister } from "../../hooks/fetch.js";

const Register = () => {
	const [confirmPass, setConfirmPass] = useState("");
	const [userRegisted, setUserRegisted] = useState("");
	const [pass, setPass] = useState("");
	const [error, setError] = useState("");
	const [confirm, setConfirm] = useState("");
	const [isValid, setIsValid] = useState(false);
	const registerId = useId();
	const { t, i18n } = useTranslation("global");

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<div>
			<div className={style.registerContainer}>
				<label htmlFor={registerId} className={style.registerButton}>
					<span>
						<p>{t("header.account.register")}</p>
					</span>
				</label>
			</div>

			<input type="checkbox" id={registerId} hidden />

			<form onSubmit={handleSubmit} className={style.formRegister}>
				<div className={style.formRegisterContainer}>
					<label>{t("header.account.user")}</label>
					<input
						type="text"
						value={userRegisted}
						placeholder={t("header.account.placeholderUser")}
						onChange={(event) => setUserRegisted(event.target.value)}
					/>
					<label>{t("header.account.password")}</label>
					<input
						type="password"
						value={pass}
						placeholder={t("header.account.placeholderPass")}
						onChange={(event) => setPass(event.target.value)}
					/>
					<input
						type="password"
						value={confirmPass}
						placeholder={t("header.account.placeholdercConfirmPass")}
						onChange={(event) => setConfirmPass(event.target.value)}
					/>
				</div>
				{isValid ? (
					<span className={style.confirm}>{confirm}</span>
				) : (
					<span className={style.error}>{error}</span>
				)}
				<button
					type="submit"
					onClick={() => handleRegister({ userRegisted, pass })}
				>
					{t("header.bottons.register")}
				</button>
			</form>
		</div>
	);
};

export default Register;
