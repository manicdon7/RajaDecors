import React from 'react';
import bg1 from '../assests/homebg1.png';

const Home = () => {
  return (
    <div>
        <div className='text-white font-semibold text-3xl bg-no-repeat bg-cover px-5 py-20 md:text-7xl md:leading-normal md:px-20 md:mt-5 md:h-96 flex items-center' style={{backgroundImage: `url(${bg1})`}}>
            Welcome to Raja Decors - Where Dreams Blossom into Reality
        </div>
    </div>
  )
}

export default Home;
