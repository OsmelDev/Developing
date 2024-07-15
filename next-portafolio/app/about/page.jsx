import Image from 'next/image'
import styles from './About.module.css'
import { PiMedalFill } from "react-icons/pi";
import { FaSuitcase } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";

export default function AboutPage(){
	return (
		<div>
			<header className={styles.aboutHeader}>
				<h1>About me</h1>
				<small>My Introduction</small>
			</header>
			<article className={styles.aboutArticle}>
				<Image width='300' height='300' src='next.svg'></Image>
				<section className={styles.section}>
						<div className={styles.sectionInfo}>
							<div className={styles.infoPersonal}>
								<PiMedalFill className={styles.icon}/>
								<h3>Experience</h3>
								<small>1 year</small>
							</div>
							<div className={styles.infoPersonal}>
								<FaSuitcase className={styles.icon}/>
								<h3>Completed</h3>
								<small># Proyects</small>
							</div>
							<div className={styles.infoPersonal}>
								<BiSupport className={styles.icon}/>
								<h3>Support</h3>
								<small>Online 24/7</small>
							</div>
						</div>
						<p>
								Frontend developer, I create web pages with React Js <br/>
								user interface, I have years of experience and many clients<br/>
								are happy with the projects carried out
						</p>
						<button className={styles.button}>
							<a href="/vercel.svg" download className={styles.buttonDownload}>
								Download CV <IoDocumentText className={styles.buttonIcon}/> 
							</a>
						</button>
				</section>
			</article>
		</div>
	)
}