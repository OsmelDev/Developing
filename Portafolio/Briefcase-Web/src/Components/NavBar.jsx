import React from "react";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";
import Switch from "./Switch";

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
      <div className={styles.containerMenu}>
        <ul className={styles.linksContainer}>
          {links.map((x) => (
            <div key={x.id}>
              <Link className={styles.navLink} to={x.link} smooth>
                {x.link}
              </Link>
            </div>
          ))}
        </ul>
        <Switch />
      </div>
    </div>
  );
};
