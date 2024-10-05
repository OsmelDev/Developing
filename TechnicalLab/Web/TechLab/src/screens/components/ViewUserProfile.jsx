import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/UserProvider.jsx";
const ViewUserProfile = ({ setIsEdit }) => {
	const { dataUser } = useAuth();

	// console.log(dataUser);
	return (
		<main className="h-screen bg-gray-900 flex flex-col items-center gap-20">
			<div className="bg-gray-900  m-0 flex items-center justify-center gap-32 text-white">
				<img src="/vite.svg" alt="" className="h-60 w-60 mt-20 ml-20" />
				<div className="flex flex-col gap-10">
					<div className="flex flex-col gap-4 mt-20">
						<small className="flex justify-between">
							Nombre: <p> {dataUser.name}</p>
						</small>
						<small className="flex justify-between">
							Username: <p>{dataUser.username}</p>{" "}
						</small>
						<small className="flex justify-between">
							Direccion de correo: <p>{dataUser.email}</p>{" "}
						</small>
					</div>

					<div className="flex flex-col gap-2 w-96">
						<small>
							Fecha de creacion: <p>{dataUser.createdAt}</p>{" "}
						</small>

						<small className="flex flex-col items-end">
							Ultima actualizacion: <p>{dataUser.updatedAt}</p>{" "}
						</small>
					</div>
				</div>
			</div>
			<div className="flex gap-30  w-1/2 justify-around text-white">
				<Link to="/">Volver</Link>
				<button onClick={() => setIsEdit(true)}>Editar Datos</button>
			</div>
		</main>
	);
};

export default ViewUserProfile;
