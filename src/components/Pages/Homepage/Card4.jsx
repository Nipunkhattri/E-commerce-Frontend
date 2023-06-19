import React from 'react'
import img1 from './pseudo.png'
import img2 from './pseudo2.png'
import img3 from './pseudo3.png'
import img4 from './pseudo4.png'
import img5 from './pseudo5.png'
import img6 from './pseudo6.png'

const Card4 = () => {
  return (
    <div className='card4'>
      <h3>OUR COLLECTION</h3>
      <div className='card4card'>
        <div className='upcard4'>
          <div className='onecard4'>
            <h2 className='h2card4'>KINDRED SPIRITS</h2>
            <button className='btn-card4'>View Collection</button>
            {/* <img src={img1} className='onecard4img' alt="" /> */}
          </div>
          <div className='twocard4'>
          <h2 className='h2card4'>KINDRED SPIRITS</h2>
            <button className='btn-card4'>View Collection</button>
            {/* <img src={img2} className='onecard4img' alt="" /> */}
          </div>
          <div className='threecard4'>
          <h2 className='h2card4'>KINDRED SPIRITS</h2>
            <button className='btn-card4'>View Collection</button>
            {/* <img src={img3} className='onecard4img' alt="" /> */}
          </div>
        </div>
        <div className='downcard4'>
        <div className='fourcard4'>
            <h2 className='h2card4'>KINDRED SPIRITS</h2>
            <button className='btn-card4'>View Collection</button>
            {/* <img src={img1} className='onecard4img' alt="" /> */}
          </div>
          <div className='fivecard4'>
          <h2 className='h2card4'>KINDRED SPIRITS</h2>
            <button className='btn-card4'>View Collection</button>
            {/* <img src={img2} className='onecard4img' alt="" /> */}
          </div>
          <div className='sixcard4'>
          <h2 className='h2card4'>KINDRED SPIRITS</h2>
            <button className='btn-card4'>View Collection</button>
            {/* <img src={img3} className='onecard4img' alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card4
