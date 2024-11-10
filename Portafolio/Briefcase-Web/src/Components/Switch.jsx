import React, { useEffect, useState } from "react";
import style from "./Switch.module.css";

const Switch = () => {
  const [theme, setTheme] = useState("claro");

  const handleChange = (e) => {
    setTheme(e.target.checked ? "oscuro" : "claro");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <section className={style.switch}>
      <label className={style.toggle}>
        <input
          type="checkbox"
          className={style.checkbox_switch}
          onChange={handleChange}
          hidden
        />
        <span className={style.slider}></span>
      </label>
    </section>
  );
};

export default Switch;
