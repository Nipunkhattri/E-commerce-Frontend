import React, { useEffect } from "react";

import video from "../assets/video.mp4";

import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import VideoPlayer from "./About/VideoPlayer";

import ProductGrid1 from "./About/ProductGrid1";
import ProductGrid3 from "./About/ProductGrid3";
import ProductGrid4 from "./About/ProductGrid4";
import ProductGrid5 from "./About/ProductGrid5";
import Carousel from "./About/Carousel";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export default function About() {
  useEffect(() => {
    scrollToTop();
  }, []);

  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <VideoPlayer
        src={video}
        title="A WORLD OF SUNLIT PEAKS AND WHITE CLOUDS"
        subtitle="HEART IN THE HIGHLANDS"
        buttonLabel="Shop Now"
      />
      <ProductGrid3></ProductGrid3>
      <ProductGrid4></ProductGrid4>
      <ProductGrid1></ProductGrid1>
      <ProductGrid5></ProductGrid5>

     
    </>
  );
}
