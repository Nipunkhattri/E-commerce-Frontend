import React from 'react'
import img1 from './image1.png'
import img2 from './imag2.png'
import img3 from './image3.png'
import img4 from './image4.png'

const Card5 = () => {
  return (
    <div className='card5'>
        <h3>EFFORTLESS ELEGANCE</h3>
      <div className='card5-container'>
        <div className='onecard5'>
            <img src={img1} className='onecard5img1'  alt="" />
            <h2 className='card5h2'>BUTTON DOWN DRESS</h2>
            <h6 className='card5h6'>Rs. 187.00</h6>
        </div>
        <div className='twocard5'>
        <img src={img2} className='onecard5img1'  alt="" />
            <h2 className='card5h2'>BUTTON DOWN DRESS</h2>
            <h6 className='card5h6'>Rs. 187.00</h6>
        </div>
        <div className='threecard5'>
        <img src={img3} className='onecard5img1'  alt="" />
            <h2 className='card5h2'>BUTTON DOWN DRESS</h2>
            <h6 className='card5h6'>Rs. 187.00</h6>
        </div>
        <div className='fourcard5'>
        <img src={img4} className='onecard5img1'  alt="" />
            <h2 className='card5h2'>BUTTON DOWN DRESS</h2>
            <h6 className='card5h6'>Rs. 187.00</h6>
        </div>
      </div>
    </div>
  )
}

export default Card5
