import React from "react";

const BottonsComponent = ({ fetching, product, name }) => {
	return (
		<button
			onClick={() => {
				fetching(product);
			}}
			className="px-2 rounded-md bg-gray-400 hover:bg-gray-700
			 hover:text-white hover:border transition-colors ease-in-out duration-200"
		>
			{name}
		</button>
	);
};

export default BottonsComponent;
