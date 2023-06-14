import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Product } from "../../redux/features/ProductSlice.js"

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 350,
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
    backgroundColor: 'transparent',
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

const ProductCard = ({ imageSrc, text1, text2 }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div
        className={classes.media}
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      <CardContent>
        <Typography variant="h6" className={classes.text}>
          {text1}
        </Typography>
        <Typography variant="body1" className={classes.text}>
          {text2}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
