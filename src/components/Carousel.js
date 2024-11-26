import React, { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = () => {
  const images = [
    "/Asserts/wedding1.webp",
    "/Asserts/wedding2.jpeg",
    "/Asserts/wedding3.jpeg",
    "/Asserts/wedding4.jpeg",
     "/Asserts/wedding5.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 1500);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getClassName = (index) => {
    if (index === currentIndex) return "carousel-image active";
    if (index === (currentIndex - 1 + images.length) % images.length)
      return "carousel-image prev";
    if (index === (currentIndex + 1) % images.length)
      return "carousel-image next";
    return "carousel-image hidden";
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
       
        {images.map((image, index) => (
          <div className={getClassName(index)} key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Carousel;
