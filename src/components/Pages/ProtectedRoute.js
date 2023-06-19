// ProtectedRoute.js
import React from "react";
import { Route, useNavigate } from "react-router-dom";

const navigate = useNavigate();
const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        // <Component {...props} />
        <Component />
      ) : (
        navigate('/adminlogin')
      )
    }
  />
);

export default ProtectedRoute;
