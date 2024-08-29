import React from "react";

const BottonsComponent = ({ fetching, product, name }) => {
	return (
		<button
			onClick={() => {
				fetching(product);
			}}
		>
			{name}
		</button>
	);
};

export default BottonsComponent;
