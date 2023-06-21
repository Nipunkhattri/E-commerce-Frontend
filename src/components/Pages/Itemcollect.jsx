import React, { useEffect, useState } from 'react'
import './Item.css'
import { useLocation, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate();
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

  const handleclick = (_id) =>{
    navigate("/card",{state:{id:_id}})
  }

  return (
    <>
    <div class="storecontainer"><div class="rev-homestore"><h3 class="h11">A world of sunlit peaks and white clouds</h3><h2 class="h22">Heart In the Highlands</h2><button class="btn11">SHOP NOW</button></div></div>
     <h3 className="breadcrumb" >
     Collections / {data} Collection</h3>
    <div
        className="flex-container1"
      >
       
         {
          Array.isArray(collection) && loading == false ?
        collection?.map((item, index) => {
          return (
            <div className="itemdiv1" key={index} onClick={()=>handleclick(item._id)}>
              {/* <div
                className={classes.media}
                style={{ backgroundImage: `url(${item.Image})` }}
              /> */}
              <img
        component="img"
        className="imgg1"
        alt="The house from the offer."
        src={item.images[0]}
      />
              {/* <img src={imgg1} className="imgg" alt="Product Image" /> */}
              <div className='text-store1'>
                <div variant="h6" className='headstore1'>
                  {item.headline}
                </div>
                <div variant="body1" className='headstore2'>
                  RS. {item.Price} 
                </div>
              </div>
            </div>
      // <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          );
        })
        :<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        } 
      
    </div>
    </>
  )
}

export default Itemcollect
