import React from 'react'
import './Homescreen.css'
import Card1 from './Card1.jsx'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'
import Card6 from './Card6'

const Homescreen = () => {
  return (
    <>
    <div className='home'>
        <div className='rev-home'>
      <h3 className='h11'>A world of sunlit peaks and white clouds</h3>
      <h2 className='h22'>HEART IN THE HIGHLANDS</h2>
      <button className='btn11'>SHOP NOW</button>
        </div>
    </div>
    <Card1/>
    <Card2/>
    <Card3/>
    <Card4/>
    <Card5/>
    <Card6/>
    </>
  )
}

export default Homescreen
