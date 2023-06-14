import React, { useEffect, useState } from 'react'
import "./OrderAdmin.css"
import { useDispatch } from 'react-redux'
import { GetBuyProduct, buyItem } from '../../redux/features/BuySlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AdminOrder = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { BuyData } = useSelector((state) => ({ ...state.Buy }));
    console.log(BuyData);

    useEffect(()=>{
        dispatch(GetBuyProduct());
    },[])

    const handleLink = (id) =>{
        navigate("/orderdata",{state:{id:id}})
    }

  return (
    <div className='order1'>
      <div className='containorder'>
                    <table className='orderr'>
            <tr className='trr'>
                <th className='thh'>razorpay_order_id</th>
                <th className='thh'>razorpay_payment_id</th>
                <th className='thh'>email</th>
                <th className='thh'>Phoneno</th>
                <th className='thh'></th>
            </tr>
            {
             Array.isArray(BuyData) ?   
            BuyData?.map((ele,index)=>{
                return(
            <tr key={index}>
                <th>{ele.razorpay_order_id}</th>
                <th>{ele.razorpay_payment_id}</th>
                <th>{ele.email}</th>
                <th>{ele.Phoneno}</th>
                <th><h3 className='ul' onClick={() =>handleLink(ele.razorpay_order_id)}>Show Details</h3></th>
            </tr>
                    )
                })
            :<></>
            }
        </table>
      </div>
    </div>
  )
}

export default AdminOrder
