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

export const sendemail = createAsyncThunk(
  'auth/email',
  async(form)=>{
    try {
      const res = await api.sendmail(form);
      console.log(res);
      // toast.success('mail send successfull')
      return res.data;
    } catch (error) {
      toast.error('Wrong email');
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
      localStorage.setItem("auth", JSON.stringify(state.isAuthenticated ));
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
