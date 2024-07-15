import React from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'
import Logo from './Logo.jsx'

const links = [
  {
    label: 'Home',
    route: '/'
  }, {
    label: 'About',
    route: '/about'
  },{
    label: 'Skill',
    route: '/skill'
  }
]

const Navigation = () => {
	return (
		<header className={styles.header}> 
      <Logo />
        <nav className={styles.navigation}> 
          <ul className={styles.list}> 
    	     {
             links.map(({label, route}) => ( 
              <li className={styles.link} key={route}>
                <Link href={route}>{label}</Link> 
      	      </li>
              ))
            }
        </ul>
     	</nav>
    </header>
	)
}

export default Navigation