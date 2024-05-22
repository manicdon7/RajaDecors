import React from 'react'
import Cards from './Cards';
import unmatch from '../assets/service unmatch.png';
import wedser from '../assets/WhatsApp Image 2024-05-08 at 11.44.10_9af52197.jpg';
import entdecser from '../assets/EntranceDecorationServices.png';
import birdecser from '../assets/BirthdayDecorationServices.png';
import peacock from '../assets/peacockwatermark.png';

const Service1 = () => {
    return (
        <div>
            <div>
                <div>
                    <div className='hidden md:flex justify-start py-6 pl-10'>
                        <img src={peacock} alt='peacock' className=''/>
                    </div>
                    <div>
                        <p className='heading text-2xl md:text-4xl mx-4 md:mx-40 font-semibold my-8 text-center'>Available Services</p>
                    </div>
                    <Cards />
                    <div>

                        <div className='hidden md:flex justify-end py-10 pr-10'>
                            <img src={peacock} alt='peacock' className=''/>
                        </div>
                        <p className='heading text-center mx-8 md:mx-40 md:text-5xl text-3xl my-10 md:my-0 text-blue-700 font-semibold'>
                            Types Of Services We Offer
                        </p>
                        <div className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:ml-40 md:mr-20 rounded-3xl md:my-10'>
                            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                                Unmatched Quality and Service
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-14 py-2 pb-8'>
                                <div>
                                    <img src={unmatch} alt='unmatch' className='h-[100%] w-[100%] rounded-3xl' />
                                </div>
                                <div>
                                    <p className='poppins-regular font-light leading-relaxed text-xl md:text-2xl md:mx-10 mx-0 my-2 md:my-0'>
                                    At Raja Decors, quality and service are at the heart of everything we do.
                                    We source only the freshest blooms from trusted growers, hand-selecting
                                    each stem for its beauty and vitality. Our commitment to excellence 
                                    extends beyond our designs to our personalized service, ensuring a 
                                    seamless and stress-free experience from concept to execution.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:ml-40 md:mr-20 rounded-3xl md:my-10'>
                            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                                Wedding Reception & Mugurtham
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-14 py-2 pb-8'>
                                <div className='md:hidden'>
                                    <img src={wedser} alt='wedser' className='h-[100%] w-[100%] rounded-3xl' />
                                </div>
                                <div>
                                    <p className='poppins-regular font-light leading-relaxed text-xl md:text-2xl md:mx-10 mx-0 my-2 md:my-0'>
                                        Our ceremonies blend cultural grace with contemporary elegance, 
                                        merging tradition and modernity for cherished moments embodying 
                                        love and commitment. Each celebration exudes timeless beauty and 
                                        joy, uniting hearts in an ambiance of cultural richness and modern 
                                        sophistication, creating unforgettable memories that last a lifetime.
                                    </p>
                                </div>
                                <div className='hidden md:flex'>
                                    <img src={wedser} alt='wedser' className='h-[100%] w-[100%] rounded-3xl' />
                                </div>
                            </div>
                        </div>
                        <div className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:ml-40 md:mr-20 rounded-3xl md:my-10'>
                            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                                Entrance Decoration
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-14 py-2 pb-8'>
                                <div>
                                    <img src={entdecser} alt='entdecser' className='h-[100%] w-[100%] rounded-3xl' />
                                </div>
                                <div>
                                    <p className='poppins-regular font-light leading-relaxed text-xl md:text-2xl md:mx-10 mx-0 my-2 md:my-0'>
                                        Our grand entrance designs captivate, offering 
                                        a preview of the unforgettable experiences awaiting 
                                        within. Guests are enchanted, drawn into a realm of 
                                        anticipation and wonder, setting the stage for an event 
                                        filled with grandeur and delight. It's a prelude that 
                                        ignites excitement, ensuring every moment is memorable and cherished.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:ml-40 md:mr-20 rounded-3xl md:my-10'>
                            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                                Birthday Decoration 
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-14 py-2 pb-8'>
                                <div className='md:hidden'>
                                    <img src={birdecser} alt='birdecser' className='h-[100%] w-[100%] rounded-3xl' />
                                </div>
                                <div>
                                    <p className='poppins-regular font-light leading-relaxed text-xl md:text-2xl md:mx-10 mx-0 my-2 md:my-0'>
                                        Infusing spaces with whimsy and vibrancy, our birthday 
                                        decorations create a realm of joy and celebration. 
                                        Every corner is adorned with magical touches, transporting 
                                        guests to an enchanting experience. With attention to detail 
                                        and creativity, we ensure every moment is memorable, leaving 
                                        all attendees with cherished memories of the festivities.
                                    </p>
                                </div>
                                <div className='hidden md:flex'>
                                    <img src={birdecser} alt='birdecser' className='h-[100%] w-[100%] rounded-3xl' />
                                </div>
                            </div>
                        </div>

                        <div className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:ml-40 md:mr-20 rounded-3xl md:my-10'>
                            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                                Corporate Event 
                            </div>
                            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-14 py-2 pb-8'>
                                <div>
                                    <img src={entdecser} alt='entdecser' className='h-[100%] w-[100%] rounded-3xl' />
                                </div>
                                <div>
                                    <p className='poppins-regular font-light leading-relaxed text-xl md:text-2xl md:mx-10 mx-0 my-2 md:my-0'>
                                        Combining professionalism and creativity, our corporate 
                                        events epitomize sophistication and innovation. We offer 
                                        a platform for successful engagements within an ambiance 
                                        of refined elegance and dynamic energy. Tailored to exceed 
                                        every expectation, our events seamlessly blend professionalism 
                                        with creativity, ensuring memorable experiences that leave a 
                                        lasting impression on attendees.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service1