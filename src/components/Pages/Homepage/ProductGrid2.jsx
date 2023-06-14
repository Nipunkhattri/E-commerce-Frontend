import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import img1 from "./assets/p2g1.png";
import img2 from "./assets/p2g2.png";
import img3 from "./assets/p2g3.png";
import img4 from "./assets/p2g4.png";

import ProductCard from "../../cards/ProductCard";
import { useMediaQuery } from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    Width: "1000%",
    padding: "2rem",
    backgroundColor:"#fafafa !important"
  },
  headingDiv: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "inter",
  },
  heading: {
    fontFamily: "inter",
    fontSize: "25px !important",
    letterSpacing: "3px !important",
    marginBottom: "30px !important",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "0rem",
    textAlign: "left",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    marginBottom: "0rem",
  },
  gridHeading: {
    fontSize: "1rem !important",
    fontWeight: "bold",
    position: "absolute",
    fontFamily: "inter !important",
    color: "white",
    bottom: "80px",
    left: "30px",
    letterSpacing: "5px !important",
  },
  gridButton: {
    fontSize: "0.7rem !important",

    position: "absolute !important",
    backgroundColor: "black",
    bottom: "20px",
    left: "28px",
    backgroundColor: "black !important",
    fontFamily: "inter !important",
    letterSpacing: "4px !important",
    fontWeight: "300 !important",
    padding: "10px 20px 10px 20px !important",
    borderRadius: "0px !important",
  },
});

const ProductGrid1 = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width: 600px)');


  return (
    <div className={classes.root}>
      <div className={classes.headingDiv}>
        <Typography
          style={{ fontFamily: "inter !important" }}
          className={classes.heading}
        >
          EFFORTLESS ELEGANCE
        </Typography>
      </div>

      <Grid container spacing={1} >
        <div style={{
        display:"flex",
        flexDirection:"column !important",
        overflowX:"scroll",
        
       
      }}>

          
        <Grid item xs={12} sm={6} md={3}>
        <ProductCard
        imageSrc={img1}
        text1="BUTTON DOWN DRESS"
        text2="RS . 186.00"
        
      />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <ProductCard
        imageSrc={img2}
        text1="BUTTON DOWN DRESS"
        text2="RS . 186.00"
      />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <ProductCard
        imageSrc={img3}
        text1="BUTTON DOWN DRESS"
        text2="RS . 186.00"
      />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <ProductCard
        imageSrc={img4}
        text1="BUTTON DOWN DRESS"
        text2="RS . 186.00"
      />
        </Grid>



        </div>
     
       
      </Grid>
    </div>
  );
};

export default ProductGrid1;
