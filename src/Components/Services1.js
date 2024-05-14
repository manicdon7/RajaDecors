import React from 'react'
import bg5 from '../assets/WhatsApp Image 2024-05-08 at 11.44.10_e34a28c8.jpg';
import bg1 from '../assets/coordination.png';
import Cards from './Cards';
import unmatch from '../assets/service unmatch.png';
import hall from '../assets/hall1.png';

const Service1 = () => {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <p className='uppercase text-4xl font-serif mx-40 font-semibold my-8 text-blue-600'>Services We Offer</p>
                    </div>
                    <Cards />
                    <div>
                        <p className='font-serif mx-8 md:mx-40 md:text-5xl text-3xl text-yellow-400 my-20 font-light'>
                            Unmatched Quality and Service
                        </p>
                        <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-40'>
                            <div>
                            <img src={unmatch} alt='unmatch' className='h-[100%] w-[100%]' />
                            </div>
                            <div>
                                <p className='font-serif font-light leading-relaxed text-2xl md:mx-10 mx-0 my-2 md:my-0'>
                                At Raja Decors, quality and service are at the heart of everything we do.
                                 We source only the freshest blooms from trusted growers, hand-selecting
                                  each stem for its beauty and vitality. Our commitment to excellence 
                                  extends beyond our designs to our personalized service, ensuring a 
                                  seamless and stress-free experience from concept to execution.
                                </p>
                            </div>
                        </div>
                        <p className='font-serif mx-8 md:mx-40 text-3xl md:text-5xl text-blue-600 my-20 font-light'>
                        Wedding Reception & Mugurtham 
                        </p>
                        <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-40'>
                            <div>
                            <img src={hall} alt='unmatch' className='h-[100%] w-[100%]' />
                            </div>
                            <div>
                                <p className='font-serif font-light leading-relaxed text-2xl mx-0 md:mx-10 my-2 md:my-0'>
                                At Raja Decors, quality and service are at the heart of everything we do.
                                 We source only the freshest blooms from trusted growers, hand-selecting
                                  each stem for its beauty and vitality. Our commitment to excellence 
                                  extends beyond our designs to our personalized service, ensuring a 
                                  seamless and stress-free experience from concept to execution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 md:mx-32 mx-10 space-y-6 md:space-y-10 my-10'>
                    <div className='w-80 shadow-2xl drop-shadow-2xl border-gray-800 rounded-3xl px-3 py-4 hover:scale-105 transition transform'>
                        <img src={bg5} alt='Decoration' className='w-[100%] h-60 rounded-md' height={100} width={100} />
                        <div>
                            <p className='text-xl font-serif my-3 font-semibold'>
                                Wedding Decoration
                            </p>
                            <p className='text-sm my-3 font-light'>
                                Wishing your Event held a grand
                                style? We promise to provide the
                                perfect decorations.
                            </p>
                            <button className='border border-[#F1518B] hover:bg-[#F1518B] hover:text-white px-16 py-2 rounded-3xl font-semibold'>Read More</button>
                        </div>
                    </div>
                    <div className='w-80 shadow-2xl drop-shadow-2xl border-gray-800 rounded-3xl px-3 py-4 hover:scale-105 transition transform'>
                        <img src={bg5} alt='Catering' className='w-[100%] h-60 rounded-md' height={100} width={100} />
                        <div>
                            <p className='text-xl font-serif my-3 font-semibold'>
                                Birthday Decoration
                            </p>
                            <p className='text-sm my-3 font-light'>
                                Customized catering for any occasion.
                                We tailor menus to your taste, ensuring every dish reflects
                                your unique style and vision.
                            </p>
                            <button className='border border-[#F1518B] hover:bg-[#F1518B] hover:text-white px-16 py-2 rounded-3xl font-semibold'>Read More</button>
                        </div>
                    </div>
                    <div className='w-80 shadow-2xl drop-shadow-2xl border-gray-800 rounded-3xl px-3 py-4 hover:scale-105 transition transform'>
                        <img src={bg1} alt='coordination' className='w-[100%] h-60 rounded-md' height={100} width={100} />
                        <div>
                            <p className='text-xl font-serif my-3 font-semibold'>
                                Corporate Events
                            </p>
                            <p className='text-sm my-3 font-light'>
                                Event guidance tailored just for you,
                                For seamless days without dismay,
                                Trust our expertise to light the way
                            </p>
                            <button className='border border-[#F1518B] hover:bg-[#F1518B] hover:text-white px-16 py-2 rounded-3xl font-semibold'>Read More</button>
                        </div>
                    </div>
                    <div className='w-80 shadow-2xl drop-shadow-2xl border-gray-800 rounded-3xl px-3 py-4 hover:scale-105 transition transform'>
                        <img src={bg1} alt='coordination' className='w-[100%] h-60 rounded-md' height={100} width={100} />
                        <div>
                            <p className='text-xl font-serif my-3 font-semibold'>
                                Entrance Decoration
                            </p>
                            <p className='text-sm my-3 font-light'>
                                Guidance bespoke, for your special day,
                                Seamless moments, no dismay.
                                Trust our craft to light the way
                            </p>
                            <button className='border border-[#F1518B] hover:bg-[#F1518B] hover:text-white px-16 py-2 rounded-3xl font-semibold'>Read More</button>
                        </div>
                    </div>
                    <div className='w-80 shadow-2xl drop-shadow-2xl border-gray-800 rounded-3xl px-3 py-4 hover:scale-105 transition transform'>
                        <img src={bg1} alt='coordination' className='w-[100%] h-60 rounded-md' height={100} width={100} />
                        <div>
                            <p className='text-xl font-serif my-3 font-semibold'>
                                Familty Get together
                            </p>
                            <p className='text-sm my-3 font-light'>
                                Tailored for your family, each event anew,
                                Days of togetherness, without a single rue.
                                Rely on our expertise, guiding the way true.
                            </p>
                            <button className='border border-[#F1518B] hover:bg-[#F1518B] hover:text-white px-16 py-2 rounded-3xl font-semibold'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service1