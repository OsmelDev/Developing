import React, { useRef, useState } from "react";
import style from "./sidebar.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useHandleScroll } from "./hooks/useHandleScroll";
import { data } from "./assets/dataSidebat.json";

const Sidebar = () => {
  const { handleScroll, containerRef, ITEM_WIDTH } = useHandleScroll();

  setTimeout(() => {
    handleScroll(ITEM_WIDTH);
  }, 4000);

  return (
    <div className={style.sidebar}>
      <div
        ref={containerRef}
        style={{
          height: "100%",
          width: "100vw",
          overflow: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        <div className={style.content_box}>
          {data.map((d) => (
            <div
              key={d.name}
              className={style.card}
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.2),rgb(255,255,255)),url(${d.image})`,
              }}
            >
              <p>{d.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={style.action_btns}>
        <button
          className={style.leftbtn}
          onClick={() => handleScroll(-ITEM_WIDTH)}
        >
          {" "}
          <FaAngleLeft />
        </button>
        <button
          className={style.rightbtn}
          onClick={() => handleScroll(ITEM_WIDTH)}
        >
          {" "}
          <FaAngleRight />{" "}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
