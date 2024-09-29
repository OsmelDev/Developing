import React from "react";
import style from "./styles/contact.module.css";
import { contacts } from "../assecs/data.js";
import Personcontact from "./components/PersonContact.jsx";

const Contact = () => {
	return (
		<div className="bg-gray-900 flex flex-col items-center gap-10 text-white py-16 h-screen">
			<div className="flex flex-col items-center gap-3">
				<h1 className="text-3xl">Contact</h1>
				<span className="text-xl">Puede contactarnos a traves de:</span>
			</div>
			<Personcontact />
		</div>
	);
};

export default Contact;
