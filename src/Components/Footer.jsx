import React from 'react'
import logo from '../assets/Raja_Decors_logo.png'
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import linkedIn from '../assets/linkedIn.png';
import youtube from '../assets/youtube.png';
import logo1 from '../assets/Raja_Decors_logo gold.png';

const Footer = () => {
    return (
        <div className='bg-[#016795] text-white'>
            <div className='flex items-center justify-center'>
                <img className='h-24 md:w-36 w-36 my-3' src={logo1} alt="Raja Decors" />
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 space-y-2'>
                <div className='list-none flex justify-center md:text-2xl font-serif gap-2 md:mx-0 mx-2 md:gap-20 text-lg'>
                    <ul className='space-y-2'>
                        <p>
                            <a href='' className='text-white hover:text-[#FD8901]'>Home</a> <br />
                        </p>
                        <p>
                            <a href='' className='text-white hover:text-[#FD8901]'>About Us</a> <br />
                        </p>
                        <p>
                            <a href='/services' className='text-white hover:text-[#FD8901]'>Services</a> <br />
                        </p>
                        <p>
                            <a href='' className='text-white hover:text-[#FD8901]'>Gallery</a> <br />
                        </p>
                        <p>
                            <a href='/contact' className='text-white hover:text-[#FD8901]'>Contact</a> <br />
                        </p>
                    </ul>
                </div>
                <div className='space-y-4 text-center my-4'>
                    <p className='font-semibold text-3xl text-[#FD8901]'>Visit us</p>
                    <p className='text-xl'>
                        No:11/163 vadakkupattu <br />
                        mainroad,kovilambakkam,chennai-600129
                    </p>
                </div>
                <div className='space-y-2 text-center my-4'>
                    <p className='font-semibold text-3xl text-[#FD8901]'>Contact</p>
                    <p>
                        <a href="mailto:rajadecorator1980@gmail.com" className='text-xl'>rajadecorator1980@gmail.com</a> <br />
                    </p>
                    <p href="" className='text-xl'>+91 99402 29923</p>
                </div>
            </div>
            <div className='flex justify-center gap-8 mx-4 md:mx-0'>
                <a href=''>
                    <img className='h-16 my-8' src={facebook} alt='facebook' />
                </a>
                <a href=''>
                    <img className='h-16 my-8' src={twitter} alt='twitter' />
                </a>
                <a href=''>
                    <img className='h-16 my-8' src={linkedIn} alt='linkedIn' />
                </a>
                <a href=''>
                    <img className='h-16 my-8' src={youtube} alt='youtube' />
                </a>
            </div>
            <div>
                <p className='md:text-xl text-lg text-center pb-8'>
                    ©<span className='text-[#FD8901]'>Raja Decors</span>. all rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer;