import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    height:"130vh",
    overflowY:"hidden",
    marginTop:"20px"
  },
  heading: {
    textAlign: 'center',
    margin: theme.spacing(2),
    marginBottom:"50px",
    marginTop:"0px",
    fontFamily:"inter",
    fontSize:"30px",
    letterSpacing:"4px",
   
  },
  image: {
    gridColumn: '1 / 3',
    gridRow: '1 / span 3',
    height: '79%',
    width: '98%',
    objectFit: 'cover',
    position:"relative",
    left:"7px",
    top:"12px"
  },
  subgrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height:"650px",
    overflow:"hidden",
    position:"relative",
    right:"6px"
  },
  subgridItem: {
    margin: theme.spacing(1),
    height: '100%',
    width:"98%",
    objectFit: 'cover',
    paddingTop:"8px"
  },
  textHeading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: 60,
    marginLeft:20,
    fontFamily:"inter",
    letterSpacing:"5px",
    fontWeight:"500"
  },
  text: {
    fontSize: "1rem",
    lineHeight: 1.5,
    fontFamily:"inter",
    letterSpacing:"1.5px",
    fontWeight:"400",
    width:"350px",
    marginTop: 10,
    marginLeft:20,
  },
}));

export default function ImageCollage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.heading}>
        EFFORTLESS ELEGANCE
      </Typography>
      <Grid container spacing={0}>
        {/* Subgrid 1 */}
        <Grid item xs={12} sm={6}>
          <img src={Image} alt="main" className={classes.image} />
        </Grid>
        {/* Subgrid 2 */}
        <Grid item xs={12} sm={6} className={classes.subgrid}>
          <Grid item xs={6} sm={6}>
          <Typography variant="h3" className={classes.textHeading}>
            OUR ASTHETIC
          </Typography>
          <Typography variant="body1" className={classes.text}>
          Buna embodies a slow way of life that is rooted in culture, craft and of breath-ability, light and airiness that it wants its wearers to be part of. of breath-ability,
          </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <img src={Photo2} alt="photo2" className={classes.subgridItem} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={Photo3} alt="photo3" className={classes.subgridItem} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={Photo4} alt="photo4" className={classes.subgridItem} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
