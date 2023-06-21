import React, { useEffect, useState } from 'react'
import "./Order.css"
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { singleIdProduct } from '../../redux/features/BuySlice';
import { useNavigate } from 'react-router-dom';

const Orderdata = () => {
  const navigate = useNavigate();
    const location = useLocation();
    const id = location?.state?.id;
    const { isAuthenticated } = useSelector((state)=> ({...state.auth}));
    useEffect(()=>{
      if(isAuthenticated == false){
        navigate('/adminlogin');
      }
    })
    const dispatch  = useDispatch();
    const [data,setdata] = useState([]);
    console.log(id);

    const [pay,setpay] = useState([]);
    useEffect(()=>{
      dispatch(singleIdProduct(id))
      .then((response) => {
        console.log(response.payload);
        setdata(response.payload[0]);
    })
    .catch((err) => {
        console.log(err);
        // setError(error);
    });
    },[])

    useEffect(()=>{
      setpay(data?.ItemsData)
    },[data])

    console.log(pay)
    const { BuyData } = useSelector((state) => ({ ...state.Buy }));
    console.log(BuyData)
  return (
    <div className='dataorder'>
      {
        Array.isArray(pay) ?
        pay?.map((ele,index)=>{
          return(
            <div className='datacontainer' key={index}>
        <div className='dataimage'>
          <img src={ele.Image} alt="" />
          <h2 className='headq'> Quantity : {data.QuantityData[index]}</h2>
        </div>
        <div className='datamid'>
          <h3>PRODUCT ID : {data.razorpay_order_id}</h3>
          <h3>ITEMA NAME - {ele.Name}</h3>
          <h3>ITEMA SIZE - {data.SizesData[index]}</h3>
          <h3>ADDRESS - {data.Address}</h3>
          <h3>CITY - {data.city}</h3>
          <h3>COUNTRY - {data.country}</h3>
          <h3>STATE - {data.state}</h3>
          <h3>PIN CODE - {data.pincode}</h3>
        </div>
        <div className='dataend'>
        <h3>FIRST NAME - {data.firstname}</h3>
          <h3>LAST NAME - {data.lastname}</h3>
          <h3>PHONE NO. - {data.Phoneno}</h3>
          <h3>EMAIL - {data.email}</h3>
          <h3>CITY - {data.city}</h3>
          <h3>PURCHASED - {data.Purchased}</h3>
          <h3>RAZORPAY PAYMENT ID - {data.razorpay_payment_id}</h3>
          <h3>RAZORPAY ORDER ID  - {data.razorpay_order_id}</h3>
        </div>
      </div>
          )
        })
        :<></>
      }
    </div>
  )
}

export default Orderdata
