import React from "react";
import { servi } from "../../../assecs/data.js";

const Services = () => {
	return (
		<article className="flex flex-col text-center w-2/4 gap-8 px-4">
			{servi.map((service) => (
				<div key={service.name} className="flex flex-col gap-3">
					<h3 className="font-bold uppercase underline">{service.name}</h3>
					<p className="text-sm">{service.description}</p>
				</div>
			))}
		</article>
	);
};

export default Services;
