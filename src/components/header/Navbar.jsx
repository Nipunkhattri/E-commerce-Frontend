import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import lg from './logo.png';
import cartIcon from '../assets/cart.png';
import igIcon from '../assets/igIcon.png';
import wttspIcon from '../assets/wttspIcon.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Product } from '../../redux/features/ProductSlice';

const Navbar = ({ cartItems }) => {
    const { Product1 } = useSelector((state) => ({ ...state.Prod }));
    const dispatch =useDispatch();
    useEffect(()=>{
      dispatch(Product())
    },[])
    
    console.log(Product1);
    const navigate = useNavigate();
  let value;
  const [name, setName] = useState([]);

useEffect(() => {
  const uniqueCollectValues = [...new Set(Product1?.map(element => element.collect))];
  setName(uniqueCollectValues);
}, [Product1]);

  console.log(name)

  const handlestoredata = (item) =>{
    console.log(item);
    // navigate("/collection1")
    navigate("/collection1",{state:{data : item}})
    setIsOpen(false)
  }

  const handleCart = () => {
    navigate('/cart');
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handlenavigate = ()=>{
    navigate('/store');
    setIsOpen(false);
  }
  const handlenavigate1 = ()=>{
    navigate('/');
    setIsOpen(false);
  }
  const handlenavigate2 = ()=>{
    navigate('/About');
    setIsOpen(false);
  }
  const handlenavigate3 = ()=>{
    console.log("HII")
    navigate('/cart');
    setIsOpen(false);
  }

  return (
    // <nav className="navbar">
    //   <div className="navbar-container">
    //     {/* <Link to="/" className="navbar-logo">
    //       My Website
    //     </Link> */}
    //     <div className="first">
    //         <img className="logoimg" src={lg} alt="" />
    //         <h2>SHIMONA AGRAWAL</h2>
    //         <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
    //       <span className="navbar-toggle-line"></span>
    //       <span className="navbar-toggle-line"></span>
    //       <span className="navbar-toggle-line"></span>
    //     </div>
    //     </div>
    //     <div className={`second ${isOpen ? 'active' : ''}`}>
    //       <ul className="navbar-items">
    //         <li className="navbar-item">
    //           <Link to="/" className="navbar-link" onClick={toggleNavbar}>
    //             HOME
    //           </Link>
    //         </li>
    //         <li className="navbar-item">
    //           <Link to="/store" className="navbar-link" onClick={toggleNavbar}>
    //             STORE
    //           </Link>
    //         </li>
    //         <li className="navbar-item1">
    //           <Link  className="navbar-link1" onClick={toggleNavbar}>
    //             COLLECTION
    //           </Link>
    //           <div className="dropdown-menu">
    //                 <ul>
    //                 {
    //                   Array.isArray(name) ?
    //                   name?.map((item,index)=>{
    //                     return(
    //                      <h2 key={index} onClick={()=>handlestoredata(item)}>{index+1}.{item}</h2>
    //                      )
    //                     })
    //                   :<></>
    //                 }
    //                     </ul>
    //               </div>
    //         </li>
    //         <li className="navbar-item">
    //           <Link to="/About" className="navbar-link" onClick={toggleNavbar}>
    //             ABOUT US
    //           </Link>
    //         </li>
    //         {/* <li className="navbar-item">
    //           <Link to="/adminlogin" className="navbar-link" onClick={toggleNavbar}>
    //             ADMIN
    //           </Link>
    //         </li> */}
    //         <li className="navbar-item">
    //           <Link to="/cart" className="navbar-link2" onClick={toggleNavbar}>
    //             <img src={cartIcon} alt="" style={{ height: '20px'}} />
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="third" onClick={handleCart}>
    //     <img src={cartIcon} alt="" style={{ height: '20px' }} />
    //   </div>

    //   </div>
    // </nav>
    <div className='allnav'>
    <div className='fixed h-20 w-full z-10 bg-navbar-bg navbar'>
      <button className="toggle-button " onClick={toggleSidebar}>
        {/* <h1>hello</h1> */}
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars}/>
      </button>
      <div className='rg'>
      <img src={lg} className='logoimg' alt="" />
      <h1 className='absolute top-5 left-4 text-2xl text-white text font-semibold logotxt' >SHIMONA AGRAWAL</h1>
      <div  className="navbar-link2" >
                <img onClick={handlenavigate3} src={cartIcon} alt="" style={{ height: '20px'}} />
              </div>
      </div>
    </div>
    <div className={isOpen ? "sidebar open" : "sidebar"}>
     <nav className='nav'>
     <ul className="navbar-items">
             <li onClick={handlenavigate1} className="navbar-item">
               <Link  className="navbar-link" >
                 HOME
               </Link>
             </li>
             <li onClick={handlenavigate} className="navbar-item">
               <Link  className="navbar-link" >
                 STORE
               </Link>
             </li>
             <li className="navbar-item1">
               <li className="navbar-link1" >
                 COLLECTION
               </li>
               <div className="dropdown-menu">
                     {
                      Array.isArray(name) ?
                      name?.map((item,index)=>{
                        console.log(item)
                        return(
                        //  <h2 key={index} onClick={handlestoredata(item)}>{index+1}.{item}</h2>
                        // </div>
                        <li className='list' key={index} onClick={()=>handlestoredata(item)}>{item}</li>
                         )
                        })
                      :<></>
                    }
                  </div>
            </li>
            <li  onClick={handlenavigate2} className="navbar-item">
              <Link className="navbar-link">
                ABOUT US
              </Link>
            </li>
          </ul>
     </nav>
    </div>
    <div className="third"  style={{ position :"relative", right:"0px"
    }} >
     <a href="https://wa.me/9919101106"> <img src={wttspIcon} alt="" style={{ height: '27px' }} /></a>
      <a href="https://www.instagram.com/label_s.a/"><img src={igIcon} alt="" style={{ height: '25px' , margin:"0px 23px 0px 23px" }} /></a>
      <div className='cartq'>
       <h2>{cartItems}</h2>
      </div>
      <img src={cartIcon} alt="" onClick={handleCart} style={{ height: '20px' }} />
    </div>
     </div>
  );
};

export default Navbar;
