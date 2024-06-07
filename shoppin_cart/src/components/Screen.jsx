import React from "react";
import style from "./styles/screen.module.css";
import { useResult } from "../hooks/useResult";
import { loadProduct } from "../hooks/fetch";

const Screen = () => {
  const { getLocalResult } = useResult();
  const { localProducts } = loadProduct();
  return (
    <div className={style.screen}>
      <ul className={style.containerProducts}>
        {getLocalResult(localProducts)}
      </ul>
    </div>
  );
};

export default Screen;
