import React from 'react';
import logo from '../assets/Raja_Decors_logo.png'

const Navigation = () => {
  return (
    <div className='py-3'>
        <div className='flex items-center justify-center'>
            <img className='h-24' src={logo} alt="Raja Decors" />
        </div>
        <div className='list-none flex justify-center text-lg gap-2 md:mx-0 mx-2 md:gap-32 md:text-2xl'>
            <a href='/'>Home</a>
            <a href='about'>About Us</a>
            <a href='/services'>Services</a>
            <a href='/gallery'>Gallery</a>
            <a href='/contact'>Contact</a>
        </div>
    </div>
  )
}

export default Navigation