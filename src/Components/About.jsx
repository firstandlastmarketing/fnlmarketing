import React from 'react';
import { FaAward, FaHeart, FaGlobe, FaServer } from 'react-icons/fa';
import aboutImage from '../assets/aboutImage.png';

const About = () => {
  const stats = [
    { value: "10+", label: "Years of Experience", icon: <FaAward className="text-purple-600" aria-hidden="true" /> },
    { value: "50+", label: "Happy Clients", icon: <FaHeart className="text-purple-600" aria-hidden="true" /> },
    { value: "100+", label: "Websites Built", icon: <FaGlobe className="text-purple-600" aria-hidden="true" /> },
    { value: "99.9%", label: "Hosting Uptime", icon: <FaServer className="text-purple-600" aria-hidden="true" /> },
  ];

  const approachItems = [
    {
      icon: <FaHeart className="text-purple-600" aria-hidden="true" />,
      text: "We align every digital strategy with your business goals to maximize leads and conversions.",
    },
    {
      icon: <FaGlobe className="text-purple-600" aria-hidden="true" />,
      text: "We design visually stunning, SEO-optimized websites that build trust and attract customers.",
    },
    {
      icon: <FaServer className="text-purple-600" aria-hidden="true" />,
      text: "Our secure, high-speed hosting ensures your site is fast, stable, and always online.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="container mx-auto px-4">
        <article className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <figure className="lg:w-5/12 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
              <img
                src={aboutImage}
                alt="Team of digital marketing experts developing conversion-optimized websites"
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true" />
            </div>
            <span className="hidden lg:block absolute -top-8 -right-8 w-40 h-40 rounded-full bg-purple-600 opacity-20" aria-hidden="true" />
            <aside className="absolute -bottom-1 -right-5 bg-white p-3 rounded-xl shadow-lg z-20">
              <strong className="text-2xl font-bold text-purple-600">10+</strong>
              <small className="block text-xs font-medium text-gray-600">Years Experience</small>
            </aside>
          </figure>

          {/* Text */}
          <div className="lg:w-7/12">
            <header className="mb-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                About <span className="text-purple-600">First and Last Marketing</span>
              </h2>
              <p className="text-lg text-gray-600">
                First and Last Marketing helps businesses grow their online presence through conversion-focused web design,
                lead-generating strategies, SEO optimization, and 24/7 secure hosting. With over a decade of experience, we turn your website into your best salesperson.
              </p>
            </header>

            {/* Our Approach */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Proven Approach</h3>
              <ul className="space-y-4">
                {approachItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-purple-100 p-2 rounded-full mr-3">{item.icon}</span>
                    <p className="text-gray-600">{item.text}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                  <span className="mr-3">{item.icon}</span>
                  <div>
                    <strong className="text-xl font-bold text-gray-800">{item.value}</strong>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </div>
                </div>
              ))}
            </section>

            <a
              href="#services"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition shadow-md focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2"
            >
              Explore Our Services
            </a>
          </div>
        </article>

        {/* Mission Section */}
        <aside className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          <span className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-500 opacity-40" aria-hidden="true" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
            <blockquote className="text-lg text-gray-700 mb-6 italic">
              "Our mission at First and Last Marketing is to empower businesses with the digital tools they need to thrive online. We build more than websites — we build trust, visibility, and a consistent flow of leads."
            </blockquote>
            <figcaption className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                <FaGlobe className="text-purple-600" aria-hidden="true" />
              </div>
              <div>
                <cite className="font-semibold text-gray-800 not-italic">Enoch A. Twumasi</cite>
                <p className="text-sm text-gray-600">Founder & CEO</p>
              </div>
            </figcaption>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
