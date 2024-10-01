import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/UserProvider.jsx";

const FormLogin = () => {
	const navigation = useNavigate();
	const { setUsername, setPassword, msg, err, Login } = useAuth();

	return (
		<>
			<div
				className="flex flex-col content-center items-center 
			justify-center w-full h-screen bg-gray-900 text-white"
			>
				<form
					className="flex flex-col border border-gray-300 p-12 w-1/3 
					justify-center items-center gap-4 rounded-2xl bg-blend-darken"
					onSubmit={(e) => e.preventDefault()}
				>
					<h2 className="font-bold text-3xl ">LOGIN</h2>
					{err.length > 0 ? (
						<span
							className="flex justify-center items-center 
						font-semibold p-1 text-sm my-0 mx-auto text-white 
						bg-red-700 w-full uppercase rounded-lg"
						>
							{err}
						</span>
					) : (
						<span className="w-full  h-7"></span>
					)}
					<label htmlFor="" className="text-sm flex font-bold ">
						Username
					</label>
					<input
						type="text"
						name="username"
						placeholder="username"
						onChange={(e) => setUsername(e.target.value)}
						className="outline-none rounded-sm w-9/12 p-1 text-sm text-gray-900"
					/>
					<label htmlFor="" className="text-sm flex font-bold text-white">
						Password
					</label>
					<input
						type="password"
						name="password"
						placeholder="password"
						onChange={(e) => setPassword(e.target.value)}
						className="outline-none rounded-sm w-9/12 p-1 text-sm text-gray-900"
					/>
					<span
						className=" w-full h-7 text-green-400 flex justify-center
					text-sm items-center font-bold"
					>
						{msg}
					</span>
					<button
						onClick={() => {
							Login();
						}}
						className="border w-24 py-1 rounded-lg 
						hover:bg-gray-400 hover:text-black 
						transition-all ease-in-out duration-300"
					>
						Login
					</button>
					<div className="flex justify-between w-full">
						<p className="text-sm ">no tienes cuenta ?</p>
						<Link
							to="/Register"
							className="text-sm font-bold hover:underline hover:text-blue-900 "
						>
							{" "}
							Signup
						</Link>
					</div>
				</form>
			</div>
		</>
	);
};

export default FormLogin;
