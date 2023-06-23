import axios from "axios"

const Api = axios.create({
    // baseURL:"http://localhost:5000/"
    baseURL:"https://cautious-leggings-fish.cyclic.app/"
    // baseURL:"https://backend-y1ti.onrender.com/"
})
//
export const product = () => Api.get("/api/fetchProduct");
export const productAdd = (form) => Api.post("/api/addProduct",form);
export const productId = (id) => Api.get(`/api/GetProductId/${id}`);
export const buyItemP = (formdata) => Api.post("/api/Paycart",formdata);
export const Buyproduct = () => Api.get("/api/GetBuyId");
export const CartProd = (cartdata) => Api.post('/api/AddCart',cartdata);
export const getCartProd = () => Api.get("/api/GetCart");
export const updateBuy = (response) => Api.get("/api/UpdateBuyId",response);
export const SingleproductId = (id) => Api.get(`/api/SingleProductId/${id}`);
export const deleteCart = (id) => Api.post(`/api/deleteproduct/${id}`);
export const collectdata = (data) => Api.post("/api/collectName",{name : data});
export const deleteproduct = (id) => Api.post("/api/deleteproductid",{_id : id});
export const productUpdate = (form) => Api.post("/api/productUpdate",form);
export const Adminlogin = (data) => Api.post('/api/loginnow',data);
export const sendmail = (form) => Api.post('/api/send',form);