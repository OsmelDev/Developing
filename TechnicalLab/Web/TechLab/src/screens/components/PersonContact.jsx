import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import style from "../styles/contact.module.css";
import { contacts } from "../../assecs/data.js";

const Personcontact = () => {
	return (
		<div className={style.listContainer}>
			<ul>
				{contacts.map((contac) => (
					<li key={contac.name} className={style.contact}>
						<p>{contac.name}</p>
						<div className={style.linksContact}>
							<a href="#">
								<FaWhatsapp />
								{contac.Whatsapp}
							</a>
							<a href="#">
								<FaInstagram />
								{contac.instagram}
							</a>
							<a href="#">
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
