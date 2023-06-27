import {createSlice , createAsyncThunk}  from "@reduxjs/toolkit"
import * as api from "../api";
import { toast } from "react-toastify";
// import NotificationBox from "../../components/NotificationBox.js";

export const Product = createAsyncThunk(
    'auth/Product',
   async ()=>{
    try{
      const response = await api.product();
        console.log(response)
        return response.data;
    }catch(e){
      console.log(e);
    }
    }
);
export const addProduct = createAsyncThunk(
    'auth/addProduct',
   async (form)=>{
    try{
      toast.success("Loading...");
      const response = await api.productAdd(form);
        console.log(response)
        toast.success("Product Added ...");
        return response.data;
    }catch(e){
      console.log(e);
    }
    }
);

export const UpdateProductById  = createAsyncThunk(
  'auth/update',
  async (form)=>{
    try{
      const response = await api.productUpdate(form);
        console.log(response)
        toast.success("Product Updated ...");
        return response.data;
    }catch(e){
      console.log(e);
    }
  }
)



export const SingleProduct = createAsyncThunk(
    'prod/SingleId',
   async (id)=>{
    try{
        console.log(id);
        const response = await api.productId(id);
        console.log(response.data)
        return response.data;
    }catch(e){
      console.log(e);
    }
    }
);

export const getBycollection = createAsyncThunk(
  'auth/collection',
  async (data) =>{
    console.log(data)
    try {
      const res = await api.collectdata(data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
)


const persistedState = localStorage.getItem('Product')
  ?  JSON.parse(localStorage.getItem('Product')) : null;
const persistedState1 = localStorage.getItem('SProduct')
  ?  JSON.parse(localStorage.getItem('SProduct')) : null;

const ProductSlice = createSlice({
    name:"Prod",
    initialState:{
      Product1:persistedState,
      SingleId:persistedState1,
      error:"",
      loading:false
    },
    reducers:{
      setdata: (state, action) => {
        state.Product1 = action.payload;
      },
      setsingleId: (state, action) => {
        state.SingleId = action.payload;
      }
    },
    extraReducers:{
      [Product.pending]: (state, action) => {
        state.loading = true;
      },
      [Product.fulfilled]: (state, action) => {
        state.loading = false;
        // localStorage.setItem("Product", JSON.stringify([ ...action.payload ]));
        state.Product1 = action.payload;
      },
      [Product.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
      [SingleProduct.pending]: (state, action) => {
        state.loading = true;
      },
      [SingleProduct.fulfilled]: (state, action) => {
        state.loading = false;
        // localStorage.setItem("SProduct", JSON.stringify(action.payload));
        state.SingleId = action.payload;
      },
      [SingleProduct.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    }
});

export const { setdata ,setsingleId } = ProductSlice.actions;

export default ProductSlice.reducer;
