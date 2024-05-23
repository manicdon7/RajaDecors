import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import servicepng from '../assets/service.png';
import mail from '../assets/mail.png';
import phone from '../assets/phone.png';
import peacockimg from '../assets/peacockwatermark-2 1.png';
import whatsApp from '../assets/WhatsApp.png';
import contacting from '../assets/contactusimg.png';

const Contactus = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o15u8dr', 'template_onogqzh', form.current, 'tQswPx-gvmxTNRVOt')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again later.');
            });

        e.target.reset(); // Reset form fields after submission
    };

    return (
        <div>
            <div className='flex justify-center mt-3'>
                <div className='bg-cover bg-center w-screen' style={{ backgroundImage: `url(${servicepng})` }}>
                    <div className='text-white text-2xl md:text-7xl font-bold py-24 md:py-40 text-center'>
                        <p className='border-2 border-white mx-4 md:mx-40 py-10 md:py-8 rounded-2xl'>Contact Us</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='mx-4 md:mx-32 my-20'>
                    <div>
                        <p className='text-[#FD8901] font-bold text-4xl text-center md:text-left md:text-6xl'>Visit us</p>
                    </div>
                    <p className='font-medium text-xl text-center md:text-left md:text-2xl py-6'>
                        No:11/163, Vadakkupattu mainroad, <br />
                        Kovilambakkam, <br />Chennai-600129
                    </p>
                    <div>
                        <p className='text-[#FD8901] font-bold text-4xl text-center md:text-left md:text-6xl'>Contact</p>
                        <div className=''>
                            <div className='flex space-x-7 items-center'>
                                <img src={mail} alt='mail' className='h-7 w-7 my-3 md:block hidden' />
                                <p className='font-medium text-xl text-center md:text-left md:text-2xl py-6'>rajadecorator1980@gmail.com</p>
                            </div>
                            <div className='flex space-x-7 items-center'>
                                <img src={phone} alt='phone' className='h-7 w-7 my-1 md:block hidden' />
                                <p className='font-medium text-xl text-center md:text-left md:text-2xl py-6'>+91 99402 29923, +91 98406 01980</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={peacockimg} alt='peacock' className='md:mt-32 md:mx-20 md:block hidden'/>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className='space-y-5 mx-5 md:mx-32 mb-20'>
                <h1 className='font-bold text-center md:text-left text-4xl md:text-6xl text-[#FD8901]'>Email us</h1>
                <input name='from_name' placeholder='   name' type='text' className='w-80 md:w-6/12 py-3 rounded-lg border-2 hover:border-[#FD8901] bg-[#F2F2F2]' required /> <br />
                <input name='phone' placeholder='   phone' type='text' className='w-80 md:w-6/12 py-3 rounded-lg border-2 hover:border-[#FD8901] bg-[#F2F2F2]' required /> <br />
                <input name='emailid' placeholder='   Email' type='email' className='w-80 md:w-6/12 py-3 rounded-lg border-2 hover:border-[#FD8901] bg-[#F2F2F2]' required /> <br />
                <textarea name='message' placeholder='   Message' className='py-3 w-80 md:w-6/12 rounded-lg border-2 hover:border-[#FD8901] bg-[#F2F2F2]' required /> <br />
                <input type='hidden' name='to_name' value='RajaDecors' />
                <button type='submit' className='py-3 w-80 md:w-6/12 rounded-lg border-2 bg-[#FD8901] text-white hover:border-[#FD8901] font-semibold'>Send Message</button>
            </form>
        </div>
    );
}

export default Contactus;
