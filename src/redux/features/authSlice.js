import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
import { toast } from "react-toastify";


export const authlogin = createAsyncThunk(
  'auth/login',
  async ({data,navigate}) =>{
    try {
      const res = await api.Adminlogin(data);
      console.log(res);
      toast.success('Login successfull')
      navigate('/admincollect')
      return res.data;
    } catch (error) {
      toast.error('Invalid Crediantials')
      console.log(error);
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
  extraReducers:{
    [authlogin.pending]: (state, action) => {
      state.loading = true;
    },
    [authlogin.fulfilled]: (state, action) => {
      state.loading = false;
      // localStorage.setItem("item", JSON.stringify({ ...action.payload }));
      state.isAuthenticated = true;
    },
    [authlogin.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
