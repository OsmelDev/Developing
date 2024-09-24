import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "../styles/loginregister.module.css";
import { useAuth } from "../../contexts/UserProvider.jsx";

const FormRegister = () => {
	const { setUsername, setPassword, setConfirmPass, err, msg, Register } =
		useAuth();

	return (
		<>
			<div className={style.formContainerP}>
				<form
					className={style.formRegister}
					onSubmit={(e) => e.preventDefault()}
				>
					<h2>Register</h2>

					{err.length > 0 ? (
						<span className={style.formLoginErr}>{err}</span>
					) : (
						""
					)}

					<label>Username</label>
					<input
						type="text"
						placeholder="username"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<label>Password</label>
					<input
						type="password"
						placeholder="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<label>Repeat Password</label>
					<input
						type="password"
						placeholder="repeat password"
						onChange={(e) => setConfirmPass(e.target.value)}
					/>
					<span className={style.formLoginSucces}>{msg}</span>
					<button
						onClick={() => {
							Register();
						}}
					>
						Register
					</button>
					<div className={style.signinContainer}>
						<p>ya tienes cuenta ?</p>
						<Link to="/Login"> Signin</Link>
					</div>
				</form>
			</div>
		</>
	);
};

export default FormRegister;
