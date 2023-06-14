import React, { useEffect } from "react";

import video from "../assets/video.mp4";

import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import VideoPlayer from "./Store/VideoPlayer";
import ImageCollage from "./Homepage/ImageCollage";
import VideoPlayer2 from "./Homepage/VideoPlayer2";
import ProductGrid1 from "./Homepage/ProductGrid1";
import ProductGrid2 from "./Homepage/ProductGrid2";
import ProductGrid3 from "./Homepage/ProductGrid3";
import Carousel from "./Homepage/Carousel";
import StoreGrid from "./Store/StoreGrid";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export default function Store() {
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
      <StoreGrid></StoreGrid>
      
    </>
  );
}
