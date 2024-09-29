import React from "react";

const Logobar = () => {
	return (
		<div className="min-w-0  flex flex-row items-center group ">
			<h1 className="border text-3xl py-0 px-2 text-white group-hover:bg-white group-hover:text-black group-hover:border-black rounded-tl-lg rounded-bl-lg font-bold transition duration-700 ease-in-out">
				Tech-Lab
			</h1>
			<section className="flex flex-col justify-center bg-white group-hover:border-black	group-hover:bg-black group-hover:text-white h-2/3 border border-white px-1 rounded-tr-lg rounded-br-lg text-xs font-medium text-center transition duration-700 ease-in-out">
				<p>donde todo</p>
				<p>es posible</p>
			</section>
		</div>
	);
};

export default Logobar;
