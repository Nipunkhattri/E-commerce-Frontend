import React from "react";
import { useMediaQuery , Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import banner from "../assets/banner4.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${banner})`,
    backgroundSize: "100% 100%",
    color: "#FFFFFF",
    padding: "50px 0",

    marginTop: "0px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  heading: {
    fontWeight: "semi-bold",
    marginBottom: "25px",
    fontFamily: "montserrat",
    position: "relative",
    left: "5rem" ,

    fontWeight: "bold",
    filter: "brightness(100%)",
    width:"200px"

  },
  link: {
    fontWeight: "bold",

    color: "#FFFFFF",
    marginBottom: "15px",
    fontFamily: "montserrat",

    filter: "brightness(100%)",
    cursor: "pointer",
    textDecoration: "none",
  },
  Link: {
    fontWeight: "bold",

    color: "#FFFFFF",
    marginBottom: "15px",
    fontFamily: "montserrat",

    filter: "brightness(100%)",
    cursor: "pointer",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    left: "5rem"  ,
    width:"200px"
  },
}));

const handleClick = (index) => {
  console.log(index);
};

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
 

  const elements = [
    {
      heading: "Company Info",
      options: ["Privacy", "Terms and Conditions", "Return Policy"],
    },
   
    {
      heading: "Features",
      options: [
        "Home",
        "Store",
        "Collections",
        "About Us",
      ],
    },
  
    {
      heading: "Get In Touch",
      options: [
        "+91 919101106",
        "D 59/71 -A-1, Rathyatra Mahmoorganj Road, Varanasi, Varanasi, Uttar Pradesh, 221010",
        "debra.holt@example.com ",
      ],
    },
  ];

  return (
    <footer className={classes.root}>
      <Container>
        <Grid container spacing={6}>
          {elements.map((element, index) => (
            <Grid item xs={!isScreenSmall ? 10 : 6} sm={2} key={index}>
              <Typography className={classes.heading}>
                {element.heading}
              </Typography>
              <Box className={classes.links}>
                {element.options.map((option, index) => (
                  <Box>
                    {option === "Privacy" ? (
                      <Link
                        to="/privacy"
                        className={classes.Link}

                      >
                        <Typography
                          key={index}
                          onClick={handleClick(index)}
                          className={classes.link}
                        >
                          {option}
                        </Typography>
                      </Link>
                    ) : option === "Terms and Conditions" ? (
                      <Link
                      to="/tandc"
                      className={classes.Link}

                    >
                      <Typography
                        key={index}
                        onClick={handleClick(index)}
                        className={classes.link}
                      >
                        {option}
                      </Typography>
                    </Link>
                    ) : option === "Return Policy" ? (
                      <Link
                      to="/return"
                      className={classes.Link}

                    >
                      <Typography
                        key={index}
                        onClick={handleClick(index)}
                        className={classes.link}
                      >
                        {option}
                      </Typography>
                    </Link>
                    ) : option === "Home" ? (
                      <Link
                      to="/"
                      className={classes.Link}

                    >
                      <Typography
                        key={index}
                        onClick={handleClick(index)}
                        className={classes.link}
                      >
                        {option}
                      </Typography>
                    </Link>
                    ) : option === "Store" ? (
                      <Link
                      to="/store"
                      className={classes.Link}

                    >
                      <Typography
                        key={index}
                        onClick={handleClick(index)}
                        className={classes.link}
                      >
                        {option}
                      </Typography>
                    </Link>
                    ) : option === "Collections" ? (
                      <Link
                      to="/store"
                      className={classes.Link}

                    >
                      <Typography
                        key={index}
                        onClick={handleClick(index)}
                        className={classes.link}
                      >
                        {option}
                      </Typography>
                    </Link>
                    ) : option === "About Us" ? (
                      <Link
                      to="/about"
                      className={classes.Link}

                    >
                      <Typography
                        key={index}
                        onClick={handleClick(index)}
                        className={classes.link}
                      >
                        {option}
                      </Typography>
                    </Link>
                    ) :(
                      <Typography
                        href="#"
                        key={index}
                        onClick={handleClick(index)}
                        className={classes.link}
                        sx={{
                          filter: "brightness(100%)",
                        }}
                      >
                        {option}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
