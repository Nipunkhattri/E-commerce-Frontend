import React from 'react'
import suit from './suit.png' 
import Slider from 'react-slick';
// import Carousel1 from './Carousel1.jsx'
const Card1 = () => {
  return (
    <div className='card1c'>
      <div className='imgcard1left'>
        <div className='iggmm'>

        </div>
      </div>
      <div className='card1Right'>
          <div className='cardimgp'>
            <h2>THE GREY COLLECTION</h2>
            <h3 className='mew1'>MOONSTONE</h3>
            <img src={suit} alt="" />
            <h3 className='mew'>MOONSTONE GREY SHIRT</h3>
            <h4>Rs. 18700</h4>
            <button className='cardbtn'>VIEW THIS PRODUCT</button>
          </div>
      </div>
    </div>
  )
}

export default Card1
