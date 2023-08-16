import React, { useEffect } from "react";


import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import VideoPlayer from "./ProductFIlter/VideoPlayer";
import ImageCollage from "./Homepage/ImageCollage";
import VideoPlayer2 from "./Homepage/VideoPlayer2";
import ProductGrid1 from "./Homepage/ProductGrid1";
import ProductGrid3 from "./Homepage/ProductGrid3";


const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export default function Collection() {
  useEffect(() => {
    scrollToTop();
  }, []);

  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      
    </>
  );
}
