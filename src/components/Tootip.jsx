import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { Paper, Typography, Container, Button, Box } from "@mui/material";


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "black",
    color: "white",
    width: "250px",
    height: "50px",

    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    display: "flex",

    right: -100,
    top: 300,
    zIndex: 99999,
    transform: "rotate(270deg)",
    fontSize: "25px",
    textDecoration:"none"
  },
  containerP: {},
}));
let page = "";

function setHide() {
  page = window.location.pathname === "/contactus" ? "hide" : "display";
}

const VerticalRectangle = (props) => {
  const classes = useStyles();

  useEffect(() => {
    setHide();
  }, []);
  const handleClick = () => {
    console.log(page);
  };

  return (
    <Tooltip title="Tiles" placement="left" onClick={handleClick}>
      <Box component="a" href="/comingsoon"  className={classes.container}>
        <p className={classes.containerP}>Tiles Visualizer</p>
      </Box>
    </Tooltip>
  );
};

export default VerticalRectangle;
