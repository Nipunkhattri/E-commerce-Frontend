import React, { useState} from 'react';
import { useTheme, useMediaQuery, Paper, Typography, Box, MobileStepper} from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
// import image1 from "./assets/c1b1.png"
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  dots: {
    '& .MuiMobileStepper-dot': {
      backgroundColor:"#ECECEC",
      width: 10,
      height: 10,
      margin: theme.spacing(0, 0.5),
      borderRadius: '50%',
      transition: 'background-color 0.3s ease',
    },
    '& .MuiMobileStepper-dotActive': {
      backgroundColor: "black",
    },
  },
}));

const MobileCard2 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeStep, setActiveStep] = useState(0);
  const backgrounds = ['background1.jpg', 'background2.jpg', 'background3.jpg', 'background4.jpg'];
  // const images = [image1, image1, image1, image1];
  const descriptions = ['Description 1', 'Description 2', 'Description 3', 'Description 4'];

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % backgrounds.length);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + backgrounds.length) % backgrounds.length);
  };

  const classes = useStyles();

  return (
    <div style={{ display: isMobile ? 'block' : 'none'  }}>
          <h2 className='mobcard2h2'>OUR SCARF COLLECTION</h2>

      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
        interval={5000}
        style={{ overflow: 'hidden'  }}
      >
        {backgrounds.map((background, index) => (
          <div className='card2' >
          <div className='Card2-container'>
      <div className='card2div1'>
          <div className='insidecard2'>
              <div className='insidecard2inside'>
              <h2>The Grey collection</h2>
              <h3>MOONSTONE</h3>
              <p>Buna embodies a slow way of life that is rooted in culture, craft and of breath-ability, light and airiness that it wants its wearers to be part of. of breath-ability,</p>
              <button className='card2-btn'>View this product</button>
              </div>
          </div>
      </div>
     
          </div>
      </div>
        ))}
      </AutoPlaySwipeableViews>
      <div className='card2div2'>
          <div className='card2div2up'>
              <div>
              <h1>Our Aesthetic</h1>
              <p>Buna embodies a slow way of life that is rooted in culture, craft and of breath-ability, light and airiness that it wants its wearers to be part of. of breath-ability,</p>
              </div>
          </div>
          <div className='card2div2down'></div>
      </div>
      <div className='card2div3'>
          <div className='card2div3up'></div>
          <div className='card2div3down'></div>
      </div>
      <MobileStepper
        variant="dots"
        steps={backgrounds.length}
        position="static"
        activeStep={activeStep}
        classes={{ dots: classes.dots }} 
        style={{

          color:"black !important",
          position:"relative",
          bottom:"228px",
          backgroundColor:"transparent"
        
        
        }}
        />
    </div>
  );
};

export default MobileCard2;
