import { useEffect, useState } from 'react';
import slide1 from '../assets/slideshow/slide1.png';
import slide2 from '../assets/slideshow/slide2.png';
import slide3 from '../assets/slideshow/slide3.png';
import slide4 from '../assets/slideshow/slide4.png';
import slide5 from '../assets/slideshow/slide5.png';
import slide6 from '../assets/slideshow/slide6.png';
import slide7 from '../assets/slideshow/slide7.png';

const Hero = () => {
    const stats = [
        {value: "100+", label: "Businesses Helped"},
        {value: "10+", label: "Years Experience"},
        {value: "500K+", label: "Leads Generated"},
        {value: "99%", label: "Client Satisfaction"},
    ];
    // ...existing code...
const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];
const [currentSlide, setCurrentSlide] = useState(0);
// ...existing code...
        
  // Auto-slide every 3 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

  return (
    <section id='home' className='relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700'>
        <article className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 flex flex-col-reverse 
        lg:flex-row items-center gap-10 lg:gap-20'>

            <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <hgroup data-aos='fade-up' data-aos-delay='500'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
                    Build Stunning, <mark className="text-yellow-400 bg-transparent">Engaging</mark> & <mark className="text-yellow-300 bg-transparent">Responsive</mark> Websites
                </h1>
                <p className='text-base sm:text-lg text-yellow-200 mb-8 max-w-lg mx-auto lg:mx-0'>
                    At First & Last Marketing, we help businesses generate leads and convert them into loyal clients by crafting beautiful websites, hosting, and managing your online reputation.
                    Grow your business rapidly with our tailored digital solutions.
                </p>
            </hgroup>
            <nav data-aos='fade-up' data-aos-delay='600' className='flex flex-col sm:flex-row justify-center 
            lg:justify-start gap-4 mb-8'>
                <a 
                href="#contact"
                className='bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full
                text-center transition shadow-lg'
                aria-label='Get a free consultation'>
                    Get a Free Consultation
                </a>
                <a 
                href="#services"
                className='border border-yellow-400 text-yellow-400 hover:bg-yellow-50 px-8 py-3 rounded-full
                text-center transition'
                aria-label='Explore our services'>
                    Explore Our Services
                </a>
            </nav>
            <aside data-aos='fade-up' data-aos-delay='800' className='py-4'>
                <ul className='flex flex-wrap justify-center gap-4 text-center'>
                    {stats.map((stat, index) => (
                        <li key={index} className='px-2'>
                            <strong className='text-2xl font-bold text-yellow-400'>{stat.value}</strong>
                            <small className='block text-sm text-yellow-200'>{stat.label}</small>
                        </li>
                    ))}   
                </ul>
            </aside>
            </div>
            <figure data-aos='fade-up' data-aos-delay='700' className='md:w-1/2 flex justify-center'>
              <div className='relative w-full max-w-md'>
                <span
                className='bg-yellow-500 rounded-full w-80 h-80 absolute -top-10 -left-10 opacity-20'
                aria-hidden="true">
                </span>
                <span
                className='bg-purple-700 rounded-full w-64 h-64 absolute -bottom-10 -right-10 opacity-20'
                aria-hidden="true">
                </span>
                <img
                src={slides[currentSlide]}
                alt={`Slideshow ${currentSlide + 1}`}
                className='relative z-10 rounded-full shadow-2xl w-full max-xs md:max-w-sm object-cover transition-all duration-700 ease-in-out'
                width='400'
                height='400'
                loading='eager'
                />

              </div>
            </figure>
        </article>
    </section>
  )
}

export default Hero
