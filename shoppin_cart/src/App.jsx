import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer.jsx";
import Screen from "./Screen.jsx";
import style from "./app.module.css";
import { CartProvider } from "./context/cartContext.jsx";
import { FilterProvider } from "./context/filterContext.jsx";

const App = () => {
  return (
    <div className={style.app}>
      <CartProvider>
        <FilterProvider>
          <Header />
          <Navbar />
          <Sidebar />
          <Screen />
          <Footer />
        </FilterProvider>
      </CartProvider>
    </div>
  );
};

export default App;
