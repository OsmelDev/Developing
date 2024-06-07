import React from "react";
import styles from "./Abaut.module.css";
import webImage from "../assets/webImage.png";
import { PiMedalFill } from "react-icons/pi";
import { FaSuitcase } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";

export const Abaut = () => {
  const caract = [
    {
      name: "Experience",
      cant: "1 year",
      icon: <PiMedalFill className={styles.ulIcons} />,
    },
    {
      name: "Completed",
      cant: "48 Projects",
      icon: <FaSuitcase className={styles.ulIcons} />,
    },
    {
      name: "Suport",
      cant: "Online 24/7",
      icon: <BiSupport className={styles.ulIcons} />,
    },
  ];

  return (
    <div className={styles.About} name="Abaut">
      <div className={styles.headAbout}>
        <h3>About Me</h3>
        <p>My introduction</p>
      </div>

      <div className={styles.aboutInfoContainer}>
        <img src={webImage} className={styles.webImage} />

        <div className={styles.aboutMe}>
          <ul className={styles.cardContainer}>
            {caract.map((x) => (
              <div key={x.name} className={styles.card}>
                {x.icon}
                <b>{x.name}</b>
                <p> {x.cant}</p>
              </div>
            ))}
          </ul>

          <p>
            Frontend developer, I create web pages with React Js user interface,
            I have years of experience and many clients are happy with the
            projects carried out
          </p>
          <button>
            <a href="/vite.svg" download>
              Download CV <IoDocumentText className={styles.docIcon} />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Abaut;
