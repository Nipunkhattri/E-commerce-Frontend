import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import img from "./assets/p3g1.png";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing(4),
    backgroundColor:"black",
    position:"relative",
    bottom:"4px",
    height:"105%"
    

  },
  heading: {
    marginBottom: theme.spacing(2),
    fontFamily: "inter !important",
    letterSpacing: "4px !important",
  },
  subgrid: {
    padding: "50px 0px 50px 50px",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  subheading: {
    marginBottom: theme.spacing(1),
    fontFamily:"inter !important",
    letterSpacing:"3px !important",
    fontSize:"22px !important",
  position:"relative",
  right:"145px",
  bottom:"20px",
  color:"white"


  },
  paragraph: {
    marginBottom: theme.spacing(2),
    fontFamily:"inter !important",
    letterSpacing:"1px !important",
    fontSize:"16px !important",
    textAlign:"left",
    width:"500px",
    color:"white"

  },
}));

const ProductGrid5 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.heading}>
        EFFORTLESS ELEGANCE
      </Typography>
      <Grid container className={classes.subgrid}>
        <Grid item xs={6}>
          <img src={img} alt="Image 1" className={classes.image} />
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Grid item>
              <Typography variant="h5" className={classes.subheading}>
                OUR AESTHETIC
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" className={classes.paragraph}>
                Buna embodies a slow way of life that is rooted in culture,
                craft and of breath-ability, light and airiness that it wants
                its wearers to be part of. of breath-ability, light and airiness
                that it wants its wearers to be part of. Buna
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};


export default ProductGrid5;
