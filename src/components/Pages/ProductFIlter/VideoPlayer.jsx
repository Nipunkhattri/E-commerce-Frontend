import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, IconButton, Typography } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    height: 0,
    paddingTop: "56.25%", // 16:9 aspect ratio
    overflow: "hidden",
    "& video": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  },
  button: {
    marginTop: theme.spacing(1),
    position: "relative",
    bottom: "40px",
    letterSpacing: "3px",
    fontSize: "10px",
    left:"170px",
    backgroundColor:"black",
    borderRadius:0,
    width:"160px",
    height:"42px",
    fontSize:"18px",
    letterSpacing:"4px",
    fontFamily:"inter",
    display:"flex"
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  description: {
    marginRight: theme.spacing(2),
    fontFamily: "inter",
    position: "relative",
    bottom: "60px",
    letterSpacing: "3px",
    fontSize: "10px",
    textAlign: "center",
    right: "40px",
  },
  description1: {
    marginRight: theme.spacing(2),
    fontFamily: "inter",
    position: "relative",
    bottom: "60px",
    textAlign: "center",
    letterSpacing: "3px",
    fontWeight: "400",
    fontSize: "24px",
    marginTop: "15px",
    right: "40px",
  },
  description2: {
    marginRight: theme.spacing(2),
    fontFamily: "inter",
    position: "relative",
   
    textAlign: "center",
    letterSpacing: "3px",
    fontWeight: "400",
    fontSize: "15px",
    top:"4.5px",
    left:"10px"


  },
}));

const VideoPlayer = ({ src, title, subtitle, buttonLabel }) => {
  const classes = useStyles();
  const [muted, setMuted] = useState(true);

  const handleMuteToggle = () => {
    setMuted(!muted);
  };

  return (
    <div className={classes.root}>
      <video autoPlay loop muted={muted}>
        <source src={src} type="video/mp4" />
      </video>
      <div className={classes.overlay}>
        <IconButton onClick={handleMuteToggle}>
          {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
        <div>
          <Typography variant="body1" className={classes.description}>
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.description1}
            gutterBottom
          >
            {subtitle}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            <Typography
            variant="subtitle1"
            className={classes.description2}
            gutterBottom
          > {buttonLabel}</Typography>
           
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
