import React, { useState, useEffect } from 'react';

const Slideshow = () => {
  const images = [
    './assets/logomahindra.png',
    './assets/carromahindra1.jpg',
    './assets/carromahindra2.jpg',
    './assets/carromahindra3.jpg'
  ];
  const [index, setIndex] = useState(0);
  const time = 3000;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, time);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <div>
      <img src={images[index]} alt="Slideshow" id="imgbanner" />
    </div>
  );
};

export default Slideshow;