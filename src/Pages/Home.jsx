import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bg1 from '../assets/Raja_Decors_logo.png';
import bg2 from '../assets/WhatsApp Image 2024-05-08 at 11.44.09_15330b37.jpg';
import bg3 from '../assets/WhatsApp Image 2024-05-08 at 11.44.09_827abe77.jpg';
import bg4 from '../assets/WhatsApp Image 2024-05-08 at 11.44.10_9af52197.jpg';
import bg5 from '../assets/AboutusLanding.jpg';
import who from '../assets/whowe.png';
import hall from '../assets/hall.png';
import Cards from '../Components/Cards';
import Services from '../Components/Service';
import Offer from '../Components/Offer';
import contacting from '../assets/contactusimg.png';

const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = [bg2, bg3, bg4, bg5];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className="relative h-3/4 pt-5">
      <div>

        <Carousel
          autoPlay={true}
          interval={5000}
          showThumbs={false}
          infiniteLoop={true}
          stopOnHover={false}
        >
          {backgrounds.map((background, index) => (
            <div key={index}>
              <img src={background} alt={`Background ${index}`} className="w-full h-2/4" />
            </div>
          ))}
        </Carousel>
        <div className='absolute top-0 py-80 flex flex-col justify-center items-center text-white font-semibold text-3xl md:text-6xl md:leading-normal md:px-20'>
          <p className='drop-shadow-2xl shadow-2xl border-gray-400 font-serif'>Welcome to Raja Decors - Where Dreams Blossom into Reality</p>
        </div>
      </div>
      <div className='heading text-2xl md:text-4xl mx-4 md:mx-40 font-semibold my-8 text-center'>
        Available Services
      </div>
      <div className='z-20 pt-5'>
        <Cards />
      </div>
      <div>
        <div>
          <p className='heading text-3xl text-blue-600 font-semibold mx-10 md:mx-32 mt-16 mb-10'>WHO WE ARE</p>

          <div className='mx-10 md:mx-32 my-2 md:space-x-28 gap-10 md:gap-0 grid md:grid-cols-2 grid-cols-1'>
            <p className='heading md:text-6xl text-2xl text-[#FD8901] font-semibold'>Raja Decors - Where Every Petal Paints Your Perfect Day</p>
            <img src={who} alt="who we are" className='border-4 border-[#FFD700]' />
          </div>
          <div className='mx-10 md:mx-32 mt-20 md:space-x-10 gap-10 md:gap-0 grid md:grid-cols-2 grid-cols-1'>
            <img src={hall} alt="hall" className='border-4 border-[#FFD700]' />
            <div>
              <p className='font-extralight md:text-3xl text-xl poppins-regular'>From intimate gatherings to grand celebrations, we are dedicated to bringing your unique vision to life. Our passion for floral artistry drives us to create bespoke arrangements that perfectly complement your style, theme, and ambiance, ensuring every detail is a reflection of your personality and taste.</p>
              <div className='grid justify-between md:grid-cols-2 grid-cols-1'>
                <div>
                  <button className='border border-[#FD8901] bg-[#FFEF99] hover:bg-[#FD8901] hover:text-white px-3 py-2 my-5 rounded-3xl font-semibold'>Know More About Us</button>
                </div>
              </div> 
            </div>
          </div>
        </div>
        <div className='z-30 mt-20'>
          <Services />
        </div>
        <div>
          <Offer />
        </div>
        <div>
            <div className='mx-4 my-20'>
                <div>
                    <p className='text-4xl text-center text-[#FD8901] ubuntu-bold'>
                        CONTACT US
                    </p>
                </div>
                <div className='flex md:justify-center md:gap-10 md:flex-row flex-col'>
                    <div className=''>
                        <img src={contacting} alt='contactimg' className='py-10 rounded-2xl' />
                    </div>
                    <div className='py-10'>
                        <div>
                            <p className='text-[#FD8901] ubuntu-bold text-3xl text-center'>Visit us</p>
                        </div>
                        <p className='poppins-regular md:text-4xl text-xl text-center py-6'>
                        No:11/163, Vadakkupattu mainroad, Kovilambakkam,
                        <br/>Chennai-600129
                        </p>

                        <div className=''>
                            <p className='text-[#FD8901] ubuntu-bold text-3xl text-center'>Contact</p>
                            <div className='poppins-regular md:text-4xl text-xl text-center py-2'>rajadecorator1980@gmail.com</div>
                            <p className='poppins-regular md:text-4xl text-xl text-center py-2'>+91 99402 29923</p>
                            <p className='poppins-regular md:text-4xl text-xl text-center py-2'>+91 98406 01980</p>
                            <div className='space-y-5'>
                                <input placeholder='   Email' className='w-80 h-16 md:w-full py-2 rounded-2xl border-2 hover:border-[#FD8901] bg-[#F2F2F2]' /> <br />
                                <textarea placeholder='   Message' className='py-3 h-28 w-80 md:w-full rounded-2xl border-2 hover:border-[#FD8901] bg-[#F2F2F2]' /> <br/>
                                <button className='border border-[#FD8901] bg-[#FFEF99] hover:bg-[#FD8901] hover:text-white px-16 py-2 my-5 rounded-3xl font-semibold'>Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
