import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter scrollRestoration="manual">
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
);
