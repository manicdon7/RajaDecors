import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bg1 from '../assets/Raja_Decors_logo.png';
import bg2 from '../assets/WhatsApp Image 2024-05-08 at 11.44.09_15330b37.jpg';
import bg3 from '../assets/WhatsApp Image 2024-05-08 at 11.44.09_827abe77.jpg';
import bg4 from '../assets/WhatsApp Image 2024-05-08 at 11.44.10_9af52197.jpg';
import bg5 from '../assets/WhatsApp Image 2024-05-08 at 11.44.10_e34a28c8.jpg';

const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = [bg2, bg3, bg4, bg5];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, [backgrounds.length]); // Run effect only once on component mount and whenever backgrounds.length changes

  return (
    <div className="relative h-3/4 py-5 ">
      <div>

      <Carousel
        autoPlay={true}
        interval={5000} // Auto-slide interval in milliseconds
        showThumbs={false} // Hide image indicators
        infiniteLoop={true} // Loop through images infinitely
        stopOnHover={false} // Do not stop auto-play on hover
      >
        {backgrounds.map((background, index) => (
          <div key={index}>
            <img src={background} alt={`Background ${index}`} className="w-full h-2/4" />
          </div>
        ))}
      </Carousel>
      <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white font-semibold text-3xl md:text-6xl md:leading-normal md:px-20 bg-black bg-opacity-10'>
        Welcome to Raja Decors - Where Dreams Blossom into Reality
      </div>
        </div>
    </div>
  );
};

export default Home;
