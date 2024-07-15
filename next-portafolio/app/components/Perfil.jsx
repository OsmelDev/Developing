'use client'
import React from 'react'
import Image from 'next/image'
import styles from './Perfil.module.css'
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { LiaTelegram } from "react-icons/lia";

const Perfil = () => {
	return (
		<article className={styles.article}>
			<div className={styles.avatar}></div>
				<div className={styles.description}>
					<h1>Osmel Prades</h1>
					<h2>Web Developer</h2>
					<p>I'm creative developer based in La Havana, <br />
						 and I'm very passionate and dedicated to my work</p>
				 	<button className={styles.button}> Say Hello <LiaTelegram className={styles.iconButton}/></button>
				</div>
			<div className={styles.contact}>
				<FaInstagramSquare className={styles.iconFeed} />
        <FaFacebookSquare className={styles.iconFeed} />
        <FaGithubSquare className={styles.iconFeed} />
			</div>
		</article>
	)
}

export default Perfil