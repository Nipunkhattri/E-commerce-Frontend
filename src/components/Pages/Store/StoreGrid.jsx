import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "../../cards/ProductCard";
import ProductCard1 from "../../cards/ProductCard1";
import img1 from "./assets/p1g1.png";
import img2 from "./assets/p1g2.png";
import img3 from "./assets/p1g3.png";
import img4 from "./assets/p1g4.png";
import img5 from "./assets/p1g5.png";
import img6 from "./assets/p1g6.png";
import img7 from "./assets/p1g7.png";
import img8 from "./assets/p1g8.png";
import img9 from "./assets/p1g9.png";
import img10 from "./assets/p1g10.png";
import img11 from "./assets/p1g11.png";
import img12 from "./assets/p1g12.png";
import { Product } from "../../../redux/features/ProductSlice.js";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import "./store.css";
import Box from '@mui/material/Box';
import imgg1 from "./assets/Rectangle.png"

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 350,
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
    backgroundColor: 'transparent',
    padding:"0px 50px 50px 0px",
    border:"none"
  },
  media: {
    height: 450,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: theme.spacing(1),
  },
  text: {
    fontFamily: 'Inter, sans-serif',
    marginBottom: theme.spacing(1),
    letterSpacing:"1px"
  },
}));


const StoreGrid = () => {
  const classes = useStyles();
  const { Product1 } = useSelector((state) => ({ ...state.Prod }));
  // console.log(Product1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(Product());
  }, []);

  const handleclick = (_id) =>{
    navigate("/card",{state:{id:_id}})
  }

  return (
    <>

      <Card
        className="grid-container"
        container
        // sx={{ display: 'flex' }}
        spacing={0}
        style={{
          marginTop: "50px",
          padding: "0px 50px 50px 50px",
        }}
      >
        {
          Array.isArray(Product1) ?
        Product1?.map((item, index) => {
          return (
            <div className="itemdiv" key={index} onClick={()=>handleclick(item._id)}>
              {/* <div
                className={classes.media}
                style={{ backgroundImage: `url(${item.Image})` }}
              /> */}
              <Box
        component="img"
        className="imgg"
        alt="The house from the offer."
        src={item.images[0]}
      />
              {/* <img src={imgg1} className="imgg" alt="Product Image" /> */}
              <CardContent>
                <Typography variant="h6" className={classes.text}>
                  {item.headline}
                </Typography>
                <Typography variant="body1" className={classes.text}>
                  RS. {item.Price} 
                </Typography>
              </CardContent>
            </div>
          );
        })
        :<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

        }        {/* <Grid item xs={3}>
         <ProductCard1
        imageSrc={img2}
        text1="BUTTON DOWN DRESS"
        text2="RS . 186.00"
      />


      </Grid>
      <Grid item xs={3}>
         <ProductCard1
        imageSrc={img3}
        text1="BUTTON DOWN DRESS"
        text2="RS . 186.00"
      />


      </Grid>
      <Grid item xs={3}>
         <ProductCard1
        imageSrc={img4}
        text1="BUTTON DOWN DRESS"
        text2="RS . 186.00"
      />


      </Grid>
      <Grid item xs={3}>
         <ProductCard1
        imageSrc={img5}
        text1="BUTTON DOWN DRESS"
        text2="RS . 186.00"
      />


      </Grid>
      <Grid item xs={3}>
         <ProductCard1
        imageSrc={img6}
        text1="BUTTON DOWN DRESS"
        text2="RS . 186.00"
      />


      </Grid>
      <Grid item xs={3}>
         <ProductCard1
        imageSrc={img7}
        text1="BUTTON DOWN DRESS"
        text2="RS . 186.00"
      />


      </Grid>
      <Grid item xs={3}>
         <ProductCard1
        imageSrc={img8}
        text1="BUTTON DOWN DRESS"
        text2="RS . 186.00"
      />


      </Grid>
      <Grid item xs={3}>
         <ProductCard1
        imageSrc={img9}
        text1="BUTTON DOWN DRESS"
        text2="RS . 186.00"
      />


      </Grid>
      <Grid item xs={3}>
         <ProductCard1
        imageSrc={img10}
        text1="BUTTON DOWN DRESS"
        text2="RS . 186.00"
      />


      </Grid>
      <Grid item xs={3}>
         <ProductCard1
        imageSrc={img11}
        text1="BUTTON DOWN DRESS"
        text2="RS . 186.00"
      />


      </Grid>
      <Grid item xs={3}>
         <ProductCard1
        imageSrc={img12}
        text1="BUTTON DOWN DRESS"
        text2="RS . 186.00"
      />


      </Grid> */}
      </Card>
    </>
  );
};

export default StoreGrid;
