import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import "./header.css"
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import logo from "../assets/logo.png";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import SmallDropdown from "./Dropdown";
import cartIcon from "../assets/cart.png";
import accountIcon from "../assets/account.png";
import searchIcon from "../assets/search.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex:"9999 !important",
    position:"sticky"

  },
  appBar: {
    backgroundColor: "transparent",
    
    top: "44px",
    width: "100%",
    transition: "1.5s",
    color: "white",
    backgroundColor: "white",
    color: "black",

    borderBottom: "0.1px dotted white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    color: "black",
  },
  navItems: {
    Link: {
      fontFamily: "inter",
      letterSpacing: "1.5px",
      fontWeight: "400",
    },
  },
  navItems2: {},
  button1: {
    fontFamily: "inter",
    letterSpacing: "2px",
    fontWeight: "600",
    fontSize: "11px",
    position: "relative",
    left: "-10px",
    margin: "0px 5px 0px 5px",
    color: "inherit",
  },
  button2: {
    width: "15px",
    margin: "0px -12px 0px -12px",
  },
  logo: {
    height: "40px",
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  iconButton: {
    marginLeft: "auto",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const MainHeader = () => {
  const classes = useStyles();
  // const [ data1 , setdata1] = useState();
  const { Product1 } = useSelector((state) => ({ ...state.Prod }));
  console.log(Product1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width: 600px)');
  const navigate = useNavigate()
  const [ name,setname] = useState(null)
  const [isSticky, setIsSticky] = useState(false);
  let value;
  useEffect(()=>{
    value = Product1?.map((element) => element.collect);
    console.log(value)
    setname(value);
  },[Product1])

  console.log(name)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsSticky(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  // const data = "hello";

  const handlestoredata = (item) =>{
    console.log(item);
    navigate("/collection1",{state:{data : item}})
  }

  const handlecart = () =>{
    console.log("hii");
    navigate("/cart");
  }

  return (
    <div
      className={classes.root}
     
    >
      <AppBar position="static" className={classes.appBar}  style={{
        display : isMobile ? "block"  : "block"
      }}>
        <Toolbar className={classes.toolBar}>
          {isMobile ? (
            <IconButton
              edge="end"
              className={classes.menuButton}
              color="black"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <></>
          )}

          <img src={logo} alt="logo" className={classes.logo} />

          {isMobile ? (
            <></>
          ) : (
            <>
              <div className="links">
                <Link
                  component="a"
                  to="/"
                  className="button1"
                  color="black"
                >
                  <Typography
                    style={{
                      fontFamily: "inter",
                      textTransform: "none",
                      fontSize: "11px",
                      fontWeight: "600",
                      letterSpacing: "1.5px",
                    }}
                  >
                    HOME
                  </Typography>
                </Link>
                <Link
                  component="a"
                  to="/store"
                  className="button1"
                  color="black"
                >
                  <Typography
                    style={{
                      fontFamily: "inter",
                      textTransform: "none",
                      fontSize: "11px",
                      fontWeight: "600",
                      letterSpacing: "1.5px",
                    }}
                  >
                    STORE
                  </Typography>
                </Link>
                <Button
                  component="a"
                  className="button1"
                  color="black"
                >
                  <Typography
                    style={{
                      fontFamily: "inter",
                      textTransform: "none",
                      fontSize: "11px",
                      fontWeight: "600",
                      letterSpacing: "1.5px",
                    }}
                  >
                    COLLECTIONS
                  </Typography>
                  <div className="dropdown-menu">
                    <ul>
                    {
                      Array.isArray(name) ?
                      name?.map((item,index)=>{
                        return(
                         <li key={index} onClick={()=>handlestoredata(item)}>{item}</li>
                         )
                        })
                      :<></>
                    }
                        </ul>
                  </div>
                </Button>
                <Link
                  component="a"
                  to="/about"
                  className="button1"
                  color="black"
                >
                  <Typography
                    style={{
                      fontFamily: "inter",
                      textTransform: "none",
                      fontSize: "11px",
                      fontWeight: "600",
                      letterSpacing: "1.5px",
                    }}
                  >
                    ABOUT US
                  </Typography>
                </Link>
              </div>
              <div className={classes.navItems2}>
                <Button onClick={handlecart} className={classes.button2} color="black">
                  <img src={cartIcon} alt="" style={{ height: "20px" }} />
                </Button>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default MainHeader;
