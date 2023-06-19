import {createSlice , createAsyncThunk}  from "@reduxjs/toolkit"
import * as api from "../api";
import { toast } from "react-toastify";

export const buyItem = createAsyncThunk(
    'auth/buy',
    async (formdata)=>{
    try{
      // toast.success("loading...");
        console.log(formdata);
      const response = await api.buyItemP(formdata);
        console.log(response)
        toast.success("Order Placed...");
        // navigate('/adminorder')
        return response.data;
    }catch(e){
      console.log(e);
    }
    }
);



export const GetBuyProduct = createAsyncThunk(
    'auth/buyItem',
   async ()=>{
    try{
      const response = await api.Buyproduct();
        console.log(response)
        return response.data;
    }catch(e){
      console.log(e);
    }
    }
);

export const updatepay = createAsyncThunk(
  'auth/updatebuy',
  async (response) =>{
    console.log(response)
    try {
      const res = await api.updateBuy(response);
    } catch (error) {
      
    }
  }
)

export const deleteitem = createAsyncThunk(
  'auth/delete',
  async(id) =>{
    console.log(id);
    try {
      const res = await api.deleteproduct(id);
      console.log(res);
      toast.success('Deleted successfully')
      // toast.success('Wait for a while...')
      return res.data;
    } catch (error) {
      console.log(error);      
    }
  }
)

export const singleIdProduct = createAsyncThunk(
  'auth/Singleproduct',
  async (id) =>{
    console.log(id);
    try {
      const res = await api.SingleproductId(id);
      console.log(res)
        return res.data;
    } catch (error) {
      console.log(error);
    }
  }
)

// export const getdataarray = createAsyncThunk(
//   async (pay) =>{
//     try {
//       const res = await api.cartarray(pay);
//       console.log(res)
//         return res.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// )



const persistedState = localStorage.getItem('item')
  ?  JSON.parse(localStorage.getItem('item')) : null;

const BuySlice = createSlice({
    name:"Buy",
    initialState:{
      BuyData:persistedState,
      error:"",
      loading:false
    },
    reducers:{
      setdata: (state, action) => {
        state.Product1 = action.payload;
      }
    },
    extraReducers:{
      [GetBuyProduct.pending]: (state, action) => {
        state.loading = true;
      },
      [GetBuyProduct.fulfilled]: (state, action) => {
        state.loading = false;
        localStorage.setItem("item", JSON.stringify({ ...action.payload }));
        state.BuyData = action.payload;
      },
      [GetBuyProduct.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    }
});

export const { setdata } = BuySlice.actions;

export default BuySlice.reducer;