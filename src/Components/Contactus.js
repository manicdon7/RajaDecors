import React from 'react'
import contacting from '../assets/contactusimg.png';

const Contactus = () => {
    return (
        <div>
            <div className='mx-10 md:mx-32 my-20'>
                <div>
                    <p className='text-4xl text-center text-[#FD8901] ubuntu-bold'>
                        CONTACT US
                    </p>
                </div>
                <div className='flex md:justify-center md:gap-10 md:flex-row flex-col'>
                    <div className=''>
                        <img src={contacting} alt='contactimg' className='py-10  rounded-lg' />
                    </div>
                    <div className='py-10'>
                        <div>
                            <p className='text-[#FD8901] ubuntu-bold text-3xl text-center'>Visit us</p>
                        </div>
                        <p className='poppins-regular text-4xl py-6 text-center'>
                        No:11/163, Vadakkupattu mainroad, Kovilambakkam,
                        <br/>Chennai-600129
                        </p>
                        <div>
                            <p className='text-[#FD8901] ubuntu-bold text-3xl text-center'>Contact</p>
                            <div className='poppins-regular text-4xl py-3 text-center'>rajadecorator1980@gmail.com</div>
                            <p className='poppins-regular text-4xl py-3 text-center'>+91 99402 29923</p>
                            <p className='poppins-regular text-4xl py-3 text-center'>+91 98406 01980</p>
                            <div className='space-y-5'>
                                <input placeholder='   Email' className='w-72 h-16 md:w-full py-2 rounded-2xl border-2 hover:border-[#FD8901] bg-[#F2F2F2]' /> <br />
                                <textarea placeholder='   Message' className='py-3 h-28 w-72 md:w-full rounded-2xl border-2 hover:border-[#FD8901] bg-[#F2F2F2]' /> <br/>
                                <button className='border border-[#FD8901] bg-[#FFEF99] hover:bg-[#FD8901] hover:text-white px-16 py-2 my-5 rounded-3xl font-semibold'>Submit</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactus