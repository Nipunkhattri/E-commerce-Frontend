import React from 'react'
import img1 from './image1.webp'
import img2 from './imag2.webp'
import img3 from './image3.webp'
import img4 from './image4.webp'

const Card5 = () => {
  return (
    <div className='card5'>
        <h3>MOST LOVED</h3>
      <div className='card5-container'>
        <div className='onecard5'>
            <img src={img1} className='onecard5img1'  alt="" />
            <h2 className='card5h2'>Pleated Cascade - SHIRT DRESS</h2>
            <h6 className='card5h6'>	&#8377;  {(24500).toLocaleString("EN-IN")}</h6>
        </div>
        <div className='twocard5'>
        <img src={img2} className='onecard5img1'  alt="" />
            <h2 className='card5h2'>The Boxed Chic- SHIRT DRESS</h2>
            <h6 className='card5h6'>	&#8377;  {(22500).toLocaleString("EN-IN")}</h6>
        </div>
        <div className='threecard5'>
        <img src={img3} className='onecard5img1'  alt="" />
            <h2 className='card5h2'>Twist & Tie - DRESS</h2>
            <br />
            <h6 className='card5h6'>	&#8377;  {(22999).toLocaleString("EN-IN")}</h6>
        </div>
        <div className='fourcard5'>
        <img src={img4} className='onecard5img1'  alt="" />
            <h2 className='card5h2'>The Floating Grace- SHIRT DRESS</h2>
            <h6 className='card5h6'>	&#8377;  {(25999).toLocaleString("EN-IN")}</h6>
        </div>
      </div>
    </div>
  )
}

export default Card5
