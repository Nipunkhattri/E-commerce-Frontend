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
    top:-170,
    marginBottom:"-170px"
   
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
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    alignItems:"center",
    justifyContent:"center"
  },
  description1: {
    marginRight: theme.spacing(2),
    fontFamily: "inter",
    position: "relative",
    bottom: "0px",
    letterSpacing: "3px",
    fontSize: "10px",
    textAlign: "center",
    right: "0px",
    fontSize: "25px",


  },
  description: {
    marginRight: theme.spacing(2),
    fontFamily: "inter",
    position: "relative",
    bottom: "0px",
    textAlign: "center",
    letterSpacing: "3px",
    fontWeight: "400",
    fontSize: "44px",
    marginTop: "15px",
    right: "0px",
    letterSpacing:"5px"
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
  videoDiv:{

    height:"500px",
    overflowY:"hidden",
    "& video": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      },
  }
}));

const VideoPlayer2 = ({ src, title, subtitle, buttonLabel }) => {
  const classes = useStyles();
  const [muted, setMuted] = useState(true);

  const handleMuteToggle = () => {
    setMuted(!muted);
  };

  return (
    <div className={classes.root}>
        <div className={classes.videoDiv}>
      <video autoPlay loop muted={muted}>
        <source src={src} type="video/mp4" />
      </video>
      </div>
      <div className={classes.overlay}>
        
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
          
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer2;
