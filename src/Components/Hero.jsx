import { useEffect, useState } from 'react';
import slide1 from '../assets/slideshow/slide1.png';
import slide2 from '../assets/slideshow/slide2.png';
import slide3 from '../assets/slideshow/slide3.png';
import slide4 from '../assets/slideshow/slide4.png';
import slide5 from '../assets/slideshow/slide5.png';
import slide6 from '../assets/slideshow/slide6.png';
import slide7 from '../assets/slideshow/slide7.png';

const Hero = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];
  const [currentSlide, setCurrentSlide] = useState(0);

  const stats = [
    { value: '100+', label: 'Businesses Helped' },
    { value: '10+', label: 'Years Experience' },
    { value: '500K+', label: 'Leads Generated' },
    { value: '99%', label: 'Client Satisfaction' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700"
      aria-label="Hero section showcasing First & Last Marketing services"
    >
      <article className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" data-aos="fade-up" data-aos-delay="300">
            Grow Smarter with{' '}
            <mark className="text-yellow-400 bg-transparent">SaaS Marketing</mark>,{' '}
            <mark className="text-yellow-300 bg-transparent">Custom Web Design</mark>, and{' '}
            <mark className="text-yellow-200 bg-transparent">AI-Powered Solutions</mark>
          </h1>
          <p className="text-base sm:text-lg text-yellow-200 mb-8 max-w-lg mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="400">
            First & Last Marketing helps businesses generate more revenue using conversion-optimized websites,
            automated SaaS systems like email & SMS marketing, database reactivation, reputation management,
            and AI-powered chatbot platforms. We don’t just build websites—we build revenue machines.
          </p>

          {/* CTA Buttons */}
          <nav
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8"
            aria-label="Call to action"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full text-center transition shadow-lg"
              aria-label="Schedule a free consultation with First & Last Marketing"
            >
              Get a Free Consultation
            </a>
            <a
              href="#services"
              className="border border-yellow-400 text-yellow-400 hover:bg-yellow-50 px-8 py-3 rounded-full text-center transition"
              aria-label="Explore First & Last Marketing services"
            >
              Explore Our Services
            </a>
          </nav>

          {/* Stats */}
          <aside data-aos="fade-up" data-aos-delay="600" className="py-4">
            <ul className="flex flex-wrap justify-center gap-4 text-center" aria-label="Company success statistics">
              {stats.map((stat, index) => (
                <li key={index} className="px-2">
                  <strong className="text-2xl font-bold text-yellow-400">{stat.value}</strong>
                  <small className="block text-sm text-yellow-200">{stat.label}</small>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Hero Image Slideshow */}
        <figure
          className="md:w-1/2 flex justify-center"
          data-aos="fade-up"
          data-aos-delay="500"
          role="group"
          aria-label="Slideshow of marketing services and visuals"
        >
          <div className="relative w-full max-w-md">
            <span
              className="bg-yellow-500 rounded-full w-80 h-80 absolute -top-10 -left-10 opacity-20"
              aria-hidden="true"
            />
            <span
              className="bg-purple-700 rounded-full w-64 h-64 absolute -bottom-10 -right-10 opacity-20"
              aria-hidden="true"
            />
            <img
              src={slides[currentSlide]}
              alt={`Marketing visual ${currentSlide + 1}: website design, SaaS tools, AI services, or lead generation strategies`}
              width="400"
              height="400"
              loading="lazy"
              decoding="async"
              className="relative z-10 rounded-full shadow-2xl w-full md:max-w-sm object-cover transition-all duration-700 ease-in-out"
            />
          </div>
        </figure>
      </article>
    </section>
  );
};

export default Hero;
