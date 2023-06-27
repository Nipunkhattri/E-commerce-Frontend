import React,{useState , useEffect} from 'react'
import './admincollect.css'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
  } from "@material-ui/core";
  import { useSelector } from "react-redux";
  import { Product, getBycollection } from '../../redux/features/ProductSlice';
  import { useDispatch } from 'react-redux';
  import { useNavigate } from 'react-router-dom';
  import Box from '@mui/material/Box';
  import CardContent from '@material-ui/core/CardContent';
//   import Typography from '@material-ui/core/Typography';
  import { makeStyles } from '@material-ui/core/styles';
import { deleteitem } from '../../redux/features/BuySlice';
  
  const useStyles = makeStyles((theme) => ({
    card: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 300,
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

const Admincollect = () => {


  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state)=> ({...state.auth}));

  useEffect(()=>{
    if(isAuthenticated == false){
      navigate('/adminlogin');
    }
  })

    const dispatch = useDispatch();
    const classes = useStyles(); 
    let value;
    const { Product1 } = useSelector((state) => ({ ...state.Prod }));
  console.log(Product1);

  useEffect(()=>{
    dispatch(Product())
  },[])

  const [ name,setname] = useState(null)
  const handleproduct = async ()=>{
    value = await Product1?.map((element) => element.collect);
    console.log(value)
    setname(value);
  }
  useEffect(()=>{
      handleproduct()

  },[Product1])

  console.log(name)
  const [value1,setvalue] = useState(null);
  const [loading, setloading] = useState(true);
  const [collection , setcollection] = useState(null);

  const handlestoredata = (item) =>{
    if(item){
        setvalue(item)
    }
    else{
        setvalue(gray)
    }
  }

  const handledeletecollect = (id) =>{
    console.log(id);
    setloading(true);
    dispatch(deleteitem(id)) 
    .then((response) => {
        console.log(response.payload);
        console.log("hii")
        setloading(false);
        dispatch(Product())
        setitem(response.payload);
    })  
    .catch((err) => {
        console.log(err);
        // setError(error);
    });;
  } 

  const handlenavigate = () =>{
    navigate('/admin')
  }
  const handlenavigate1 = () =>{
    navigate('/adminorder')
  }
  const handleclick = () =>{
    let doc = document.querySelector('.dropdownmenu');
    doc.classList.toggle('hidden')
  }


  const handlevalue  = () =>{
    setloading(true);
    console.log(value1);
      dispatch(getBycollection(value1))
      .then((response) => {
        setcollection(response.payload);
        setloading(false);
      })  
      .catch((err) => {
          console.log(err);
      });
  }

  useEffect(()=>{
    handlevalue();
  },[value1])

  console.log(collection);
  console.log(name)

  const handleupdateproduct = (id) =>{
    console.log(id);
    navigate('/updateproduct',{state:{_id:id}})
  }


  return (
    <>
      <>
      {
        (name !== null )
        ?
        <>
          <div className='contain'>
      <button className='addbtnpage' onClick={handlenavigate}>Add Product </button>
        <button className='addbtnpage1' onClick={handlenavigate1}>Order Details</button>
    <div
                component="a"
                className="button1admin"
                color="black"
            >
            <h3 onClick={handleclick}>Select Collection</h3>
                <div className="dropdownmenu">
                <ul>
                {
                    Array.isArray(name) ?
                    name?.map((item,index)=>{
                    return(
                        <li key={index} onClick={()=>handlestoredata(item)}>{item?item:'Gary'}</li>
                        )
                    })
                    :<></>
                }
                    </ul>
                </div>
    </div>
    <h3 style={
      {
        "margin":"40px 40px"
      }
     }>{value1?value1:''} Collection</h3>
    <div
        className="flex-container1"
      >
       
         {
          Array.isArray(collection) && loading == false ?
        collection?.map((ele, index) => {
          return (
            <>
            <div className="itemdiv1" key={index} >
            <button className='deleteadmin' onClick={() => handledeletecollect(ele._id)}>Delete</button>
              {/* <div
                className={classes.media}
                style={{ backgroundImage: `url(${item.Image})` }}
            /> */}
              <img
        component="img"
        className="imgg1"
        onClick={()=>handleupdateproduct(ele._id)}
        alt="The house from the offer."
        src={ele.images[0]}
      />
              {/* <img src={imgg1} className="imgg" alt="Product Image" /> */}
              <div className='text-store1'>
                <div variant="h6" className="headstore1">
                  {ele.headline}
                </div>
                <div variant="body1" className="headstore2">
                  RS. {ele.Price} 
                </div>
              </div>
            </div>
            </>
          );
        })
        // :<>Loading..</>
        :<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        } 
      
    </div>
    </div>
        </>
        :<>
        <h2>hii</h2>
        </>
      }

      </>
    </>
  )
}

export default Admincollect
