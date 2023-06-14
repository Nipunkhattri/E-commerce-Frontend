import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import img from "./assets/model1.png";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing(4),
    backgroundColor:"black"
  },
  heading: {
    marginBottom: theme.spacing(2),
    fontFamily: "inter !important",
    letterSpacing: "4px !important",
  color:"white !important"


  },
  subgrid: {
    padding: "50px 50px 50px 50px",
  },
  image: {
    width: "80%",
    height: "90%",
  },
  subheading: {
    marginBottom: theme.spacing(1),
    fontFamily:"inter !important",
    letterSpacing:"3px !important",
    fontSize:"22px !important",
  position:"relative",
  right:"145px",
  bottom:"20px",
  color:"white !important"


  },
  paragraph: {
    marginBottom: theme.spacing(2),
    fontFamily:"inter !important",
    letterSpacing:"1px !important",
    fontSize:"16px !important",
    textAlign:"left",
    width:"500px",
    color:"white !important"

  },
}));

const ProductGrid4 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Grid container className={classes.subgrid}>
      
        <Grid item xs={6}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
           
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
        <Grid item xs={6}>
          <img src={img} alt="Image 1" className={classes.image} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductGrid4;
