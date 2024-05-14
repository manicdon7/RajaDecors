import React from 'react'
import servicepng from '../assets/service.png';
import Service1 from '../Components/Services1';

const Services = () => {
  return (
    <div className='mt-10'>
      <div className='flex justify-center'>
        <img src={servicepng} alt='servicepic'/>
      </div>
      <Service1 />
      </div>
  )
}

export default Services;