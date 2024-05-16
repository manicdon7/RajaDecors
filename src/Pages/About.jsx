import React from 'react'
import img from '../assets/WhatsApp Image 2024-05-08 at 11.44.10_e34a28c8.jpg'
import hall from '../assets/hall.png';

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
        </div>
    </div>
  )
}

export default About