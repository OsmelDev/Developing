import React, { useState, useEffect } from "react";
import styles from "./styles/products.module.css";
import { useFetchData } from "../hoocks/useFetch.js";
import BottonsComponent from "./components/BottonsComponent.jsx";
import Stock from "./components/Stock.jsx";
import { prod } from "../assecs/data.js";

const Products = () => {
	const [product, setProduct] = useState("");
	const { data, fetching } = useFetchData();

	return (
		<div className="flex flex-col justify-start items-center h-full bg-gray-600">
			<div className="flex justify-center items-center gap-5 mt-20 mb-10 h-full">
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
