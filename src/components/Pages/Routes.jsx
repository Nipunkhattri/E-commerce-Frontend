import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Backdrop, CircularProgress, Container } from "@material-ui/core";
import Homepage from "./Homepage";
import About from "./About";
// import ProtectedRoute from "./ProtectedRoute";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Store from "./Store";
import Collection from "./Collection";
import ProductDetails from "./ProductDetails";
import Cardimage from "./Cardimage";
import Cart from "./Homepage/Cart";
import PaymentPage from "./Homepage/PaymentPage";
import AdminPage from "./AdminPage";
import AdminOrder from "./AdminOrder";
import Orderdata from "./Orderdata";
import Itemcollect from "./Itemcollect";
import Admincollect from "./Admincollect";
import Updateproduct from "./Updateproduct";
import Email from "./Homepage/Email";
import Homescreen from "./Homepage/Homescreen";
import Aminlogin from "./Aminlogin";
import AboutPage from "./AboutPage";

const RoutesFunc = () => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [location]);
  return (
    <>
      <Routes>
        {/* <Route exact path="/" element={<Homepage />} /> */}
        <Route exact path="/" element={<Homescreen/>} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/collection" element={<Collection />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/product" element={<ProductDetails />} />
        <Route exact path="/card" element={<Cardimage />} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/PayCart" element={<PaymentPage/>} />
        <Route exact path="/admin" element={<AdminPage/>} />
        <Route exact path="/adminorder" element={<AdminOrder/>} />
        <Route exact path="/orderdata" element={<Orderdata/>} />
        <Route exact path="/collection1" element={<Itemcollect/>} />
        <Route exact path="/admincollect" element={<Admincollect />} />
        {/* <Route exact path="/adminlogin" element={<Aminlogin setIsAuthenticated={setIsAuthenticated} />} /> */}
        <Route exact path="/updateproduct" element={<Updateproduct/>} />
        <Route exact path="/email" element={<Email/>} />
        <Route exact path="/adminlogin" element={<Aminlogin setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </>
  );
};
export default RoutesFunc;
