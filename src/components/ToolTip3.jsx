import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import wttsp from "./assets/wttsp.png"

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#00D95F',
    color: 'white',
    width: '60px',
    height: '60px',

    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    display:"flex",
    borderRadius:"50%",
  
    left: 10,
    bottom:10,
    zIndex: 99999,
    
    fontSize:"25px"
  },
  containerP:{

    position:"relative",
    top:"4px"

    

  }
}));

const VerticalRectangle = () => {
  const classes = useStyles();
  const handleClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <Tooltip title="Top" placement="left">
      <div onClick={handleClick} className={classes.container}>  <img src={wttsp} alt="" style={{
        width:"60%",
        height:"60%"
      }} /></div>
    </Tooltip>
  );
};

export default VerticalRectangle;
