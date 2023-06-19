import { configureStore } from "@reduxjs/toolkit";
import ProdReducer from "./features/ProductSlice.js";
import CardReducer from "./features/CartSlice.js";
import BuyReducer from "./features/BuySlice.js";
import authReducer from "./features/authSlice.js"

export default configureStore({
  reducer: {
    Prod: ProdReducer,
    Buy:BuyReducer,
    Cart:CardReducer,
    auth:authReducer
  },
});
