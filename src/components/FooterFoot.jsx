import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: theme.spacing(2),
  },
  root1:{
    display:"none"
  },
  text: {
    color: "#bbbbbb",
    fontFamily: "unna",
    marginLeft: "15rem",
  },
  icons: {
    display: "flex",
    alignItems: "center",
    "& > *": {
      marginRight: theme.spacing(1),
      color: "#89A963",
    },
  },

  iconDiv: {
    marginRight: "15rem",
  },
}));

export default function Footer() {
  const theme = useTheme();
  const classes = useStyles();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
 

  return (
    

   

     
    <Box className={!isScreenSmall ? classes.root : classes.root1 }>
      <Typography variant="body2" className={classes.text}>
      Copyright © 2023 Manas Agrawal All Rights Reserved.
      </Typography>
      <div className={classes.iconDiv}>
        <Box className={classes.icons}>
          <Facebook />
          <Instagram />
          <Twitter />
        </Box>
      </div>
    </Box>

    
  );
}
