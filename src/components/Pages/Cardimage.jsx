import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';
import { SingleProduct } from '../../redux/features/ProductSlice.js';
import { setCartItem } from '../../redux/features/CartSlice.js';
import axios from 'axios';
import "./card.css"
import star from "../assets/stars.png"
import { buyItem } from '../../redux/features/BuySlice.js';

import image from "./Store/assets/Rectangle.png"
import { toast } from 'react-toastify';
const loadScript = (src) =>{
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        document.body.appendChild(script)
        script.onload=()=>{
            resolve(true)
        }
        script.onerror=()=>{
            resolve(false)
        }
    })
}

const Cardimage = ({route}) => {
    const [item , setitem] = useState();
    const [loading , setloading] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = location.state.id
    useEffect(()=>{
        dispatch(SingleProduct(id))
        .then((response) => {
            console.log(response.payload);
            setitem(response.payload);
        })  
        .catch((err) => {
            console.log(err);
            // setError(error);
        });
    },[])

    console.log(item)
    
    const [resdata,setresdata] = useState(null);

    // console.log(item);
    const handleOpenRayzorpay = async (data) =>{
        const res =  await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if(!res){
            alert("err");
            return;
        }

        let options = {
            key:"rzp_test_KjcttchqAwRYIP",
            amount: Number(data.amount) *100,
            currency : data.currency,
            name:"Shooping App",
            description:'XYZ',
            order_id : data.id,
            handler:function(response){
                // console.log(response,"34")
                setresdata(response);
            }
        }
        // console.log(resdata);
        let rzp = new window.Razorpay(options);
        // console.log(rzp);
        rzp.open();
    }

    const data = item?._id;


    if(resdata != null){
        useEffect(()=>{
            const {PaymentId , RazorpayOrderId } = resdata;
            dispatch(updatebuy({data , PaymentId , RazorpayOrderId }));
        },[resdata])
    }

    const handlePayment = async (amount) =>{
        // await dispatch(buyItem(data))

        const _data = {amount:amount}
        axios.post('http://localhost:5000/api/orders',_data)
        .then(res=>{
            // console.log(res.data);
            handleOpenRayzorpay(res.data.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const [index,setindex] = useState(1);
    const [size , setsize] = useState('');
    // console.log(size);

    const name = item?.headline;

    const handleCartItem = async () =>{
        // console.log(id);
        if(size == ''){
            toast.error("Size Not selected");
        }
        else{
            setloading(true);
            console.log("hii")
            await dispatch(setCartItem({id,index,size}))
            .then((res)=>{
                setloading(false);
            });
        }
    }


    const indexhandle = (value) =>{
        setindex(value)
    }

  return (
    <div>
      {/* {location.state.id} */}
      {/* {console.log(item?.Price)}
      <button onClick={()=>handlePayment(item?.Price)} >BuyNow</button> */}
      <div className='card'>
        <div className="left">
            <div className='one'>
                <div className='divcon'>
                <img src={
                    item?
                    item?.images[1]:
                    <div class="loader"></div>
                    } className='mainimg' alt="" onClick={()=>indexhandle(1)}/>
                </div>
                <div className='divcon'>
                <img src={item?.images[2]} className='mainimg' alt="" onClick={()=>indexhandle(2)} />
                </div>
                <div className='divcon'>
                <img src={item?.images[3]} className='mainimg' alt="" onClick={()=>indexhandle(3)}/>
                </div>
                <div className='divcon'>
                <img src={item?.images[4]} className='mainimg' alt="" onClick={()=>indexhandle(4)} />
                </div>
            </div>
            <div className='main'>
                {item?
                    <img src={item?.images[index]} className='mainimg' alt=""/>
                    :
                    <div class="lds-roller1"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                }
            </div>
        </div>
        <div className="right">
            <h1 className='head'>{item?.headline}</h1>
            <img src={star} className='img' alt="" /><br />
            <p className='para'> <ins className='inss'>RS. {item?.Price}</ins></p>
            <p className='para1'>
                {item?.headline1}
            {/* A classic t-shirt never goes out of style. This is our most premium collection of shirt. This plain white shirt is made up of pure cotton and has a premium finish. */}
            </p>
            <select className='styleSelect' name='size'
            value={size}
            onChange={(e)=>setsize(e.target.value)}>
            <option >Select Size</option>
            <option>XL</option>
            <option>M</option>
            <option>L</option>
            </select>
            <br />
            {
                loading?
                <>
                <button disabled onClick={handleCartItem}  className='btn1'>Add to Cart</button>
                <button disabled onClick={handleCartItem}  className='btn'>Buy Now</button>
                </>
                :
                <>
                <button onClick={handleCartItem}  className='btn1'>Add to Cart</button>
                <button onClick={handleCartItem}  className='btn'>Buy Now</button>
                </>
            }
            
            <br />
            <br />
            <ul className='ull'>
                {
                    item?.headline2?.map((ele,index)=>{
                        console.log(ele);
                        // <h3>{ele}</h3>
                        return(
                            <li key={index}>{ele}</li>
                            )
                    })
                }
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cardimage
