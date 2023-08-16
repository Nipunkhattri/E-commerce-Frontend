import React from "react";
import { Grid } from "@mui/material";


import { Product } from "../../../redux/features/ProductSlice.js";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { makeStyles } from '@material-ui/core/styles';
import "./store.css";

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

      <div
        className="flex-container1"
      >
        {
          Array.isArray(Product1) ?
        Product1?.map((item, index) => {
          return (
            <div className="itemdiv1" key={index} onClick={()=>handleclick(item._id)}>
              {/* <div
                className={classes.media}
                style={{ backgroundImage: `url(${item.Image})` }}
              /> */}

              <div className="storeImgContainer">
              <img
        component="img"
        className="imgg1"
        alt="The house from the offer."
        src={item.images[0]}
      />
      </div>
              {/* <img src={imgg1} className="imgg" alt="Product Image" /> */}
              <div className="text-store1">
                <div variant="h6" className='headstore1'>
                  {item.headline}
                </div>
                <div variant="body1" className='headstore2'>
                  	&#8377;  {item.Price} /-
                </div>
              </div>
            </div>
          );
        })
        :<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

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
      </div>
    </>
  );
};

export default StoreGrid;
