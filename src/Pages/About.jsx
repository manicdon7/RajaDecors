import React from 'react'
import img from '../assets/WhatsApp Image 2024-05-08 at 11.44.10_e34a28c8.jpg'
import hall from '../assets/hall.png';
import peacock from '../assets/peacock.png';

const About = () => {
  return (
    <div>
        <div>
            <img src={img} alt='img' className='h-full w-full'/>
        </div>
        <div>
            <div className='ml-32 my-10'>
            <p className='text-5xl text-yellow-600 font-serif'>Who are we</p>
            <div>
                <h1 className='text-5xl text-[#002092] font-serif text-left my-10'>Crafting Unforgettable Moments <br/>with Floral Excellence</h1>
            </div>
            <div className='my-5 mx-20'>
                <img src={hall} alt='hall' className='w-10/12 h-96 border-8 rounded-3xl border-yellow-500 '/>
            </div>
            </div>
            <div>
                <p className='mx-32 text-2xl font-normal my-10'>At Raja Decors, we believe that flowers have the power to transform ordinary moments into extraordinary experiences. Our commitment to "Crafting Unforgettable Moments with Floral Excellence" is more than just a tagline—it's the cornerstone of everything we do.</p>
            </div>
        <div className='flex justify-end mx-20'>
            <img src={peacock} alt="logo" className='h-60 w-60 md:block hidden' />
        </div>
        </div>
    </div>
  )
}

export default About