import React from "react";
import style from "./styles/navbar.module.css";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const menu = [
    {
      id: 1,
      name: "Medical Care",
    },
    {
      id: 2,
      name: "Best Seller",
    },
    {
      id: 3,
      name: "Amazon Basics",
    },
    {
      id: 4,
      name: "New Releases",
    },
    {
      id: 5,
      name: "Music",
    },
    {
      id: 6,
      name: "Prime",
    },
    {
      id: 7,
      name: "Customer Services",
    },
    {
      id: 8,
      name: "Today Deals",
    },
    {
      id: 9,
      name: "Whole Foods",
    },
    {
      id: 10,
      name: "Amazon Home",
    },
  ];
  return (
    <div className={style.navbar}>
      <div className={style.burguerBtn}>
        <IoMenu />
        <p>All</p>
      </div>
      <div className={style.navFill}>
        <ul>
          {menu.map((e) => (
            <li key={e.id}>{e.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <button className={style.btnEvent}>
          Celebrate National Small Business Month
        </button>
      </div>
    </div>
  );
};

export default Navbar;
