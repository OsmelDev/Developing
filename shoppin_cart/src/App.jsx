import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer.jsx";
import Screen from "./components/Screen.jsx";
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
