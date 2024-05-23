import React from 'react';
import img1 from '../assets/AboutusLanding.jpg';
import img2 from '../assets/WhatsApp Image 2024-05-08 at 11.44.09_15330b37.jpg'

const Gallery = () => {
  return (
    <div>
        <div className='my-10'>
            <ul className='heading flex items-center justify-center md:gap-10 font-semibold text-base gap-3 md:text-3xl'>
                <li>All</li>
                <li>Wedding</li>
                <li>Enterance</li>
                <li>Corporate</li>
                <li>Birth Day</li>
            </ul>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-5 md:mx-10'>
            <div className='my-5'>
                <div className='w-full h-64 md:h-96'>
                    <img src={img1} alt="img1" className='w-full h-full object-cover rounded-3xl border-4 border-[#FFD700]'/>
                </div>
            </div>
            <div className='my-5'>
                <div className='w-full h-64 md:h-96'>
                    <img src={img2} alt="img2" className='w-full h-full object-cover rounded-3xl border-4 border-[#FFD700]'/>
                </div>
            </div>
            <div className='my-5'>
                <div className='w-full h-64 md:h-96'>
                    <img src={img1} alt="img1" className='w-full h-full object-cover rounded-3xl border-4 border-[#FFD700]'/>
                </div>
            </div>
            <div className='my-5'>
                <div className='w-full h-64 md:h-96'>
                    <img src={img2} alt="img2" className='w-full h-full object-cover rounded-3xl border-4 border-[#FFD700]'/>
                </div>
            </div>
            <div className='my-5'>
                <div className='w-full h-64 md:h-96'>
                    <img src={img1} alt="img1" className='w-full h-full object-cover rounded-3xl border-4 border-[#FFD700]'/>
                </div>
            </div>
            <div className='my-5'>
                <div className='w-full h-64 md:h-96'>
                    <img src={img2} alt="img2" className='w-full h-full object-cover rounded-3xl border-4 border-[#FFD700]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery;
