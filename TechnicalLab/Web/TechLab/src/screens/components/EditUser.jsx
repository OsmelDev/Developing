import React, { useState } from "react";
import { Link } from "react-router-dom";
const EditUser = ({ useAuth }) => {
	const {
		setFristName,
		setLastName,
		setCi,
		setEmail,
		setUsername,
		setPassword,
		msgUpd,
		update,
		dataUser,
		setNewPass,
		changePass,
		setNewPassRepeat,
		errPass,
		setIsEdit,
	} = useAuth();

	return (
		<div className="h-screen pt-16 bg-gray-900">
			<main className="h-3/4 items-center flex flex-col   pt-5  m-0">
				<div className="flex flex-row gap-14">
					<div className="bg-gray-900  m-0 p-0 flex items-center justify-center gap-32 text-white">
						<img src="/vite.svg" alt="" className="h-60 w-60  " />
						<div className="flex flex-col gap-2 ">
							<small className="flex flex-col gap-2">
								Nombre:{" "}
								<input
									type="text"
									placeholder="Nombre ..."
									className="pl-2 py-1 text-sm rounded-md outline-none text-black font-bold"
									onChange={(e) => setFristName(e.target.value)}
								/>
							</small>
							<small className="flex flex-col gap-2">
								Apellido:{" "}
								<input
									type="text"
									placeholder="Primer apellido"
									className="pl-2 py-1 text-sm rounded-md outline-none text-black font-bold"
									onChange={(e) => setLastName(e.target.value)}
								/>
							</small>
							<small className="flex flex-col gap-2">
								Username:{" "}
								<input
									type="text"
									placeholder="Cambiar username"
									className="pl-2 py-1 text-sm rounded-md outline-none text-black font-bold"
									onChange={(e) => setUsername(e.target.value)}
								/>
							</small>
							<small className="flex flex-col gap-2">
								Direccion de correo:{" "}
								<input
									type="text"
									placeholder="cambiar correo"
									className="pl-2 py-1 text-sm rounded-md outline-none text-black font-bold"
									onChange={(e) => setEmail(e.target.value)}
								/>
							</small>
							<small className="flex flex-col gap-2">
								Carnet de Identidad:{" "}
								<input
									type="text"
									placeholder="Carnet de Identidad"
									className="pl-2 py-1 text-sm rounded-md outline-none text-black font-bold"
									onChange={(e) => setCi(e.target.value)}
								/>
							</small>
						</div>
					</div>

					<div className="flex flex-col  justify-around text-white ">
						<p className="text-red-500 font-bold text-xs text-center">
							{errPass}
						</p>
						<small className="flex flex-col gap-2">
							Password:{" "}
							<input
								type="text"
								placeholder="Carnet de Identidad"
								className="pl-2 py-1 text-sm rounded-md outline-none text-black font-bold"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</small>
						<small className="flex flex-col gap-2">
							New password:{" "}
							<input
								type="text"
								placeholder="Carnet de Identidad"
								className="pl-2 py-1 text-sm rounded-md outline-none text-black font-bold"
								onChange={(e) => setNewPass(e.target.value)}
							/>
						</small>
						<small className="flex flex-col gap-2">
							Repeat new password:{" "}
							<input
								type="text"
								placeholder="Carnet de Identidad"
								className="pl-2 py-1 text-sm rounded-md outline-none text-black font-bold"
								onChange={(e) => setNewPassRepeat(e.target.value)}
							/>
						</small>

						<button
							className="border px-8 rounded-md hover:bg-gray-600"
							onClick={() => changePass()}
						>
							change password
						</button>
					</div>
				</div>

				<div>
					<p className="text-white mt-10 text-green-500 font-bold">{msgUpd}</p>
				</div>
			</main>

			<div className="flex gap-30  w-1/2 justify-around items-center w-full text-white">
				<button className="border px-8 rounded-md hover:bg-gray-600">
					{" "}
					<Link onClick={() => setIsEdit(false)} to="/UserProfile">
						volver
					</Link>{" "}
				</button>
				<button
					className="border px-8 rounded-md hover:bg-gray-600"
					onClick={() => {
						update();
						setIsEdit(false);
					}}
				>
					Actualizar
				</button>
			</div>
		</div>
	);
};

export default EditUser;
