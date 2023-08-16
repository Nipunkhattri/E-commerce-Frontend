import React from 'react'
import './Homescreen.css'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'
import Card6 from './Card6'
import { useTheme, useMediaQuery, Paper, Typography, Box, MobileStepper} from '@mui/material';

import Card1Carousel from './Card1Carousel'
import MobileCard2 from './MobileCard2'
import MobileCard1 from './MobileCard1'

const Homescreen = () => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
    <div className='home'>
        <div className='rev-home'>
      <h3 className='h11' style={{color:"white !important"}}>CURATED ELEGANCE , DEFINED BY TIMELESSNESS</h3>
      <h2 className='h22' style={{color:"white !important"}}>CLASS & CHIC</h2>
      <button className='btn11'>SHOP NOW</button>
        </div>
    </div>

    {isScreenSmall ? <MobileCard1/> :  <Card1Carousel></Card1Carousel> }
   
    {isScreenSmall ? <MobileCard2/> :  <Card2></Card2> }
    
    <Card3/>
    <Card4/>
    <Card5/>
    <Card6/>
    </>
  )
}

export default Homescreen
