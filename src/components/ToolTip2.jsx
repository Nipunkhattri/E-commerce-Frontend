import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: 'black',
    color: 'white',
    width: '40px',
    height: '40px',

    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    display:"flex",
    borderRadius:"50%",
  
    right: 10,
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
      <div onClick={handleClick} className={classes.container}><p className={classes.containerP}>^</p></div>
    </Tooltip>
  );
};

export default VerticalRectangle;
