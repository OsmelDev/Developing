import React from "react";
import style from "./styles/contact.module.css";
import { contacts } from "../assecs/data.js";
import Personcontact from "./components/PersonContact.jsx";

const Contact = () => {
	return (
		<div className={style.containerContact}>
			<div className={style.headerTitle}>
				<h1>Contact</h1>
				<span>Puede contactarnos a traves de:</span>
			</div>
			<Personcontact />
		</div>
	);
};

export default Contact;
