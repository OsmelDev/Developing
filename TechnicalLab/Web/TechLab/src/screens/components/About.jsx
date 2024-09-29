import React from "react";
import Services from "./components/Services.jsx";

const About = () => {
	return (
		<div className=" bg-black flex flex-col items-center py-5 gap-10 text-white ">
			<h1>Sobre Nosotros</h1>
			<p>
				Somos un equipo que se especializa en brindar servicios tecnicos tanto
				de software como de hardware
			</p>
			<span>Entre nuestros servicios se encuentran:</span>
			<Services />
		</div>
	);
};

export default About;
