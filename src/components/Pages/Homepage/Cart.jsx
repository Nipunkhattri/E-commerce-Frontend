import React, { useEffect, useState } from 'react'
import "./cart.css"
import imgg from "../Store/assets/Rectangle.png"
import {useLocation, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faDeleteLeft ,faDesktopAlt , faRemove } from '@fortawesome/free-solid-svg-icons'
import {GetCardItem, deleteById } from "../../../redux/features/CartSlice.js"
import { toast } from 'react-toastify';
import carty from './cartempty.png'
const Cart = ({route}) => {
  const location = useLocation();
  const [loading , setloading] = useState(false);
  const navigate = useNavigate();
  // const { CartData } = useSelector((state) => ({ ...state.Cart }));
  // console.log(CartData);
  const [res,setres] = useState("");
  let CartData = null
  useEffect(()=>{
    CartData = JSON.parse(localStorage.getItem('myArray'));
  },[res])
  // console.log(CartData);
  // useEffect(()[0]
    const [cartdata1,setcartdata1] = useState([]);
  // },[CartData])
  const lenght = cartdata1?.length;
  console.log(lenght)
  useEffect(()=>{
    setcartdata1(CartData)
  },[CartData])


  const data = location?.state?.data;
  // console.log(data);
  const dispatch = useDispatch();

  // useState(()=>{
  //   dispatch(GetCardItem());
  // },[CartData])

  // if(data != null){
  //   const doc = document.querySelector(".cart-container1");
  //     doc.style.display = "block"
  //   // }
  //   // else{
  //   //   doc.style.display = "none"
  //   // 
  // }
  const quantityInput = document.querySelector('.quantity');
  const increment = (Id,elequantity) =>{
    // console.log(elequantity);
    let quantity = elequantity;
    // console.log(elequantity);
    quantity = elequantity + 1;
    // console.log(quantity);
    quantityInput.value = quantity;
    handleQuantityChange(Id,quantity)
  }

  const decrement = (Id,elequantity) =>{
    // let quantity = Number(quantityInput.value);
    // console.log(quantity);
    let quantity = elequantity;
    if(quantity > 1) {
      quantity = elequantity - 1;
    }
    quantityInput.value = quantity;
    handleQuantityChange(Id,quantity)
  }

  // const [quantity ,setquantity] = useState()

    const handleQuantityChange = (Id,quantity) => {
      let newQuantity = quantity;
      // console.log(newQuantity);
      onQuantityChange(Id, newQuantity);
    }

    const onQuantityChange = (Id, newQuantity) => {
      const updatedItems = cartdata1.map((item) => {
        if (item._id === Id) {
          return { ...item, Quantity: newQuantity };
        }
        return item;
      });
      setcartdata1(updatedItems);
    };

    let value = 0;
  const calculateTotalPrice = () => {
    return Array.isArray(cartdata1) && cartdata1?.reduce((total, item) => {
      // setTotal(total + item?.Quantity * item?.Price);
      console.log(item?.Quantity * item?.Price);
      value = value + (item?.Quantity * item?.Price);
      return total + item?.Quantity * item?.Price;
    }, 0)
  };
  // calculateTotalPrice();
  console.log(value);
    // console.log(cartdata1);

  const itemIds = Array.isArray(cartdata1) && cartdata1?.map((item) => item.Id);
  const sizes = Array.isArray(cartdata1) && cartdata1?.map((item) => item.size);
  const quantities = Array.isArray(cartdata1) && cartdata1?.map((item) => item.Quantity);
  console.log(itemIds);
    console.log(sizes)
    console.log(quantities)
  const handlePayment = () =>{
    console.log(value)
    if(value > 0){
      navigate("/PayCart",{state:{Items:itemIds,sizes:sizes,quantities:quantities,value}})
    }
  }

  const handledelete = (id) =>{
    console.log(id)
    const updatedCartItems = cartdata1?.filter(item =>
    // console.log(item)
    item._id !== id
     );
     console.log(updatedCartItems)
    setcartdata1(updatedCartItems);
    // Update localStorage with updated cart items
    localStorage.setItem('myArray', JSON.stringify(updatedCartItems));
    navigate('/cart')
  }
  
  // const [total,setTotal] = useState(null)

  console.log(CartData);
  console.log(value);

  return (
<div class="cart-container1">
  {
    (lenght != 0)?
  <div class="slider">
    <h2 className='hd'>CART</h2>
    {
      Array.isArray(cartdata1) ?
      cartdata1?.map((ele,index)=>{
      return(
    <div class="card1" key={index}>
      <div className='all'>
        <div className='one1'>
          <div className='divcardd'>
            <div >
      <img src={ele.Image} alt="Item 1" />
            </div>
          <div className='one2'>
            <h3>{ele.Name}</h3>
            <p>Size: {ele.size}</p>
            <h4>	&#8377;  {ele.Price}</h4>
          </div>
          </div>
        </div>
        <div class="quantity-container">
      <button class="decrement" className='btnd' onClick={() => decrement(ele._id,ele.Quantity)}>-</button>
      <input type="text" class="quantity" value={ele.Quantity}  />
      <button class="increment" className='btni' onClick={() => increment(ele._id,ele.Quantity)}>+</button>
      </div>
        <div className='three'>
          {/* {console.log(quantityInput?.value)} */}
          <p>Price : 	&#8377;  {ele.Price * ele.Quantity}</p>
        </div>
          {/* <button>Delete</button> */}
      </div>
        <FontAwesomeIcon onClick={()=>handledelete(ele._id)} className='cross' icon={faRemove} />
    </div>
    // <></>
      )
     }) 
     :
     <></>
    //  <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    }
    <div className='Checkout'>
    <div className='chk'>
      <h3>ToTal : 	&#8377;  {calculateTotalPrice()}</h3>
      <p>Price includes all charges</p>
        <button className='chbtn' onClick={handlePayment}>Checkout</button>
    </div>
    </div>
  </div>
  :
  <>
  <div className='items'>
    <img className='cartimg' src={carty} alt="" />
    <h3 className='textcart'>Your Cart Is Empty</h3>
    <button className='rtbtn'>Return To Shop</button>
  </div>
  </>
  }
</div>
  )
}

export default Cart
