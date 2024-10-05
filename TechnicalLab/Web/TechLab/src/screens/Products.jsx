import React, { useState, useEffect } from "react";
import { useFetchData } from "../hoocks/useFetch.js";
import BottonsComponent from "./components/BottonsComponent.jsx";
import Stock from "./components/Stock.jsx";
import { prod } from "../assecs/data.js";

const Products = () => {
	const [product, setProduct] = useState("");
	const { data, fetching } = useFetchData();

	return (
		<div className="flex flex-col justify-start items-center min-h-screen bg-gray-900">
			<div className="flex  gap-5  mb-10 mt-20">
				{prod.map((d) => (
					<BottonsComponent
						fetching={fetching}
						name={d.name}
						product={d.value}
						key={d.name}
					/>
				))}
			</div>
			<Stock data={data} />
		</div>
	);
};

export default Products;
