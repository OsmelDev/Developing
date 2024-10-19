import React from "react";
import styles from "./Skill.module.css";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import { skills } from "../globalData/global";

export const Skill = () => {
  return (
    <div name="Skill" className={styles.skill}>
      <div className={styles.topic}>
        <h1>Skills</h1>
        <p>My technical level</p>
      </div>
      <div className={styles.skillsContainer}>
        <h2>Frontend Developer</h2>
        <ul className={styles.skillList}>
          {skills.map((skill) => (
            <li key={skill.id}>
              <p>
                <VerifiedRoundedIcon className={styles.Icon} />
                {skill.name}
              </p>
              <span>{skill.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
