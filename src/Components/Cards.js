import React from 'react'
import exp from '../assets/Experienced.png';
import create from '../assets/Creativity.png';
import attention from '../assets/Attendtion.png';
import proffess from '../assets/professional.png';

const Cards = () => {
  return (
    <div>
        <div className='mx-10 grid grid-cols-4'>
            <div className='border-gray-900 shadow-2xl drop-shadow-2xl rounded-2xl p-4 w-80 bg-gray-100'>
                <img src={exp} alt='experience' className='mx-24 my-3'/>
                <h1 className='text-3xl font-semibold text-center'>Experienced</h1>
                <p className=' mx-2 my-3 text-left'>
                Lorem ipsum dolor sit amet. Eos quis adipisci id dolores accusantium qui magnam
                </p>
            </div>
            <div className='border-gray-900 shadow-2xl drop-shadow-2xl rounded-2xl p-4 w-80 bg-gray-100'>
                <img src={create} alt='experience' className='mx-24 my-3'/>
                <h1 className='text-3xl font-semibold text-center'>Creativity</h1>
                <p className=' mx-2 my-3 text-left'>
                Lorem ipsum dolor sit amet. Eos quis adipisci id dolores accusantium qui magnam
                </p>
            </div>
            <div className='border-gray-900 shadow-2xl drop-shadow-2xl rounded-2xl p-4 w-80 bg-gray-100'>
                <img src={attention} alt='experience' className='mx-24 my-3'/>
                <h1 className='text-3xl font-semibold text-center'>Attention to Detail</h1>
                <p className=' mx-2 my-3 text-left'>
                Lorem ipsum dolor sit amet. Eos quis adipisci id dolores accusantium qui magnam
                </p>
            </div>
            <div className='border-gray-900 shadow-2xl drop-shadow-2xl rounded-2xl p-4 w-80 bg-gray-100'>
                <img src={proffess} alt='experience' className='mx-24 my-3'/>
                <h1 className='text-3xl font-semibold text-center'>Professionalism</h1>
                <p className=' mx-2 my-3 text-left'>
                Lorem ipsum dolor sit amet. Eos quis adipisci id dolores accusantium qui magnam
                </p>
            </div>
        </div>
    </div>
  )
}

export default Cards