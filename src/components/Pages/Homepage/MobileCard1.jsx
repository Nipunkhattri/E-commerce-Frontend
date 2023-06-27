import React, { useState } from 'react';
import { useTheme, useMediaQuery, Paper, Typography, Box, MobileStepper } from '@mui/material';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles } from '@material-ui/core';
import next from "./assets/nextIcon.png"
import prev from "./assets/prevIcon.png"

import suit from './suit.png' 
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
const MobileCard1 = () => {
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
    <div style={{ display: isMobile ? 'block' : 'none' , height:"650px" }}>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
        interval={5000}
        style={{ overflow: 'hidden' }}
      >
        {backgrounds.map((background, index) => (
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
        ))}
      </AutoPlaySwipeableViews>

      <MobileStepper
        variant="dots"
        steps={backgrounds.length}
        position="static"
        activeStep={activeStep}
        classes={{ dots: classes.dots }} 
        style={{

          color:"blue !important",
          position:"relative",
          bottom:"325px",
          backgroundColor:"transparent"
         
        
        
        }}
        nextButton={
          <button disabled={activeStep === backgrounds.length - 1} onClick={handleNext} style={{
            backgroundColor:"transparent",
            border:"none",
            
        }}>
            <img src={next} alt="" style={{
                height:"40px",
                position:"relative",

            }}  />
          </button>
        }
        backButton={
            <button disabled={activeStep === backgrounds.length - 1} onClick={handleNext} style={{
                backgroundColor:"transparent",
                border:"none",
                
            }}>
                <img src={prev} alt="" style={{
                    height:"40px",
                    position:"relative",

                }}  />
              </button>
        }
      />
    </div>
  );
};

export default MobileCard1;
