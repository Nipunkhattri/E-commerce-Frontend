import React from 'react';
import video from "./videoMain.mp4"

const Card3 = () => {
  return (
    <div className='card3'>
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Card3;
