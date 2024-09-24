import React from "react";
import styles from "./styles/home.module.css";
import Banner from "./components/Banner.jsx";
import About from "./components/About.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
	return (
		<>
			<Banner />
			<About />
			<Contact />
		</>
	);
};

export default Home;
