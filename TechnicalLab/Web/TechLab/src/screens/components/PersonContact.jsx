import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { contacts } from "../../assecs/data.js";

const Personcontact = () => {
	return (
		<div className="flex flex-col justify-between ">
			<ul className="flex flex-col gap-8 w-96">
				{contacts.map((contac) => (
					<li
						key={contac.name}
						className="flex justify-between w-full text-gray-500 "
					>
						<p>{contac.name}</p>
						<div className="flex flex-col gap-2 w-2/5">
							<a
								href="#"
								className="flex items-center content-start text-left text-white justify-between w-full "
							>
								<FaWhatsapp />
								{contac.Whatsapp}
							</a>
							<a
								href="#"
								className="flex items-center content-start text-left text-white justify-between w-full "
							>
								<FaInstagram />
								{contac.instagram}
							</a>
							<a
								href="#"
								className="flex items-center content-start text-left text-white justify-between w-full "
							>
								<FaFacebook />
								{contac.facebook}
							</a>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Personcontact;
