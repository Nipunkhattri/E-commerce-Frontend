import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Menu,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  menu:{
    position:"relative",
    top:"150px"
  }
}));

const SmallDropdown = ({ options }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    handleClose();
  };

  return (
    <div>
      <Button
        className={classes.button}
        aria-controls="small-dropdown-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {options[selectedIndex]}
      </Button>
      <Menu
        id="small-dropdown-menu"
        anchorEl={anchorEl}
    
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      
      >
        {options.map((option, index) => (
          <MenuItem 
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default SmallDropdown;
