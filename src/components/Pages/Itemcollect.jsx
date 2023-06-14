import React, { useEffect, useState } from 'react'
import './Item.css'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getBycollection } from '../../redux/features/ProductSlice';
import Box from '@mui/material/Box';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


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



const Itemcollect = ({route}) => {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const data = location.state.data;
  console.log(data);
  const [loading, setloading] = useState(true);

  const [collection , setcollection] = useState(null);
  useEffect(()=>{
    setloading(true);
    dispatch(getBycollection(data))
    .then((response) => {
      // console.log(response.payload);
      setcollection(response.payload);
      setloading(false);
    })  
    .catch((err) => {
        console.log(err);
        // setError(error);
    });
  },[data])

  console.log(collection);

  return (
    <>
     <h3 style={
      {
        "margin":"40px 40px"
      }
     }>{data} Collection</h3>
    <card
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
          Array.isArray(collection) && loading == false ?
        collection?.map((item, index) => {
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
        } 
      
    </card>
    </>
  )
}

export default Itemcollect
