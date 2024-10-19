import React from "react";
import style from "../Portofolio.module.css";

const CardProject = ({ image, name, description }) => {
  return (
    <div className={style.cart}>
      <div className={style.image_box}>
        <img src={image} />
      </div>
      <div className={style.content}>
        <h2>{name}</h2>
        <p>{description}</p>
        <a href="#" onClick={() => alert("detalles")}>
          Ver detalles
        </a>
      </div>
    </div>
  );
};

export default CardProject;
