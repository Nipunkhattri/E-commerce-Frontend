import {createSlice , createAsyncThunk}  from "@reduxjs/toolkit"
import * as api from "../api";
import { toast } from "react-toastify";

export const setCartItem = createAsyncThunk(
    'auth/CartItem',
   async (cartdata)=>{
    console.log(cartdata);
    try{
      toast.success("Loading...")
      const response = await api.CartProd(cartdata);
        console.log(response)
        // navigate("/cart")
        toast.success("Item Added To Cart ...");
        return response.data;
    }catch(e){
      console.log(e);
    }
    }
);

export const GetCardItem = createAsyncThunk(
  'auth/GetCardItem',
  async ()=>{
   try{
     const response = await api.getCartProd();
       console.log(response)
       return response.data;
   }catch(e){
     console.log(e);
   }
   }
);


export const deleteById = createAsyncThunk(
  'auth/deleteItem',
  async ({id,navigate})=>{
   try{
    console.log(id);
     const response = await api.deleteCart(id);
       console.log(response);
       toast.success("Item removed successfully");
       return response.data;
   }catch(e){
     console.log(e);
   }
   }
);

const persistedState = localStorage.getItem('cart')
  ?  JSON.parse(localStorage.getItem('cart')) : null;

const CartSlice = createSlice({
    name:"Cart",
    initialState:{
      CartData:persistedState,
      error:"",
      loading:false
    },
    reducers:{
      setdata: (state, action) => {
        state.CartData = action.payload;
      }
    },
    extraReducers:{
      [GetCardItem.pending]: (state, action) => {
        state.loading = true;
      },
      [GetCardItem.fulfilled]: (state, action) => {
        state.loading = false;
        localStorage.setItem("cart", JSON.stringify({ ...action.payload }));
        state.CartData = action.payload;
      },
      [GetCardItem.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    }
});

export const { setdata } = CartSlice.actions;

export default CartSlice.reducer;