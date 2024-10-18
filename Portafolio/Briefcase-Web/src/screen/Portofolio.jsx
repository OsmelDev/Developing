import React from "react";
import style from "./Portofolio.module.css";

const projects = [
  {
    name: "Amazon Clone",
    image: "/AmazonClon.png",
    descripcion:
      "sitio que realize en forma de practica, simulando una tienda online",
  },
  {
    name: "Ecommerce TechLab",
    image: "/Ecommerce.png",
    descripcion:
      "sitio que realize en forma de practica, simulando una tienda online",
  },
  {
    name: "Chat-Io",
    image: "/ChatIo.png",
    descripcion:
      "sitio que realize en forma de practica, simulando una tienda online",
  },
];

export const Portofolio = () => {
  return (
    <div className={style.portofolio} name="Portofolio">
      <h1>Projects</h1>
      <section>
        {projects.map((project, i) => (
          <div className={style.cart} key={i}>
            <div className={style.image_box}>
              <img src={project.image} />
            </div>
            <div className={style.content}>
              <h2>{project.name}</h2>
              <p>{project.descripcion}</p>
              <a href="#" onClick={() => alert("detalles")}>
                Ver detalles
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
