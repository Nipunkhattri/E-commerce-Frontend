import "./App.css";

import { useLocation } from "react-router-dom";
import Footer from "./components/footer";
import FooterMob from "./components/footerMob";
import FooterFoot from "./components/FooterFoot";
import { ToastContainer } from "react-toastify";
import React, { useState, useEffect } from "react";
import RoutesFunc from "./components/Pages/Routes";
import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Header from "./components/header/Header";
import MainHeader from "./components/header/MainHeader";
import HeaderTop from "./components/header/HeaderTop";
import Navbar from "./components/header/Navbar";
// import Cart from "./components/Pages/Homepage/Cart";




function App() {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const [cartItems, setCartItems] = useState(0);

  const storedCartItems = JSON.parse(localStorage.getItem("myArray"));
  useEffect(() => {
    if (storedCartItems) {
      setCartItems(storedCartItems?.length);
    }
  }, [storedCartItems]);

  return (
    <>
      <Header></Header>
      {/* <HeaderTop/> */}
      <Navbar cartItems={cartItems} />
      {/* <MainHeader></MainHeader> */}
      {/* <Cart/> */}
      <ToastContainer
        
      />
      <RoutesFunc />
      {!isScreenSmall ? <Footer></Footer> : <FooterMob></FooterMob>}

      <FooterFoot></FooterFoot>
    </>
  );
}

export default App;
