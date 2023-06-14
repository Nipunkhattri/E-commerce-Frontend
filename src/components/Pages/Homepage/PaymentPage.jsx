import React, { useEffect } from 'react'
import { useState } from 'react';
import "./Payment.css"
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import imgg from "../Store/assets/Rectangle.png"
import { buyItem } from '../../../redux/features/BuySlice';
import axios from 'axios';
import { updatepay } from '../../../redux/features/BuySlice';
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


const PaymentPage = ({route}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { CartData } = useSelector((state) => ({ ...state.Cart }));
    const location = useLocation();
    console.log(location);
    const Items = location.state.Items;
    const sizes = location.state.sizes;
    const quantities = location.state.quantities;
    console.log(Items);
    console.log(sizes);
    console.log(quantities);

    const [formData, setFormData] = useState({
      email:'',
      country: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      pincode: '',
      state: '',
      phoneNumber: '',
      ItemsArray:Items,
      SizeArray:sizes,
      QuantityArray:quantities,
      razorpay_order_id:'',
      razorpay_payment_id:''
    });

    console.log(formData)
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
    const [res,setres] = useState("");
    useEffect(()=>{
      setFormData(prevFormData => ({
        ...prevFormData,
        razorpay_order_id: res?res?.razorpay_order_id:"",
        razorpay_payment_id : res?res?.razorpay_payment_id:""
      }));
    },[res])

    useEffect(() => {
      if (formData.razorpay_order_id !== '' && formData.razorpay_payment_id !== '') {
        console.log(formData);
        console.log('hii');
        dispatch(buyItem(formData)).
        then((response) => {
          console.log(response);
          // dispatch(GetCardItem());
          navigate('/email',{state:{form:formData}})
      })  
      .catch((err) => {
          console.log(err);
          // setError(error);
      });;
      }
    }, [formData]);

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
            handler:async function(response){
                console.log(response,"34");
                setres(response);
                // setrazorpay_order_id(response.razorpay_order_id)
                // setemail(formData.email);
            }
        }
        // console.log(razorpay_order_id);
        // console.log(razorpay_payment_id);
        let rzp = new window.Razorpay(options);
        // console.log(rzp);
        rzp.open();
    }
  
    const handleSubmit = async (price) => {
    //   e.preventDefault();
      console.log(formData);
      if(formData.phoneNumber.length != 10){
        toast.error("Phone number invalid");
        return;
      }
      // await dispatch(buyItem(formData));
      
      const _data = {amount:price}
      console.log(_data);
      axios.post('http://localhost:5000/api/orders',_data)
      .then(res=>{
          console.log(res.data);
          handleOpenRayzorpay(res.data.data)
      })
      .catch(err=>{
          console.log(err)
      })
      // You can perform further actions with the form data, like sending it to the backend
    };

    let price = 0;

    const calculateTotalPrice = () => {
        return Array.isArray(CartData)? CartData?.reduce((total, item) => {
          console.log(item.Price);
          price += item.Quantity * item.Price;
        //   console.log(price);
        //   setprice(total + item.Quantity * item.Price)
          return total + item.Quantity * item.Price;
        }, 0):"";
      };

      console.log(price);

  return (
    <div className='container'>
      <div className='section'>
        <div className='leftp'>
        <h2>SHIMONA AGRAWAL</h2>
        <div className='a'>
            <ul>
                <li>Cart --</li>
                <li>Information --</li>
                <li>Payment </li>
            </ul>
        </div>
        <div  className='aa'>
            <label htmlFor="" className='hhhh'>Contact</label>
            <input type="email"  name="email"  value={formData.email} onChange={handleInputChange}/>
            <div className='ip'>
                <input type="checkbox" id="vehicle1"/>
                <label for="vehicle1"  className='hh'> Email me with news and offers</label><br></br>
            </div>
        </div>

        <div className='ship'>
        <h3 style={
            {
                "margin":"20px 8px",
                "fontSize":"22px"
            }
        }>Shipping Address</h3>
        <form>
      <div className='dvv'>
        <label htmlFor="country">Country:</label>
        <select id="country" name="country" value={formData.country} onChange={handleInputChange}>
          <option value="">Select a country</option>
          <option value="India">India</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>
      </div>
      <div className='dvv' style={
        {
            "display":"flex"
        }
      }>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
      </div>
      </div>
      <div className='dvv'>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} />
      </div>
      <div className='dvv'>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} />
      </div>
      <div className='dvv'>
        <label htmlFor="pincode">Pin Code:</label>
        <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleInputChange} />
      </div>
      <div className='dvv'>
        <label htmlFor="state">State:</label>
        <select id="state" name="state" value={formData.state} onChange={handleInputChange}>
          <option value="">Select a state</option>
          <option value="UttarPradesh">Uttar Pradesh</option>
          <option value="New York">New York</option>
          <option value="Texas">Texas</option>
        </select>
      </div>
      <div className='dvv'>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
      </div>
      <button type="button" className='btnp'  onClick={()=>handleSubmit(price)}>Continue to Payment</button>
    </form>
        </div>
        </div>
        <div className='rightp'>
            <div className='cont'>
                {
                    Array.isArray(CartData) &&
                    CartData?.map((ele,index)=>{
                        return(
                            <>
                            <div className='divpay'>
                                <img src={ele.Image} className='imgpay' alt="Item 1"/>
                                <h3>{ele.Name}</h3>
                                <h3>Rs. {ele.Price}</h3>
                            </div>
                            </>
                        )
                    })
                }
            </div>
            <div className='Checkpay'>
    <div className='Totalpay'>
      <h3>ToTal : Rs. {calculateTotalPrice()}</h3>
      <p>Price includes all charges</p>
      {/* <button className='chbtn'>Checkout</button> */}
    </div>
                    </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
