import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer.jsx";
import Screen from "./components/Screen.jsx";
import style from "./app.module.css";
import { FilterProvider } from "./context/filterContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";

const App = () => {
  return (
    <div className={style.app}>
      <FilterProvider>
        <CartProvider>
          <Header />
          <Screen />
        </CartProvider>
        <Navbar />
        <Sidebar />
        <Footer />
      </FilterProvider>
    </div>
  );
};

export default App;
