import React from "react";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Abaut",
    },
    {
      id: 3,
      link: "Skill",
    },
    {
      id: 6,
      link: "Portofolio",
    },
  ];

  return (
    <div className={styles.navBarContainer}>
      <p>Developer Web Portafolio</p>
      <div>
        <ul className={styles.linksContainer}>
          {links.map((x) => (
            <div key={x.id} >
              <Link className={styles.navLink} to={x.link} smooth>{x.link}</Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
