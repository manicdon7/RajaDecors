import React from 'react';
import logo from '../assests/Raja_Decors_logo.png'

const Navigation = () => {
  return (
    <div className=''>
        <div className='flex items-center justify-center'>
            <img className='h-36' src={logo} alt="Raja Decors" />
        </div>
        <div className='list-none flex justify-center gap-2 md:mx-0 mx-2 md:gap-20 text-lg'>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Gallery</li>
            <li>Contact</li>
        </div>
    </div>
  )
}

export default Navigation