import React,{useState ,useEffect} from 'react'
import lg from './logo.png'
import ct from './cart.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import cartIcon from "../assets/cart.png";
import { useNavigate } from 'react-router-dom'

const HeaderTop = () => {
    const { Product1 } = useSelector((state) => ({ ...state.Prod }));
  console.log(Product1);
  const navigate = useNavigate();
  let value;
  const [ name,setname] = useState(null)
  useEffect(()=>{
    value = Product1?.map((element) => element.collect);
    console.log(value)
    setname(value);
  },[Product1])
  
  console.log(name)

  const handlestoredata = (item) =>{
    console.log(item);
    navigate("/collection1",{state:{data : item}})
  }

  const handlecart = () =>{
    console.log("hii");
    navigate("/cart");
  }

  let dom = document.querySelector('linkkk');



  return (
    <div className='header'>
      <div className='first'>
        <img className='logoimg' src={lg} alt="" />
        <h2>SHIMONA AGRAWAL</h2>
      </div>
      <div className='second'>
        <ul>
            <li><Link className='linkk' to='/'>HOME</Link></li>
            <li><Link className='linkk' to='/store'>STORE</Link></li>
            <li><Link className='linkkk'>COLLECTION</Link></li>
            <div className="dropdown-menu">
                    <ul>
                    {
                      Array.isArray(name) ?
                      name?.map((item,index)=>{
                        return(
                         <li key={index} onClick={()=>handlestoredata(item)}>{item}</li>
                         )
                        })
                      :<></>
                    }
                        </ul>
                  </div>
            <li><Link className='linkk' to='/about'>ABOUT US</Link></li>
        </ul>
      </div>
      <div onClick={handlecart} color="black" className='third'>
        <img src={cartIcon} alt="" style={{ height: "20px" }} />
    </div>
    </div>
  )
}

export default HeaderTop
