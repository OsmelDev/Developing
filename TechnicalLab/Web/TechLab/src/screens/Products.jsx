import React, { useState, useEffect } from "react";
import styles from "./styles/products.module.css";
import { useFetchData } from "../hoocks/useFetch.js";
import BottonsComponent from "./components/BottonsComponent.jsx";
import Stock from "./components/Stock.jsx";
import { prod } from "../assecs/data.js";

const Products = () => {
	const [product, setProduct] = useState("");
	const { data, fetching } = useFetchData();
	console.log(data);
	return (
		<div className={styles.productsMain}>
			<div className={styles.products}>
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
