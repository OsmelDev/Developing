import { FaGithub } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import styles from './Skill.module.css'

const skills = [
		{
			label:'HTML',
			icon: <FaHtml5/>,
			level: 'Basic'
		},
		{
			label:'JavasCrypt',
			icon: <IoLogoJavascript/>,
			level: 'Intermediate'
		},
		{
			label:'CSS',
			icon: <FaCss3/>,
			level: 'Basic'
		},
		{
			label:'React',
			icon: <FaReact/>,
			level: 'Intermediate'
		},
		{
			label:'GIT',
			icon: <FaGithub/>,
			level: 'Basic'
		},
	]

export default function SkillPage(){
	return(
		<section>
			<header className={styles.sectionHeader}>
				<h1>
					Skills
				</h1>
				<small>
					My Tecnical Level
				</small>
			</header>
			<article className={styles.sectionArticle}>
				<h1>
					Frontend Developer
				</h1>
				<div>
					<ul className={styles.listSkills}>
						{skills.map(({label, icon,level})=>(
							<li key={label} className={styles.skill}>
								{icon}
								<p>{label}</p>
								<small>{level}</small>
							</li>
							))}
					</ul>
				</div>
			</article>
		</section>
		)
}