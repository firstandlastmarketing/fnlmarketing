import React from 'react'
import { FaAward, FaHeart, FaGlobe, FaServer } from 'react-icons/fa'
import aboutImage from '../assets/aboutImage.png'

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
            text: "We care about your business goals. Every website and service we offer is designed with lead generation and customer conversion in mind.",
        },
        {
            icon: <FaGlobe className="text-purple-600" aria-hidden="true" />,
            text: "We build stunning, high-converting websites tailored to your brand identity, ensuring you're represented professionally online.",
        },
        {
            icon: <FaServer className="text-purple-600" aria-hidden="true" />,
            text: "Our reliable web hosting ensures your website stays online, loads fast, and remains secure 24/7—giving you peace of mind.",
        },
    ];

    return (
        <section id="about" className="py-14 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
            <div className="container mx-auto px-4">
                <article data-aos="fade-up" data-aos-delay="400" className="flex flex-col lg:flex-row items-center gap-12">
                    <figure className="lg:w-5/12 relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-md mx-auto">
                            <img
                                src={aboutImage}
                                className="w-full h-auto object-cover aspect-[4/5]"
                                loading="lazy"
                                alt="First and Last Marketing Team"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" aria-hidden="true"></div>
                        </div>
                        <span className="hidden lg:block absolute -top-8 -right-8 w-40 h-40 rounded-full bg-purple-600 opacity-20 z-0" aria-hidden="true"></span>
                        <aside className="absolute -bottom-1 -right-5 bg-white p-3 rounded-xl shadow-lg z-20">
                            <strong className="text-2xl font-bold text-purple-600">10+</strong>
                            <small className="block text-xs font-medium text-gray-600">Years Experience</small>
                        </aside>
                    </figure>

                    <div data-aos="fade-up" data-aos-delay="600" className="lg:w-7/12">
                        <header>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                About <span className="text-purple-600">First and Last Marketing</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                At First and Last Marketing, we help businesses generate and convert more leads through modern web design, reliable hosting,
                                and powerful reputation management. With over a decade of experience, we understand what it takes to stand out online.
                                Whether you need a new website, a faster server, or better online reviews, we’ll make sure your digital presence leaves
                                a lasting impression.
                            </p>
                        </header>

                        <section className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Approach</h3>
                            <ul className="space-y-3">
                                {approachItems.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <figure className="bg-purple-100 p-1 rounded-full mr-3">
                                            {item.icon}
                                        </figure>
                                        <p className="text-gray-600">{item.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="grid grid-cols-2 gap-4 mb-8">
                            {stats.map((item, index) => (
                                <article key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                                    <figure className="mr-3">
                                        {item.icon}
                                    </figure>
                                    <div>
                                        <strong className="text-xl font-bold text-gray-800">{item.value}</strong>
                                        <p className="text-sm text-gray-600">{item.label}</p>
                                    </div>
                                </article>
                            ))}
                        </section>

                        <nav>
                            <a
                                href="#services"
                                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full
                                transition shadow-md focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2"
                            >
                                Explore Our Services
                            </a>
                        </nav>
                    </div>
                </article>

                <aside className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
                    <span
                        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-500 opacity-40"
                        aria-hidden="true"
                    ></span>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
                        <blockquote className="text-lg text-gray-700 mb-6">
                            "Our mission at First and Last Marketing is to empower businesses with the tools they need to thrive online. We’re not just
                            here to build websites—we’re here to build your reputation, amplify your reach, and turn clicks into clients."
                        </blockquote>
                        <figure className="flex items-center">
                            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                                <FaGlobe className="text-purple-600" aria-hidden="true" />
                            </div>
                            <figcaption>
                                <cite className="font-semibold text-gray-800 not-italic">Enoch A. Twumasi</cite>
                                <p>Founder & CEO</p>
                            </figcaption>
                        </figure>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default About;
