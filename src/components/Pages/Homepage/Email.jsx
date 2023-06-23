import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import emailjs from 'emailjs-com';
import { useDispatch } from 'react-redux';
import { SingleProduct } from '../../../redux/features/ProductSlice.js';
import success from './success.png'
import { sendemail } from '../../../redux/features/authSlice.js';

const Email = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const form = location?.state?.form;
    console.log(form);
    useEffect(() => {
      const sendEmail = async () => {
        if(form.email !== ''){
          console.log(form.email);
          dispatch(sendemail(form))
        } 
      }
  
      sendEmail();
    }, [form.email, form.razorpay_order_id, form.razorpay_payment_id]);
  return (
    <div className='emaill'>
      <img src={success} className='height-order' alt="" />
      <h3>Order Success</h3>
      <p>Your order has been placed and will be delieverd soon..Thanks for placing the order</p>
      <p>Your OrderId : {form.razorpay_order_id}</p>
      <p>Your PaymentId : {form.razorpay_payment_id}</p>
    </div>
  )
}

export default Email
