import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import img1 from "./assets/p1g1.png";
import img2 from "./assets/p1g2.png";
import img3 from "./assets/p1g3.png";
import img4 from "./assets/p1g4.png";
import img5 from "./assets/p1g5.png";
import img6 from "./assets/p1g6.png";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    padding: "2rem",
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
      <div className={classes.headingDiv}>
        <Typography
          style={{ fontFamily: "inter !important" }}
          className={classes.heading}
        >
          EFFORTLESS ELEGANCE
        </Typography>
      </div>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.gridItem}>
            <img src={img1} alt="Image 1" className={classes.image} />
            <Typography className={classes.gridHeading}>
              KINDERED SPIRIT
            </Typography>
            <Button variant="contained" className={classes.gridButton}>
              view collection
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.gridItem}>
            <img src={img2} alt="Image 2" className={classes.image} />
            <Typography className={classes.gridHeading}>
              KINDERED SPIRIT
            </Typography>
            <Button variant="contained" className={classes.gridButton}>
              view collection
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.gridItem}>
            <img src={img3} alt="Image 3" className={classes.image} />
            <Typography className={classes.gridHeading}>
              KINDERED SPIRIT
            </Typography>
            <Button variant="contained" className={classes.gridButton}>
              view collection
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.gridItem}>
            <img src={img4} alt="Image 1" className={classes.image} />
            <Typography className={classes.gridHeading}>
              KINDERED SPIRIT
            </Typography>
            <Button variant="contained" className={classes.gridButton}>
              view collection
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.gridItem}>
            <img src={img5} alt="Image 2" className={classes.image} />
            <Typography className={classes.gridHeading}>
              KINDERED SPIRIT
            </Typography>
            <Button variant="contained" className={classes.gridButton}>
              view collection
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.gridItem}>
            <img src={img6} alt="Image 3" className={classes.image} />
            <Typography className={classes.gridHeading}>
              KINDERED SPIRIT
            </Typography>
            <Button variant="contained" className={classes.gridButton}>
              view collection
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductGrid1;
