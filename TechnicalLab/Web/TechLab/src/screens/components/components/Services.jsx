import React from "react";
import styles from "./styles/service.module.css";

const Services = () => {
	const services = [
		{
			name: "Instalacion y Mantenimiento de software",
			description:
				"Este servicio se enfoca en instalar todos los software basicos para que usted pueda empezar a trabajar en su computadora (laptop o pc de escritorio).Ademas de la instalacion de programas de su eleccion",
		},
		{
			name: "Defectacion, reparacion y/o mantenimiento de hardware",
			description:
				"Este servicio se enfoca en descubrir las causas de problemas en su pc (laptop o pc de escritorio) y una ves encontrados proceder a reparar o ejecutar un mantenimiento completo de su hardware. Ademas de la instalacion de perifericos",
		},
		{
			name: "Venta y ensamblaje de piezas y perifericos",
			description:
				"Servicio orientado a facilitarle la compra e piezas o perifericos que usted requiera o necesite, para eso contamos con una amplia gama de accesorios y la posibilidad de ordenar alguno a traves de Amazon u otra tienda online con las que trabajamos.",
		},
		{
			name: "Tienda Online o Fisica",
			description:
				"Tambien contamos con una tienda online, donde usted puede elegir y comprar la el equipo (laptop o pc de escritorio) que desee, contando con la posibilidad de recojerlo en la tienda o solicitar el envio a su domicilio, ademas de tambien tener la posibilidad de ordenarla tambien por Amazon u otra	tienda con las que trabajamos.",
		},
	];
	return (
		<article className={styles.services}>
			{services.map((service) => (
				<div key={service.name}>
					<h3>{service.name}</h3>
					<p>{service.description}</p>
				</div>
			))}
		</article>
	);
};

export default Services;
