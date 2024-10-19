import React from "react";
import style from "./card.module.css";
import { BsCartCheckFill, BsCartXFill } from "react-icons/bs";

const Card = ({
  localproduct,
  category,
  picture,
  nombre,
  isProductInCart,
  removeFromCart,
  addToCart,
  user,
}) => {
  console.log(user);
  return (
    <div className={style.card}>
      <h3>{category}</h3>
      <img src={picture} alt={nombre.substr(0, 20)} />
      <p>{nombre.substr(0, 20)}</p>
      <div className={style.contentBtn}>
        {!user === undefined ? (
          ""
        ) : (
          <button
            style={{
              backgroundColor: isProductInCart
                ? "rgb(233, 122, 32)"
                : "#807e7ecc",
            }}
            onClick={() =>
              isProductInCart
                ? removeFromCart(localproduct)
                : addToCart(localproduct)
            }
            className={style.btn}
          >
            {isProductInCart ? <BsCartXFill /> : <BsCartCheckFill />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
