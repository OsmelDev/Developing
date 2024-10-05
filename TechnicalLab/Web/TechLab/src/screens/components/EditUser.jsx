import React from "react";
import { Link } from "react-router-dom";
const EditUser = ({ useAuth }) => {
	const {
		setFristName,
		setLastName,
		setCi,
		setEmail,
		setUsername,
		msgUpd,
		update,
		dataUser,
	} = useAuth();

	const id = dataUser._id;
	console.log(id);
	return (
		<div className="h-screen pt-16 bg-gray-900">
			<main className="h-3/4 items-center flex flex-col   pt-5  m-0">
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

				<div>
					<p className="text-white mt-10 text-green-500 font-bold">{msgUpd}</p>
				</div>
			</main>

			<div className="flex gap-30  w-1/2 justify-around items-center w-full text-white">
				<button>
					{" "}
					<Link to="/UserProfile">volver</Link>{" "}
				</button>
				<button onClick={() => update()}>Actualizar</button>
			</div>
		</div>
	);
};

export default EditUser;
