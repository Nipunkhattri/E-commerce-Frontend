import React, { useState, useEffect } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import c1a1 from "./assets/c1a1.png";
import c1b1 from "./assets/c1b1.png";
import rightIcon from "./assets/rightIcon.png";
import leftIcon from "./assets/leftIcon.png";

const useStyles = makeStyles((theme) => ({
  carousel: {
    width: "100%",
    maxHeight: "800px",
    position: "relative",
    overflow: "hidden",
  },
  frameContainer: {
    display: "flex",
    transition: "transform 0.3s ease-in-out",
    height: "100%",
  },
  frame: {
    flex: "0 0 100%",
    display: "flex",
  },
  subgrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "40%",
    padding: theme.spacing(2),
    backgroundColor: "#fff",
  },
  image: {
    width: "105.2%",
    height: "100%",
    objectFit: "cover",
  },
  image1: {
    width: "50%",
    height: "50%",
    objectFit: "cover",
  },
  productInfo: {
    width: "60%",
    padding: "120px 50px 0px 50px",
    backgroundColor: "#fafafa",
    maxHeight: "770px",
    position: "relative",
    top: "15px",
  },
  productName: {
    fontWeight: "bold",
    marginTop: theme.spacing(5),

  },
  productAmount: {
    marginBottom: theme.spacing(2),
    fontFamily:"inter"
  },
  button1: {
    fontSize: "0.7rem !important",

   position:"relative",
    backgroundColor: "black",
    
    backgroundColor: "black !important",
    fontFamily: "inter !important",
    letterSpacing: "4px !important",
    fontWeight: "300 !important",
    padding: "8px 20px 8px 20px !important",
    borderRadius: "0px !important",
    left:"300px",
    top:"10px"
  },
  dotContainer: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    borderRadius: "50%",
    backgroundColor: "#888",
    margin: theme.spacing(0.5),
    transition: "background-color 0.3s ease-in-out",
  },
  activeDot: {
    backgroundColor: "#333",
  },
  carousel: {
    width: "100%",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "800px",
    marginTop: "20px",
  },
  buttonContainer: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",

    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
  },

  heading1: {
    fontFamily: "inter !important",
    letterSpacing: "1.5px !important",
  },
  frameDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
}));

const Carousel = () => {
  const classes = useStyles();
  const [currentFrame, setCurrentFrame] = useState(0);
  const frames = [
    {
      imageSrc: c1a1,
      heading1: "THE GREY COLLECTION",
      heading2: "MOONSTONE",
      productImageSrc: c1b1,
      productName: "MOONSTONE GREY SHIRT",
      productAmount: "	&#8377;  18700.00",
    },
   
    {
      imageSrc: c1a1,
      heading1: "THE GREY COLLECTION",
      heading2: "MOONSTONE",
      productImageSrc: c1b1,
      productName: "MOONSTONE GREY SHIRT",
      productAmount: "	&#8377;  18700.00",
    },
   
    {
      imageSrc: c1a1,
      heading1: "THE GREY COLLECTION",
      heading2: "MOONSTONE",
      productImageSrc: c1b1,
      productName: "MOONSTONE GREY SHIRT",
      productAmount: "	&#8377;  18700.00",
    },
   
    {
      imageSrc: c1a1,
      heading1: "THE GREY COLLECTION",
      heading2: "MOONSTONE",
      productImageSrc: c1b1,
      productName: "MOONSTONE GREY SHIRT",
      productAmount: "	&#8377;  18700.00",
    },
   
    {
      imageSrc: c1a1,
      heading1: "THE GREY COLLECTION",
      heading2: "MOONSTONE",
      productImageSrc: c1b1,
      productName: "MOONSTONE GREY SHIRT",
      productAmount: "	&#8377;  18700.00",
    },
   
    // Add more frames as needed
  ];

  // Automatic frame change interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [frames.length]);

  // Handle next/previous frame buttons
  const handleNextFrame = () => {
    setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
  };

  const handlePrevFrame = () => {
    setCurrentFrame(
      (prevFrame) => (prevFrame - 1 + frames.length) % frames.length
    );
  };

  return (
    <div className={classes.carousel}>
      <div
        className={classes.frameContainer}
        style={{ transform: `translateX(-${currentFrame * 100}%)` }}
      >
        <div className={classes.frameDiv}>
          {frames.map((frame, index) => (
            <div key={index} className={classes.frame}>
              <div className={classes.subgrid}>
                <img
                  src={frame.imageSrc}
                  alt={`Carousel Image ${index + 1}`}
                  className={classes.image}
                />
              </div>
              <div className={classes.productInfo}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.heading1}
                  gutterBottom
                >
                  {frame.heading1}
                </Typography>
                <Typography
                  variant="h6"
                  align="center"
                  className={classes.heading1}
                  gutterBottom
                >
                  {frame.heading2}
                </Typography>
                <img src={frame.productImageSrc} alt="Product" width="35%"  
                
                style={{

                    left:"265px", position:"relative"
                    
                }}
    
    />
                <Typography
                  variant="h6"
                  className={classes.productName}
                  align="center"
                  gutterBottom
                >
                  {frame.productName}
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.productAmount}
                  align="center"
                  gutterBottom
                >
                  {frame.productAmount}
                </Typography>
                <Button variant="contained" className={classes.button1}>
                  VIEW THIS PRODUCT
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.dotContainer}>
        {frames.map((_, index) => (
          <div
            key={index}
            className={`${classes.dot} ${
              currentFrame === index ? classes.activeDot : ""
            }`}
            onClick={() => setCurrentFrame(index)}
          />
        ))}
      </div>
      <div className={classes.buttonContainer}>
        <div className={classes.button} onClick={handlePrevFrame}>
          <img src={leftIcon} alt="Previous" width="100%" />
        </div>
        <div className={classes.button} onClick={handleNextFrame}>
          <img src={rightIcon} alt="Next" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
