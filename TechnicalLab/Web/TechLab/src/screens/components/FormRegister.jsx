import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/UserProvider.jsx";

const FormRegister = () => {
	const { setUsername, setPassword, setConfirmPass, err, msg, Register } =
		useAuth();

	return (
		<>
			<div
				className="flex flex-col content-center items-center 
			justify-center w-full h-screen bg-gray-900 text-white "
			>
				<form
					className="flex flex-col border border-gray-300 px-8 py-5 w-1/3 mt-4 
					justify-center items-center gap-3 rounded-2xl bg-blend-darken 
					hover:border-violet-400"
					onSubmit={(e) => e.preventDefault()}
				>
					<h2 className="font-bold text-3xl ">Register</h2>

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

					<label className="text-sm flex font-bold ">Username</label>
					<input
						type="text"
						placeholder="username"
						onChange={(e) => setUsername(e.target.value)}
						className="outline-none rounded-sm w-9/12 p-1 text-sm text-gray-900"
					/>
					<label className="text-sm flex font-bold ">Password</label>
					<input
						type="password"
						placeholder="password"
						onChange={(e) => setPassword(e.target.value)}
						className="outline-none rounded-sm w-9/12 p-1 text-sm text-gray-900"
					/>
					<label className="text-sm flex font-bold ">Repeat Password</label>
					<input
						type="password"
						placeholder="repeat password"
						onChange={(e) => setConfirmPass(e.target.value)}
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
							Register();
						}}
						className="border w-24 py-1 rounded-lg 
						hover:bg-gray-400 hover:text-black 
						hover:border-violet-400
						transition-all ease-in-out duration-300"
					>
						Register
					</button>
					<div className="flex justify-between w-full">
						<p className="text-sm ">ya tienes cuenta ?</p>
						<Link
							to="/Login"
							className="text-sm font-bold hover:underline hover:text-blue-900 "
						>
							{" "}
							Signin
						</Link>
					</div>
				</form>
			</div>
		</>
	);
};

export default FormRegister;
