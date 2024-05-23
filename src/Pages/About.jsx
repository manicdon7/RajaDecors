import React from 'react'
import landing from '../assets/AboutusLand.jpg';
import hall from '../assets/hall.png';
import peacock from '../assets/peacockwatermark.png';
import unmatch from '../assets/service unmatch.png';
import wedser from '../assets/WhatsApp Image 2024-05-08 at 11.44.10_9af52197.jpg';

const About = () => {
  return (
    <div>
        <div className='bg-cover bg-center w-full' style={{backgroundImage: `url(${landing})`, position: 'relative'}}>
            <div className='text-white text-2xl md:text-7xl font-bold py-4 md:py-56 text-center z-10'>
                <p className='heading border-2 border-white mx-4 md:mx-40 py-10 md:py-8 rounded-2xl' style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
                Raja Decors - Where Every Petal Paints Your Perfect Day
                </p>
            </div>
        </div>

        <div className='flex justify-start mx-10 my-10'>
            <img src={peacock} alt="logo" className='h-60 w-60 md:block hidden' />
        </div>
       
        <div>
            <div className=' my-10'>
                <p className='heading text-3xl md:text-5xl text-[#FD8901] font-semibold text-center'>Who are we</p>
                <div>
                    <h1 className='heading md:text-center mx-8 md:mx-40 md:text-5xl text-xl my-10 md:my-5 text-blue-700 font-semibold'>Crafting Unforgettable Moments <br/>with Floral Excellence</h1>
                </div>
                <div className='flex items-center justify-center'>
                    <img src={hall} alt='hall' className='w-10/12 h-96 border-8 rounded-3xl border-yellow-500 '/>
                </div>
            </div>
            <div>
                <p className='poppins-regular mx-5 text-xl md:mx-32 md:text-4xl text-center font-normal md:my-10'>At Raja Decors, we believe that flowers have the power to transform ordinary moments into extraordinary experiences. Our commitment to "Crafting Unforgettable Moments with Floral Excellence" is more than just a tagline—it's the cornerstone of everything we do.</p>
            </div>
            <div className='flex justify-end mx-20'>
                <img src={peacock} alt="logo" className='h-60 w-60 md:block hidden' />
            </div>
        </div>
        <div className='heading py-10 md:flex block items-center justify-center gap-10'>
            <div className='bg-[#e3e6f1] md:w-3/12 w-10/12 mx-6 md:mx-3 px-10 py-5 my-5 rounded-3xl shadow-xl text-center'>
                <p className='text-5xl md:text-7xl font-semibold py-10'>800+</p>
                <p className='text-2xl md:text-4xl font-semibold py-10'>Events Completed</p>
            </div>
            <div className='bg-[#e3e6f1] md:w-3/12 w-10/12 mx-6 md:mx-3 px-10 py-5 my-5 rounded-3xl shadow-xl text-center'>
                <p className='text-5xl md:text-7xl font-semibold py-10'>600+</p>
                <p className='text-2xl md:text-4xl font-semibold py-10'>Satisfied Clients</p>
            </div>
            <div className='bg-[#e3e6f1] md:w-3/12 w-10/12 mx-6 md:mx-3 px-10 py-5 my-5 rounded-3xl shadow-xl text-center'>
                <p className='text-5xl md:text-7xl font-semibold py-10'>15+</p>
                <p className='text-2xl md:text-4xl font-semibold py-10'>Years of Experience</p>
            </div>
        </div>

        <div className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:ml-40 md:mr-20 rounded-3xl md:my-10'>
            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                Attention to Detail
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-14 py-2 pb-8'>
                <div>
                    <img src={unmatch} alt='unmatch' className='h-[100%] w-[100%] rounded-3xl' />
                </div>
                <div>
                    <p className='poppins-regular font-light leading-relaxed text-xl md:text-2xl md:mx-10 mx-0 my-2 md:my-0'>
                        We understand that every petal, every stem, and every arrangement 
                        contributes to the overall atmosphere of an event. That's why we 
                        approach each project with meticulous attention to detail, ensuring 
                        that every floral design is flawlessly executed to enhance the ambiance 
                        and capture the essence of the occasion.
                    </p>
                </div>
            </div>
        </div>

        <div className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:ml-40 md:mr-20 rounded-3xl md:my-10'>
            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                Artistry and Innovation
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-14 py-2 pb-8'>
                <div className='md:hidden'>
                    <img src={wedser} alt='wedser' className='h-[100%] w-[100%] rounded-3xl' />
                </div>
                <div>
                    <p className='poppins-regular font-light leading-relaxed text-xl md:text-2xl md:mx-10 mx-0 my-2 md:my-0'>
                        Our team of skilled florists combines artistry with innovation to create truly unique and captivating floral arrangements. From classic elegance to modern flair, we are constantly pushing the boundaries of floral design to offer our clients fresh and innovative concepts that leave a lasting impression.
                    </p>
                </div>
                <div className='hidden md:flex'>
                    <img src={wedser} alt='wedser' className='h-[100%] w-[100%] rounded-3xl' />
                </div>
            </div>
        </div>


        <div className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:ml-40 md:mr-20 rounded-3xl md:my-10'>
            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                Emotional Impact
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-14 py-2 pb-8'>
                <div>
                    <img src={unmatch} alt='unmatch' className='h-[100%] w-[100%] rounded-3xl' />
                </div>
                <div>
                    <p className='poppins-regular font-light leading-relaxed text-xl md:text-2xl md:mx-10 mx-0 my-2 md:my-0'>
                        Flowers have a remarkable ability to evoke emotions and create memorable moments. Whether it's the delicate fragrance of a rose or the vibrant colors of a bouquet, our goal is to harness the emotional power of flowers to enhance the atmosphere of any event and create experiences that resonate with our clients and their guests.
                    </p>
                </div>
            </div>
        </div>

        <div className='bg-gradient-to-b from-[#ffd8ab] via-ffd8ab to-[#eda754] mx-4 my-5 md:ml-40 md:mr-20 rounded-3xl md:my-10'>
            <div className='mx-8 md:mx-14 md:text-4xl text-2xl py-4 text-blue-700 font-semibold ubuntu-bold  text-center'>
                Personalized Service
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 mx-8 md:mx-14 py-2 pb-8'>
                <div className='md:hidden'>
                    <img src={wedser} alt='wedser' className='h-[100%] w-[100%] rounded-3xl' />
                </div>
                <div>
                    <p className='poppins-regular font-light leading-relaxed text-xl md:text-2xl md:mx-10 mx-0 my-2 md:my-0'>
                        We understand that every event is unique, and we pride ourselves on offering personalized service tailored to the individual needs and preferences of our clients. From the initial consultation to the final execution, we work closely with our clients to bring their vision to life and ensure that every detail exceeds their expectations.
                    </p>
                </div>
                <div className='hidden md:flex'>
                    <img src={wedser} alt='wedser' className='h-[100%] w-[100%] rounded-3xl' />
                </div>
            </div>
        </div>

        <div className='heading text-center py-10 text-blue-700 font-semibold text-xl md:text-4xl mx-2 md:mx-5'>
            At Raja Decors, We Don't Just Provide Floral Decorations-We Craft Experiences 
            That Are As Unique And Unforgettable As The People Celebrating Them. Whether 
            It's A Wedding, Corporate Event, Or Birthday Celebration, We Are Dedicated To 
            Creating Moments Of Joy, Beauty, And Elegance That Will Be Cherished For A Lifetime.
        </div>


    </div>
  )
}

export default About