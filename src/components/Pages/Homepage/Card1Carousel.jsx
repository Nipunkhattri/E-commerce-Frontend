import React, { useState } from 'react';
import { useTheme, useMediaQuery, Paper, Typography, Box, MobileStepper } from '@mui/material';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@material-ui/core';
import next from "./assets/nextIcon.png"
import prev from "./assets/prevIcon.png"

import suit from './suit.webp' 
import car1 from "./car1.webp"
import car11 from "./car11.webp"
import car2 from "./car2.webp"
import car22 from "./car22.webp"
import car3 from "./car3.webp"
import car33 from "./car33.webp"
import car4 from "./car4.webp"
import car44 from "./car44.webp"
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const useStyles = makeStyles((theme) => ({
    dots: {
      '& .MuiMobileStepper-dot': {
        backgroundColor:"transparent",
        width: 10,
        height: 10,
        margin: theme.spacing(0, 0.5),
        borderRadius: '50%',
        transition: 'background-color 0.3s ease',
      },
      '& .MuiMobileStepper-dotActive': {
        backgroundColor:"transparent",
      },
    },
  }));
const Card1Carousel = () => {
  const carouselData = [
    {
      collection: 'MOONSTONE GREY',
      name: 'COLLECTION',
      image: car1,
      description: 'The Stylish Starlet- SHIRT',
      price: (18900).toLocaleString("EN-IN"),
      image2: car11
    },
    {
      collection: 'PISTACHIO PERFECTION',
      name: 'COLLECTION',
      image: car2,
      description: 'The Classic Button-Down - SHIRT',
      price: (14500).toLocaleString("EN-IN"),
      image2: car22
    },
    {
      collection: 'GARNET WINE',
      name: 'COLLECTION',
      image: car3,
      description: 'The Stylish Starlet- SHIRT',
      price: (18900).toLocaleString("EN-IN"),
      image2: car33
    },
    {
      collection: 'BRONZE ALLURE',
      name: 'COLLECTION',
      image: car4,
      description: 'The Stylish Flair - SHIRT',
      price: (18900).toLocaleString("EN-IN"),
      image2: car44
    },
    
    // Add more items as needed
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeStep, setActiveStep] = useState(0);
  const backgrounds = ['background1.jpg', 'background2.jpg', 'background3.jpg', 'background4.jpg'];
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];
  const descriptions = ['Description 1', 'Description 2', 'Description 3', 'Description 4'];

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % backgrounds.length);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + backgrounds.length) % backgrounds.length);
  };
  const classes = useStyles();

  return (
    <div style={{height:"880px" }}>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
        interval={5000}
        style={{ overflow: 'hidden' }}
      >
       {carouselData.map((item, index) => (
  <div key={index} className='card1c'>
    <div className='imgcard1left'>
    <img src={item.image} alt="" />

    </div>
    <div className='card1Right'>
      <div className='cardimgp'>
        <h2>{item.collection}</h2>
        <h3 className='mew1'>{item.name}</h3>
        <img src={item.image2} alt="" />
        <h3 className='mew'>{item.description}</h3>
        <h4>&#8377; {item.price}</h4>
        <button className='cardbtn'>VIEW THIS PRODUCT</button>
      </div>
    </div>
  </div>
))}
      </AutoPlaySwipeableViews>

      <MobileStepper
        variant="dots"
        steps={backgrounds.length}
        position="static"
        activeStep={activeStep}
        classes={{ dots: classes.dots }} 
        style={{

          color:"black !important",
          position:"relative",
          bottom:"345px",
          backgroundColor:"transparent"
         
        
        
        }}
        nextButton={
          <button disabled={activeStep === backgrounds.length - 1} onClick={handleNext} style={{
            backgroundColor:"transparent",
            border:"none",
            
        }}>
            <img src={next} alt="" style={{
                height:"60px",
                position:"relative",
                bottom:"150px"

            }}  />
          </button>
        }
        backButton={
            <button disabled={activeStep === backgrounds.length - 1} onClick={handleNext} style={{
                backgroundColor:"transparent",
                border:"none",
                
            }}>
                <img src={prev} alt="" style={{
                    height:"60px",
                    position:"relative",
                    bottom:"150px"

                }}  />
              </button>
        }
      />
    </div>
  );
};

export default Card1Carousel;
