import React from 'react'
import servicepng from '../assets/service.png';
import mail from '../assets/mail.png';
import phone from '../assets/phone.png';
import peacockimg from '../assets/peacockwatermark-2 1.png';

const Contactus = () => {
    return (
        <div>
            <div className='flex justify-center mt-3'>
                <div className='bg-cover bg-center w-screen' style={{ backgroundImage: `url(${servicepng})` }}>
                    <div className='text-white text-2xl md:text-7xl font-bold py-24 md:py-40 text-center'>
                        <p className='border-2 border-white mx-4 md:mx-40 py-10 md:py-8 rounded-2xl'>Contact Us</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2'>
            <div className='mx-10 md:mx-32 my-20'>
                <div>
                    <p className='text-[#FD8901] font-bold text-6xl'>Visit us</p>
                </div>
                <p className='font-medium text-2xl py-6'>
                    No:11/163, Vadakkupattu mainroad, <br />
                    Kovilambakkam, Chennai-600129

                </p>
                <div>
                    <p className='text-[#FD8901] font-bold text-6xl my-5'>Contact</p>
                    <div>
                        <div className='flex space-x-7'>
                            <img src={mail} alt='mail' className='h-7 w-7 my-3' />
                            <p className='font-medium text-2xl pt-3 py-1'>rajadecorator1980@gmail.com</p>
                        </div>
                        <div className='flex space-x-7'>
                            <img src={phone} alt='phone' className='h-7 w-7 my-1' />
                            <p className='font-medium text-2xl py-1'>+91 99402 29923, +91 98406 01980</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={peacockimg} alt='peacock' className='mt-32 mx-20'/>
            </div>
            </div>
            <div className='space-y-5 mx-32 mb-20'>
                        <h1 className='font-bold text-6xl text-[#FD8901]'>Email us</h1>
                        <input placeholder='   name' type='email' className='w-80 md:w-6/12 py-3 rounded-lg border-2 hover:border-[#FD8901] bg-[#F2F2F2]' /> <br />
                        <input placeholder='   phone' type='number' className='w-80 md:w-6/12 py-3 rounded-lg border-2 hover:border-[#FD8901] bg-[#F2F2F2]' /> <br />
                        <input placeholder='   Email' type='text' className='w-80 md:w-6/12 py-3 rounded-lg border-2 hover:border-[#FD8901] bg-[#F2F2F2]' /> <br />
                        <textarea placeholder='   Message' className='py-3 w-80 md:w-6/12 rounded-lg border-2 hover:border-[#FD8901] bg-[#F2F2F2]' /> <br />
                        <button className='py-3 w-80 md:w-6/12 rounded-lg border-2 bg-[#FD8901] text-white hover:border-[#FD8901] bg-[#F2F2F2]font-semibold'>Send Message</button>
                    </div>
        </div>
    )
}

export default Contactus