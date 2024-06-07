import React from "react";
import styles from './Skill.module.css'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

export const Skill = () => {
  const skills = [
    {
      id: "1",
      name: "HTML",
      level: "Basic",
    },
    {
      id: "2",
      name: "JavasCrypt",
      level: "Intermediate",
      
    },
    {
      id: "3",
      name: "CSS",
      level: "Basic",
    },
    {
      id: "4",
      name: "React",
      level: "Intermediate",
    },
    {
      id: "5",
      name: "GIT",
      level: "Basic",
    },
  ];

  return (
    <div name="Skill" className={styles.Skill}>
      <div className={styles.topic}>
        <h1>Skills</h1>
        <p>My technical level</p>
      </div>
      <div className={styles.skillsContainer}>
        <h2>Frontend Developer</h2>
        <ul className={styles.skillList}>
          {skills.map((skill ) => (
            
          <li key={skill.id}>
           
            <p><VerifiedRoundedIcon className={styles.Icon}/> 
            {skill.name}</p>
            <span>{skill.level}</span>
          </li>)
        )}</ul>
      </div>
    </div>
  );
};
