import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import style from "../styles/loginregister.module.css";
import { useAuth } from "../../contexts/UserProvider.jsx";

const FormLogin = () => {
	const navigation = useNavigate();
	const { setUsername, setPassword, msg, err, Login } = useAuth();

	return (
		<>
			<div className={style.formContainerP}>
				<form className={style.formLogin} onSubmit={(e) => e.preventDefault()}>
					<h2>LOGIN</h2>
					{err.length > 0 ? (
						<span className={style.formLoginErr}>{err}</span>
					) : (
						""
					)}
					<label htmlFor="">Username</label>
					<input
						type="text"
						name="username"
						placeholder="username"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<label htmlFor="">Password</label>
					<input
						type="password"
						name="password"
						placeholder="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<span className={style.formLoginSucces}>{msg}</span>
					<button
						onClick={() => {
							Login();
						}}
					>
						Login
					</button>
					<div className={style.signinContainer}>
						<p>no tienes cuenta ?</p>
						<Link to="/Register"> Signup</Link>
					</div>
				</form>
			</div>
		</>
	);
};

export default FormLogin;
