import { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Paper,
  Typography,
  Container,
  Button,
  Box,
} from "@mui/material";
import ProductCard from "../../cards/ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControl,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";


import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";

const CustomAccordion = styled(Accordion)({
  "&.Mui-expanded": {
    margin: "10 0 0 0",
  },
  marginBottom: -25,
});
const CustomAccordionLast = styled(Accordion)({
  "&.Mui-expanded": {
    margin: "10 0 0 0",
  },
  marginBottom: "50px",
});

const products = 2356; // Total number of products
const brands = [
  "Jaquar",
  "Essco",
  "Viking",
  "Nirali",
  "ACPL",
  "Artist",
  "Pare",
];
const filter = ["Floor Tiles", "Wall Tiles"];
const locations = ["Livingroom", "Bedroom", "Bathroom", "Outdoor", "Parking"];
const sizes = ["20 x 1000 MM", "35 x 1000 MM", "56 x 1000 MM", "23 x 1000 MM"];

const Products = [
  {
    image: img1,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
  {
    image: img2,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
  {
    image: img3,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
  {
    image: img4,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
  {
    image: img5,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
  {
    image: img6,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
  {
    image: img7,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
  {
    image: img8,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
  {
    image: img9,
    name: "WOODEN TILE | 20* X 40*",
    description: "We Provide You The Quality With Perfect Credibility",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "0rem 1rem 0rem 2rem",
    marginTop: "4.2rem",
  },
  root1: {
    flexGrow: 1,
    padding: "0rem 0rem 0rem 0.2rem",
    marginTop: "3rem",
    overflow: "hidden",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridMain: {
    backgroundColor: "black",
  },
  acc: {
    backgroundColor: "#F9FAFB",
    border: "none",
    position: "relative",
    top: "20px",
    right: "5px",
    border: "5px solid #F9FAFB",
    "&::before": {
      display: "none", // hides the default border on the AccordionSummary component
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  accLast: {
    backgroundColor: "#F9FAFB",
    border: "none",
    position: "relative",
    top: "20px",
    right: "5px",
    border: "5px solid #F9FAFB",
    "&::before": {
      display: "none", // hides the default border on the AccordionSummary component
    },
    "&.expanded": {
      margin: "auto",
      backgroundColor: "black",
    },
    marginBottom: "50px",
  },
  acc1: {
    padding: "0px 0px",
    height: "50px",
    marginBottom: "-15px",
  },
  acc2: {
    padding: "0px 0px",
    border: "5px solid transparent",
    marginBottom: "-10px",
  },
  icon: {
    position: "relative",
    bottom: "6px",
  },
  icon2: {
    position: "relative",
    top: "4px",
  },
  checkbox: {
    "&, & + .MuiFormControlLabel-label": {
      fontFamily: "unna",
      fontWeight: "bold",
      fontSize: "1.2rem",
    },
    "&.Mui-checked": {
      "&, & + .MuiFormControlLabel-label": {
        color: "#89A963",
      },
    },
  },
}));

function ProductFilter() {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  const [pageNumber, setPageNumber] = useState(1);

  const handlePrevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const handleNextPage = () => {
    const lastPage = Math.ceil(products / 20);
    if (pageNumber < lastPage) setPageNumber(pageNumber + 1);
  };
  const [expanded, setExpanded] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    if (isExpanded) {
      setExpanded([...expanded, panel]);
    } else {
      setExpanded(expanded.filter((p) => p !== panel));
    }
  };

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const handleClearAllClick = () => {
    setCheckedItems({});
  };
  return (
    <Box
      sx={{
        display: "flex",
        mt: { md: "-2rem", xs: "0px" },
        fontFamily: "unna",
        overflow: "hidden",
        height: { md: "1830px", xs: "2070px" },
        flexDirection: { md: "row", xs: "column" },
        marginBottom:"50px"
      }}
    >
      <Box
        sx={{
          width: { md: "20vw", xs: "95vw" },
          padding: "0px 0px 0px 20px",
          backgroundColor: "#F9FAFB",
          margin: "0px 0px 0px 50px",
          height: { md: "1500px", xs: "1150px" },
          position: "relative",
          top: { md: "50px", xs: "20px" },
          display: { md: "block" },
          left: { md: "0px", xs: "-40px" },
        }}
      >
       
        {/* <Button
          onClick={handleClearAllClick}
          sx={{
            padding: "0px",
            margin: "-15px 0px 5px 0px",
            width: "200px",
            position: "absolute",
            top: { md: "18px", xs: "95px" },
            right: "-105px",

            color: "#89a963",

            display: "flex",
            alignItems: "left",
            justifyContent: "left",

            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          Clear All
        </Button> */}

        <Typography style={{
            fontFamily:"inter !important",
            letterSpacing:"1.5px",
            position:"relative",
            top:"30px",
            textAlign:"center"
        }}>EFFORTLESS ELEGANCE</Typography>

        <CustomAccordion
          expanded={expanded.includes("panel1")}
          onChange={handleChange("panel1")}
          elevation={0}
          sx={{
            mt: "1rem",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F9FAFB",
          }}
          className={classes.acc}
          disableElevation
          square
        >
          <AccordionSummary
            expandIcon={
              expanded.includes("panel1") ? (
                <RemoveIcon className={classes.icon2}></RemoveIcon>
              ) : (
                <AddIcon className={classes.icon} />
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.acc1}
            elevation={0}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                fontFamily: "unna",
                marginBottom: "30px",
                marginTop: "20px",
              }}
            >
              BRANDS
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.acc2}>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  sx={{
                    fontFamily: "unna",
                  }}
                  key="1"
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      sx={{
                        "&.Mui-checked": {
                          "&, & + .MuiFormControlLabel-label": {
                            color: "#89A963",
                          },
                        },
                      }}
                      checked={checkedItems.item1}
                      onChange={handleCheckboxChange}
                      name="item1"
                    />
                  }
                  label="Jaquar"
                  checked={false}
                />
                <FormControlLabel
                  sx={{
                    fontFamily: "unna",
                  }}
                  key="2"
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      sx={{
                        "&.Mui-checked": {
                          "&, & + .MuiFormControlLabel-label": {
                            color: "#89A963",
                          },
                        },
                      }}
                      checked={checkedItems.item2}
                      onChange={handleCheckboxChange}
                      name="item2"
                    />
                  }
                  label="Essco"
                  checked={false}
                />
                <FormControlLabel
                  sx={{
                    fontFamily: "unna",
                  }}
                  key="3"
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      sx={{
                        "&.Mui-checked": {
                          "&, & + .MuiFormControlLabel-label": {
                            color: "#89A963",
                          },
                        },
                      }}
                      checked={checkedItems.item3}
                      onChange={handleCheckboxChange}
                      name="item3"
                    />
                  }
                  label="Viking"
                  checked={false}
                />
                <FormControlLabel
                  sx={{
                    fontFamily: "unna",
                  }}
                  key="4"
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      sx={{
                        "&.Mui-checked": {
                          "&, & + .MuiFormControlLabel-label": {
                            color: "#89A963",
                          },
                        },
                      }}
                      checked={checkedItems.item4}
                      onChange={handleCheckboxChange}
                      name="item4"
                    />
                  }
                  label="Nirali"
                  checked={false}
                />
                <FormControlLabel
                  sx={{
                    fontFamily: "unna",
                  }}
                  key="5"
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      sx={{
                        "&.Mui-checked": {
                          "&, & + .MuiFormControlLabel-label": {
                            color: "#89A963",
                          },
                        },
                      }}
                      checked={checkedItems.item5}
                      onChange={handleCheckboxChange}
                      name="item5"
                    />
                  }
                  label="ACPL"
                  checked={false}
                />
                <FormControlLabel
                  sx={{
                    fontFamily: "unna",
                  }}
                  key="6"
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      sx={{
                        "&.Mui-checked": {
                          "&, & + .MuiFormControlLabel-label": {
                            color: "#89A963",
                          },
                        },
                      }}
                      checked={checkedItems.item6}
                      onChange={handleCheckboxChange}
                      name="item6"
                    />
                  }
                  label="Artist"
                  checked={false}
                />
              </FormGroup>
            </FormControl>
          </AccordionDetails>
        </CustomAccordion>
        <CustomAccordion
          expanded={expanded.includes("panel2")}
          onChange={handleChange("panel2")}
          elevation={0}
          sx={{
            mt: "1rem",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F9FAFB",
          }}
          className={classes.acc}
        >
          <AccordionSummary
            expandIcon={
              expanded.includes("panel2") ? (
                <RemoveIcon className={classes.icon2}></RemoveIcon>
              ) : (
                <AddIcon className={classes.icon} />
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.acc1}
            elevation={0}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                fontFamily: "unna",
                marginBottom: "30px",
                marginTop: "20px",
              }}
            >
              LOCATIONS
            </Typography>
          </AccordionSummary>

          <AccordionDetails className={classes.acc2}>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  sx={{
                    fontFamily: "unna",
                  }}
                  key="71"
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      sx={{
                        "&.Mui-checked": {
                          "&, & + .MuiFormControlLabel-label": {
                            color: "#89A963",
                          },
                        },
                      }}
                      checked={checkedItems.item71}
                      onChange={handleCheckboxChange}
                      name="item71"
                    />
                  }
                  label="Livingroom"
                  checked={false}
                />
                <FormControlLabel
                  sx={{
                    fontFamily: "unna",
                  }}
                  key="7"
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      sx={{
                        "&.Mui-checked": {
                          "&, & + .MuiFormControlLabel-label": {
                            color: "#89A963",
                          },
                        },
                      }}
                      checked={checkedItems.item7}
                      onChange={handleCheckboxChange}
                      name="item7"
                    />
                  }
                  label="Bedroom"
                  checked={false}
                />
                <FormControlLabel
                  sx={{
                    fontFamily: "unna",
                  }}
                  key="8"
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      sx={{
                        "&.Mui-checked": {
                          "&, & + .MuiFormControlLabel-label": {
                            color: "#89A963",
                          },
                        },
                      }}
                      checked={checkedItems.item8}
                      onChange={handleCheckboxChange}
                      name="item8"
                    />
                  }
                  label="Bathroom"
                  checked={false}
                />
                <FormControlLabel
                  sx={{
                    fontFamily: "unna",
                  }}
                  key="9"
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      sx={{
                        "&.Mui-checked": {
                          "&, & + .MuiFormControlLabel-label": {
                            color: "#89A963",
                          },
                        },
                      }}
                      checked={checkedItems.item9}
                      onChange={handleCheckboxChange}
                      name="item9"
                    />
                  }
                  label="Parking"
                  checked={false}
                />
              </FormGroup>
            </FormControl>
          </AccordionDetails>
        </CustomAccordion>
        <CustomAccordionLast
          expanded={expanded.includes("panel3")}
          onChange={handleChange("panel3")}
          elevation={0}
          sx={{
            mt: "1rem",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#F9FAFB",
          }}
          className={classes.accLast}
        >
          <AccordionSummary
            expandIcon={
              expanded.includes("panel3") ? (
                <RemoveIcon className={classes.icon2}></RemoveIcon>
              ) : (
                <AddIcon className={classes.icon} />
              )
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            className={classes.acc1}
            elevation={0}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                fontFamily: "unna",
                marginBottom: "30px",
                marginTop: "20px",
              }}
            >
              SIZES
            </Typography>
          </AccordionSummary>

          <AccordionDetails className={classes.acc2}>
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  sx={{
                    fontFamily: "unna",
                  }}
                  key="10"
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      sx={{
                        "&.Mui-checked": {
                          "&, & + .MuiFormControlLabel-label": {
                            color: "#89A963",
                          },
                        },
                      }}
                      checked={checkedItems.item10}
                      onChange={handleCheckboxChange}
                      name="item10"
                    />
                  }
                  label="20 X 1000 MM"
                  checked={false}
                />
                <FormControlLabel
                  sx={{
                    fontFamily: "unna",
                  }}
                  key="11"
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      sx={{
                        "&.Mui-checked": {
                          "&, & + .MuiFormControlLabel-label": {
                            color: "#89A963",
                          },
                        },
                      }}
                      checked={checkedItems.item11}
                      onChange={handleCheckboxChange}
                      name="item11"
                    />
                  }
                  label="35 X 1000 MM"
                  checked={false}
                />
                <FormControlLabel
                  sx={{
                    fontFamily: "unna",
                  }}
                  key="12"
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      sx={{
                        "&.Mui-checked": {
                          "&, & + .MuiFormControlLabel-label": {
                            color: "#89A963",
                          },
                        },
                      }}
                      checked={checkedItems.item12}
                      onChange={handleCheckboxChange}
                      name="item12"
                    />
                  }
                  label="56 X 1000 MM"
                  checked={false}
                />
                <FormControlLabel
                  sx={{
                    fontFamily: "unna",
                  }}
                  key="13"
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      sx={{
                        "&.Mui-checked": {
                          "&, & + .MuiFormControlLabel-label": {
                            color: "#89A963",
                          },
                        },
                      }}
                      checked={checkedItems.item13}
                      onChange={handleCheckboxChange}
                      name="item13"
                    />
                  }
                  label="23 X 1000 MM"
                  checked={false}
                />
              </FormGroup>
            </FormControl>
          </AccordionDetails>
        </CustomAccordionLast>

       
      </Box>
      <Box
        sx={{
          fontFamily: "unna",
          width: { md: "75vw", xs: "100vw" },
          position: "relative",
          bottom: "25px",
        }}
      >
        <div className={!isScreenSmall ? classes.root : classes.root1}>
          <Grid container spacing={!isScreenSmall ? 2 : 1}>
            {Products.map((item) => (
              <Grid item xs={6} md={4}>
                <div className={classes.paper}>
                  <>
                    <ProductCard
                      imageSrc={item.image}
                      text1="BUTTON DOWN DRESS"
                      text2="RS . 186.00"
                    />
                  </>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ mx: "0.5rem" }}>
            <img
              src=""
              alt="Prev Page"
              onClick={handlePrevPage}
              style={{
                height: "35px",
                position: "relative",
                top: "25px",
                left: "35px",
              }}
            />
          </Box>

          <Box
            sx={{
              height: "35px",
              width: "35px",
              position: "relative",
              top: "23px",
              left: "35px",
              border: "1px solid grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "unna",
              backgroundColor: "#89A963",
              color: "white",
            }}
          >
            1
          </Box>
          <Box
            sx={{
              height: "35px",
              width: "35px",
              position: "relative",
              top: "23px",
              left: "35px",
              border: "1px solid grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "unna",
              marginLeft: "10px",
            }}
          >
            2
          </Box>
          <Box
            sx={{
              height: "35px",
              width: "35px",
              position: "relative",
              top: "23px",
              left: "35px",
              border: "1px solid grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "unna",
              marginLeft: "10px",
            }}
          >
            ...
          </Box>
          <Box
            sx={{
              height: "35px",
              width: "35px",
              position: "relative",
              top: "23px",
              left: "35px",
              border: "1px solid grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "unna",
              marginLeft: "10px",
            }}
          >
            15
          </Box>
          <Box sx={{ mx: "0.5rem" }}>
            <img
              src=""
              alt="Next Page"
              onClick={handleNextPage}
              style={{
                height: "35px",
                position: "relative",
                top: "25px",
                left: "35px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductFilter;
