import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import lg from './logo.png';
import cartIcon from '../assets/cart.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { Product1 } = useSelector((state) => ({ ...state.Prod }));
    console.log(Product1);
    const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  let value;
  const [ name,setname] = useState(null)
  useEffect(()=>{
    value = Product1?.map((element) => element.collect);
    console.log(value)
    setname(value);
  },[Product1])
  
  console.log(name)
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handlestoredata = (item) =>{
    console.log(item);
    navigate("/collection1",{state:{data : item}})
  }

  const handleCart = () => {
    navigate('/cart');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* <Link to="/" className="navbar-logo">
          My Website
        </Link> */}
        <div className="first">
            <img className="logoimg" src={lg} alt="" />
            <h2>SHIMONA AGRAWAL</h2>
            <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
          <span className="navbar-toggle-line"></span>
          <span className="navbar-toggle-line"></span>
          <span className="navbar-toggle-line"></span>
        </div>
        </div>
        <div className={`second ${isOpen ? 'active' : ''}`}>
          <ul className="navbar-items">
            <li className="navbar-item">
              <Link to="/" className="navbar-link" onClick={toggleNavbar}>
                HOME
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/store" className="navbar-link" onClick={toggleNavbar}>
                STORE
              </Link>
            </li>
            <li className="navbar-item1">
              <Link  className="navbar-link1" onClick={toggleNavbar}>
                COLLECTION
              </Link>
              <div className="dropdown-menu">
                    <ul>
                    {
                      Array.isArray(name) ?
                      name?.map((item,index)=>{
                        return(
                         <li key={index} onClick={()=>handlestoredata(item)}>{index+1}.{item}</li>
                         )
                        })
                      :<></>
                    }
                        </ul>
                  </div>
            </li>
            <li className="navbar-item">
              <Link to="/About" className="navbar-link" onClick={toggleNavbar}>
                ABOUT US
              </Link>
            </li>
            {/* <li className="navbar-item">
              <Link to="/adminlogin" className="navbar-link" onClick={toggleNavbar}>
                ADMIN
              </Link>
            </li> */}
            <li className="navbar-item">
              <Link to="/cart" className="navbar-link2" onClick={toggleNavbar}>
                <img src={cartIcon} alt="" style={{ height: '20px'}} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="third" onClick={handleCart}>
        <img src={cartIcon} alt="" style={{ height: '20px' }} />
      </div>

      </div>
    </nav>
  );
};

export default Navbar;
