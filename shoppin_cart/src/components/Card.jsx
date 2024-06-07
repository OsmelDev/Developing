import React from "react";
import style from "./card.module.css";
import { BsCartCheckFill, BsCartXFill } from "react-icons/bs";

const Card = ({
  d,
  category,
  picture,
  nombre,
  isProductInCart,
  removeFromCart,
  addToCart,
}) => {
  return (
    <div className={style.card}>
      <h3>{category}</h3>
      <img src={picture} alt={nombre} />
      <p>{nombre}</p>
      <div className={style.contentBtn}>
        <button
          style={{ backgroundColor: isProductInCart ? "rgb(233, 122, 32)" : "#807e7ecc" }}
          onClick={() => (isProductInCart ? removeFromCart(d) : addToCart(d))}
          className={style.btn}
        >
          {isProductInCart ? <BsCartXFill /> : <BsCartCheckFill />}
        </button>
      </div>
    </div>
  );
};

export default Card;
