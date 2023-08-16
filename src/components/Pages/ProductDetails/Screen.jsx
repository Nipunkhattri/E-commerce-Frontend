import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    padding: "8rem 5rem 5rem 5rem",
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

  return (
    <div className={classes.root}>
     

      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12}>
          <img src={img7} alt="" style={{
            width:"100.25%"
          }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductGrid1;
