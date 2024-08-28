import React, { useState, useEffect } from "react";
import styles from "./styles/products.module.css";
import { useFetchData } from "../hoocks/useFetch.js";
import BottonsComponent from "./components/BottonsComponent.jsx";
import Stock from "./components/Stock.jsx";

const Products = () => {
	const [product, setProduct] = useState("");
	const { data, fetching } = useFetchData();
	const prod = [
		{
			name: "All",
			value: "products",
		},
		{
			name: "Laptops",
			value: "laptops",
		},
		{
			name: "Pc-Escritorio",
			value: "pcs",
		},
		{
			name: "Motherboard",
			value: "motherboard",
		},
		{
			name: "Grafics Cards",
			value: "grafics",
		},
		{
			name: "Hdd Disk",
			value: "hdd",
		},
		{
			name: "Monitores",
			value: "monitores",
		},
	];
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
