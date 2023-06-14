import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import img from "./assets/p3g1.png";
import { useMediaQuery } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing(4),
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
  bottom:"20px"


  },
  paragraph: {
    marginBottom: theme.spacing(2),
    fontFamily:"inter !important",
    letterSpacing:"1px !important",
    fontSize:"16px !important",
    textAlign:"left",
    width:"500px"

  },
}));

const ProductGrid3 = () => {
  const classes = useStyles();
const isMobile = useMediaQuery('(max-width: 600px)');


  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.heading}>
        EFFORTLESS ELEGANCE
      </Typography>
      <Grid container className={classes.subgrid}>
        <Grid item md={6} xs={12}>
          <img src={img} alt="Image 1" className={classes.image} />
        </Grid>
        <Grid item md={6} xs={12}>
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
              <Typography variant="body1" className={classes.paragraph} style={{
                width: isMobile ? "200px" : "500px"
              }}>
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

export default ProductGrid3;
