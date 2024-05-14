import React from 'react'
import logo from '../assets/Raja_Decors_logo.png'
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import linkedIn from '../assets/linkedIn.png';
import youtube from '../assets/youtube.png';
import logo1 from '../assets/Raja_Decors_logo gold.png';

const Footer = () => {
  return (
    <div className='bg-blue-600 text-white'>
        <div className='flex items-center justify-center'>
            <img className='h-24 md:w-0 w-36 my-3' src={logo1} alt="Raja Decors" />
        </div>
        <div className='list-none flex justify-center gap-2 md:mx-0 mx-2 md:gap-20 text-lg'>
            <a href=''>Home</a>
            <a href=''>About Us</a>
            <a href='/services'>Services</a>
            <a href=''>Gallery</a>
            <a href='/contact'>Contact</a>
        </div>
        <div className='flex justify-center gap-8 mx-4 md:mx-0'>
            <a href=''>
                <img className='h-16 my-8'  src={facebook} alt='facebook'/>
            </a>
            <a href=''>
                <img className='h-16 my-8'  src={twitter} alt='twitter'/>
            </a>
            <a href=''>
                <img className='h-16 my-8'  src={linkedIn} alt='linkedIn'/>
            </a>
            <a href=''>
                <img className='h-16 my-8'  src={youtube} alt='youtube'/>
            </a>
        </div>
        <div>
            <p className='md:text-xl text-lg text-center pb-8'>
            ©<span className='text-amber-500'>Raja Decors</span>. all rights reserved
            </p>
        </div>
    </div>
  )
}

export default Footer;