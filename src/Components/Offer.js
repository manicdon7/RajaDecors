import React from 'react'
import offer1 from '../assets/whatweoffer1.png';
import offer2 from '../assets/whatweoffer2.png';
import offer3 from '../assets/whatweoffer3.png';
import offer4 from '../assets/whatweoffer4.png';
import offer5 from '../assets/whatweoffer5.png'

const Offer = () => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-10 md:mx-32 mx-10 md:mt-40 mt-10'>
        <div className='md:w-80 md:m-5 mx-3'>
            <p className='font-semibold text-4xl heading my-2 text-blue-700'>
            What We Offer
            </p>
            <h1 className='font-semibold text-2xl font-serif text-[#FD8901] my-2'>
            We Offer a Range of Event.
            </h1>
            <p className='font-light md:text-lg text-base poppins-regular my-2 text-left'>
            Lorem ipsum dolor sit amet consectetur adipiscing 
            elit sed pharetra urna ac lobortis vestibulum nisl 
            elit iaculis velit ac vulputate ante odio a sem cras
             orci tortor feugiat a cursus ac mollis sit amet purus.
            </p>
        </div>
        <div className=''>
            <img className='border-8 border-yellow-400 rounded-2xl hover:scale-105 transition transform' src={offer1} alt='offer1'/>
        </div>
        <div>
            <img className='border-8 border-yellow-400 rounded-2xl hover:scale-105 transition transform' src={offer2} alt='offer2'/>
        </div>
        <div>
            <img className='border-8 border-yellow-400 rounded-2xl hover:scale-105 transition transform' src={offer3} alt='offer3'/>
        </div>
        <div>
            <img className='border-8 border-yellow-400 rounded-2xl hover:scale-105 transition transform' src={offer4} alt='offer4'/>
        </div>
        <div>
            <img className='border-8 border-yellow-400 rounded-2xl hover:scale-105 transition transform' src={offer5} alt='offer5'/>
        </div>
    </div>
  )
}

export default Offer