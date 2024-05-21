import React from 'react'
import servicepng from '../assets/service.png';
import Service1 from '../Components/Services1';
import whatsApp from '../assets/WhatsApp.png'

const Services = () => {
  return (
    <div className='mt-10'>
      <div className='fixed top-72 right-0 z-50'>
        <img className='bg-[#3DDA3A] hover:pl-6 hover:pr-3 hover:cursor-pointer py-2 pl-3 rounded-l-full' src={whatsApp} alt="whatsapp" />
      </div>
      <div className='flex justify-center'>
        <div className='bg-cover bg-center w-screen' style={{backgroundImage: `url(${servicepng})`}}>
          <div className='text-white text-2xl md:text-7xl font-bold py-24 md:py-56 text-center'>
           <p className='border-2 border-white mx-4 md:mx-40 py-10 md:py-8 rounded-2xl heading' style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>Raja Decors Service</p>
          </div>
        </div>
      </div>
      <Service1 />
      </div>
  )
}

export default Services;