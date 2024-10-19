import React from "react";
import style from "./Portofolio.module.css";
import { projects } from "../globalData/global";
import CardProject from "./component/CardProject";

export const Portofolio = () => {
  return (
    <div className={style.portofolio} name="Portofolio">
      <h1>Projects</h1>
      <section>
        {projects.map((project, i) => (
          <CardProject
            key={i}
            image={project.image}
            name={project.name}
            description={project.description}
          />
        ))}
      </section>
    </div>
  );
};
