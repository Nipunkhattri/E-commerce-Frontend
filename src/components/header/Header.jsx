import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "44px",


  },
  appBar: {
    backgroundColor: "#000000", // set the background color of the top bar to black
    height: "44px",
    position:"relative"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    fontSize:"10px",
    position:"relative",
    bottom:"8px",
    fontFamily:"inter",
    letterSpacing:"2px"
  },
}));

function Header() {
  const classes = useStyles();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsSticky(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <div className={classes.root} style={
     { display : isMobile ? "none" : "block"}
    }>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="body1" className={classes.title}>
            SHIPPING WORLDWIDE. FREE INTERNATIONAL SHIPPING FOR ORDERS ABOVE INR 40000/USD 500.
          </Typography>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}

export default Header;
