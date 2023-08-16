import React, { useEffect } from "react";


import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import VideoPlayer from "./Homepage/VideoPlayer";
import VideoPlayer2 from "./Homepage/VideoPlayer2";
import ProductGrid1 from "./Homepage/ProductGrid1";
import ProductGrid3 from "./Homepage/ProductGrid3";


const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export default function Homepage() {
  useEffect(() => {
    scrollToTop();
  }, []);

  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <VideoPlayer
        src={video}
        title="CURATED ELEGANCE , DEFINED BY TIMELESSNESS"
        subtitle="CLASS & CHIC"
        buttonLabel="Shop Now"
      />

      <VideoPlayer2
        src={video}
        title="EFFORTLESS ELEGANCE"
        subtitle="Elevated Basics"
        buttonLabel="Shop Now"
      />
      <ProductGrid1></ProductGrid1>
      <ProductGrid3></ProductGrid3>
    </>
  );
}
