import React, { useContext } from "react";
import style from "./styles/screen.module.css";
import { useResult } from "../hooks/useResult";
import { loadProduct } from "../hooks/fetch";
import { useTranslation } from "react-i18next";
import { CartContext } from "../context/cartContext";
import { Signin } from "./components/Signin.jsx";

const Screen = () => {
  const { t, i18n } = useTranslation("screenTranslation");
  const { getLocalResult } = useResult();
  const { localProducts } = loadProduct();
  const { user, setUser, loginData } = useContext(CartContext);

  let username = loginData.username;
  return (
    <div className={style.screen}>
      <ul className={style.containerProducts}>
        {getLocalResult(localProducts)}
      </ul>

      <div className={style.footerScreen}>
        {!username ? <Signin /> : "hola"}

        <div className={style.goToTopButton}>
          <p>{t("screen.footer.back")}</p>
        </div>
      </div>
    </div>
  );
};

export default Screen;
