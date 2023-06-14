import "./App.css";

import { useLocation } from "react-router-dom";
import Footer from "./components/footer";
import FooterMob from "./components/footerMob";
import FooterFoot from "./components/FooterFoot";
import { ToastContainer } from 'react-toastify';

import RoutesFunc from "./components/Pages/Routes";
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Header from "./components/header/Header";
import MainHeader from "./components/header/MainHeader";
// import Cart from "./components/Pages/Homepage/Cart";

function App() {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();


  return (


    <>
    <Header></Header>
    <MainHeader></MainHeader>
    {/* <Cart/> */}
    <ToastContainer/>
      <RoutesFunc />
      {!isScreenSmall ? <Footer></Footer> : <FooterMob></FooterMob>}

      <FooterFoot></FooterFoot>
    </>
  );
}

export default App;
