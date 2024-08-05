import React, { useState } from 'react';
import './ImageStack.css'; // Assuming you are using CSS for styling
import { nextIcon, prevIcon } from '../../Images/Icons';

const ImageStack = ({ images }) => {
    console.log("nish images", images)
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="arrow left-arrow" onClick={handlePrevClick}>
        {prevIcon}
      </button>
      <div className="image-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </div>
      <button className="arrow right-arrow" onClick={handleNextClick}>
        {nextIcon}
      </button>
    </div>
  );
};

export default ImageStack;
