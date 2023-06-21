import React, { useState } from 'react';
import './Carousel.css'; // Import the CSS file for styling
import dum1 from './img.png'

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselData = [
    {
      image: {dum1},
      text: 'Page 1',
    },
    {
      image: 'image2.jpg',
      text: 'Page 2',
    },
    {
      image: 'image3.jpg',
      text: 'Page 3',
    },
    {
      image: 'image4.jpg',
      text: 'Page 4',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content">
        {carouselData.map((item, index) => (
          <div
            className={`carousel-page ${index === activeIndex ? 'active' : ''}`}
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="carousel-text">{item.text}</div>
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {carouselData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <div className="carousel-arrows">
        <span className="arrow prev" onClick={handlePrev}>&lt;</span>
        <span className="arrow next" onClick={handleNext}>&gt;</span>
      </div>
    </div>
  );
};

export default Carousel;
