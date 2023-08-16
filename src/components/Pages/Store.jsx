import React, { useEffect } from "react";

import video from "../assets/video.mp4";

import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";


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
    <div className="storecontainer">
    <div className='rev-homestore'>
      <h3 className='h11'>A world of sunlit peaks and white clouds</h3>
      <h2 className='h22'>Heart In the Highlands</h2>
      <button className='btn11'>SHOP NOW</button>
        </div>
    </div>
      <StoreGrid></StoreGrid>
      
    </>
  );
}
