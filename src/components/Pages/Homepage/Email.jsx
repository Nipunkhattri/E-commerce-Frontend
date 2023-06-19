import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import emailjs from 'emailjs-com';
import { useDispatch } from 'react-redux';
import { SingleProduct } from '../../../redux/features/ProductSlice.js';
import success from './success.png'

const Email = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const form = location?.state?.form;
    console.log(form);
    let email ="";
    let message = "";
    useEffect(()=>{
        email = form.email;
        message = `The Order Has been Placed successfully 
        Your OrderId :${form.razorpay_order_id}  and PaymentID :${form.razorpay_payment_id} .. Order will be recieved soon...`;
    },[form])
    // const message = form.razorpay_order_id;

    useEffect(()=>{
        console.log(email);
        if(email!='' && message!=''){
        const templateParams = {
          to_email: email,
          message: message
        };
    
        emailjs.send(
            'service_sjwijhh', // Replace with your service ID
          'template_9xu5ptp', // Replace with your template ID
          templateParams,
          'SGP9wvKtcXAVVTZDQ' // Replace with your user ID (found in your EmailJS account settings)
        )
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        }
    },[])
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
