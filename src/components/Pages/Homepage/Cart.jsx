import React, { useEffect, useState } from 'react'
import "./cart.css"
import imgg from "../Store/assets/Rectangle.png"
import {useLocation, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faDeleteLeft ,faDesktopAlt , faRemove } from '@fortawesome/free-solid-svg-icons'
import {GetCardItem, deleteById } from "../../../redux/features/CartSlice.js"
const Cart = ({route}) => {
  const location = useLocation();

  const navigate = useNavigate();
  const { CartData } = useSelector((state) => ({ ...state.Cart }));
  // console.log(CartData);
  // useEffect(()[0]
    const [cartdata1,setcartdata1] = useState([]);
  // },[CartData])

  useEffect(()=>{
    setcartdata1(CartData)
  },[CartData])
  const data = location?.state?.data;
  // console.log(data);
  const dispatch = useDispatch();

  useState(()=>{
    dispatch(GetCardItem());
  },[CartData])

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

    // console.log(cartdata1);

  const itemIds = Array.isArray(CartData) && CartData?.map((item) => item.Id);
  const sizes = Array.isArray(CartData) && CartData?.map((item) => item.size);
  const quantities = Array.isArray(cartdata1) && cartdata1?.map((item) => item.Quantity);
  // console.log(itemIds);
    console.log(sizes)
  const handlePayment = () =>{
    navigate("/PayCart",{state:{Items:itemIds,sizes:sizes,quantities:quantities}});
  }


  const handledelete = (id) =>{
    console.log(id)
    dispatch(deleteById({id,navigate}))
    .then((response) => {
      console.log(response);
      dispatch(GetCardItem());
  })  
  .catch((err) => {
      console.log(err);
      // setError(error);
  });
  }
  
  const calculateTotalPrice = () => {
    return Array.isArray(cartdata1) && cartdata1?.reduce((total, item) => {
      // console.log(item.Price);
      return total + item?.Quantity * item?.Price;
    }, 0)
  };

  return (
<div class="cart-container1">
  <div class="slider">
    <h2 className='hd'>My Cart</h2>
    {
      Array.isArray(cartdata1) ?
      cartdata1?.map((ele,index)=>{
      return(
    <div class="card1" key={index}>
      <img src={ele.Image} alt="Item 1"/>
      <div className='all'>
        <div className='one'>
        <h3>{ele.Name}</h3>
        <p>Size: {ele.size}</p>
        <h4>RS. {ele.Price}</h4>
        <p>Color: Red</p>
        </div>
        <div class="quantity-container">
      <button class="decrement" className='btnd' onClick={() => decrement(ele._id,ele.Quantity)}>-</button>
      <input type="text" class="quantity" value={ele.Quantity}  />
      <button class="increment" className='btni' onClick={() => increment(ele._id,ele.Quantity)}>+</button>
      </div>
        <div className='three'>
          {/* {console.log(quantityInput?.value)} */}
          <p>Price : RS. {ele.Price * ele.Quantity}</p>
        </div>
        <FontAwesomeIcon onClick={()=>handledelete(ele._id)} icon={faRemove} />
          {/* <button>Delete</button> */}
      </div>
    </div>
    // <></>
      )
     }) 
     :
     <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    }
    <div className='Checkout'>
    <div className='chk'>
      <h3>ToTal : Rs. {calculateTotalPrice()}</h3>
      <p>Price includes all charges</p>
      <button className='chbtn' onClick={handlePayment}>Checkout</button>
    </div>
    </div>
  </div>
</div>

  )
}

export default Cart
