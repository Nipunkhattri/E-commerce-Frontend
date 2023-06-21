import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import lg from './logo.png';
import cartIcon from '../assets/cart.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
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
    console.log("HII")
    navigate('/About');
    setIsOpen(false);
  }
  const handlenavigate3 = ()=>{
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
      <h1 className='absolute  top-5 left-4 text-2xl text-white text font-semibold' >SHIMONA AGARWAL</h1>
      </div>
    </div>
    <div className={isOpen ? "sidebar open" : "sidebar"}>
     <nav className='nav'>
     <ul className="navbar-items">
             <li className="navbar-item">
               <Link to="/" className="navbar-link" >
                 HOME
               </Link>
             </li>
             <li className="navbar-item">
               <Link to="/store" className="navbar-link" >
                 STORE
               </Link>
             </li>
             <li className="navbar-item1">
               <Link className="navbar-link1" >
                 COLLECTION
               </Link>
               <div className="dropdown-menu">
                     {
                      Array.isArray(name) ?
                      name?.map((item,index)=>{
                        console.log(item)
                        return(
                        //  <h2 key={index} onClick={handlestoredata(item)}>{index+1}.{item}</h2>
                        // </div>
                        <li className='list' key={index} onClick={()=>handlestoredata(item)}>{index+1}.{item}</li>
                         )
                        })
                      :<></>
                    }
                  </div>
            </li>
            <li className="navbar-item">
              <Link to="/About" className="navbar-link">
                ABOUT US
              </Link>
            </li>
            <li onClick={handlenavigate3} className="navbar-item">
              <Link  className="navbar-link2" >
                <img src={cartIcon} alt="" style={{ height: '20px'}} />
              </Link>
            </li>
          </ul>
     </nav>
    </div>
    <div className="third" onClick={handleCart}>
      <img src={cartIcon} alt="" style={{ height: '20px' }} />
    </div>
     </div>
  );
};

export default Navbar;
