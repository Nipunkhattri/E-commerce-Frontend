import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { Paper, Typography, Container, Button, Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "black",
    color: "white",
    width: "150px",
    height: "50px",

    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    display: "flex",

    right: -55,
    top: 200,
    zIndex: 99999,
    transform: "rotate(270deg)",
    fontSize: "18px",
    textDecoration:"none"
  },
  containerP: {},
}));
let page = "";

function setHide() {
  page = window.location.pathname === "/contactus" ? "hide" : "display";
}

const VerticalRectangleMob = (props) => {
  const classes = useStyles();

  useEffect(() => {
    setHide();
  }, []);
  const handleClick = () => {
    console.log(page);
  };

  return (
    <Tooltip title="Tiles" placement="left" onClick={handleClick}>
      <Box component="a" href="/comingsoon" className={classes.container}>
        <p className={classes.containerP}>Tiles Visualizer</p>
      </Box>
    </Tooltip>
  );
};

export default VerticalRectangleMob;
