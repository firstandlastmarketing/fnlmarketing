import React, { useState } from 'react';
import { FaGlobe, FaServer, FaStar } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'web-design',
      icon: <FaGlobe className="text-4xl text-yellow-500" aria-hidden="true" />,
      title: 'Web Design & Development',
      desc: 'Modern, responsive websites that convert visitors and grow your brand.',
      content: (
        <>
          <p>
            At First & Last Marketing, we craft digital experiences that convert. We specialize in:
          </p>
          <ul className="list-disc ml-5 my-4 space-y-1">
            <li><strong>Custom Designs</strong> – Built for your brand, not templates.</li>
            <li><strong>Responsive Layouts</strong> – Mobile-first, fast, and fluid.</li>
            <li><strong>SEO Optimization</strong> – Ranking-focused structure.</li>
            <li><strong>Fast Loading</strong> – Speed matters for UX and Google.</li>
            <li><strong>Lead-Centric UI</strong> – Clear CTAs and optimized funnels.</li>
          </ul>
          <p>Your website should work as hard as you do. We make that happen.</p>
        </>
      )
    },
    {
      id: 'web-hosting',
      icon: <FaServer className="text-4xl text-purple-600" aria-hidden="true" />,
      title: 'Fast & Secure Web Hosting',
      desc: 'Blazing-fast managed hosting with 99.9% uptime and top-tier security.',
      content: (
        <>
          <p>Hosting that empowers your site to run reliably and fast:</p>
          <ul className="list-disc ml-5 my-4 space-y-1">
            <li><strong>Optimized Servers</strong> – Built for speed and uptime.</li>
            <li><strong>Auto Backups</strong> – Daily protection, restored in clicks.</li>
            <li><strong>SSL Certificates</strong> – Secure HTTPS by default.</li>
            <li><strong>Downtime-Free Updates</strong> – Push changes without breaks.</li>
            <li><strong>24/7 Monitoring</strong> – We watch so you don’t have to.</li>
          </ul>
          <p>Stable hosting = happier visitors and better conversions.</p>
        </>
      )
    },
    {
      id: 'reputation',
      icon: <FaStar className="text-4xl text-blue-600" aria-hidden="true" />,
      title: 'Online Reputation Management',
      desc: 'Take control of your brand image and turn reviews into trust.',
      content: (
        <>
          <p>Your reputation is your currency. We help you protect and enhance it:</p>
          <ul className="list-disc ml-5 my-4 space-y-1">
            <li><strong>Review Generation</strong> – Encourage happy client feedback.</li>
            <li><strong>Damage Control</strong> – Professional handling of negatives.</li>
            <li><strong>Local Listings</strong> – Directory consistency and accuracy.</li>
            <li><strong>Google Profile Optimization</strong> – Be seen and trusted.</li>
          </ul>
          <p>Turn happy clients into loyal advocates across the web.</p>
        </>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-yellow-50 via-purple-50 to-blue-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Our <span className="text-yellow-600">Marketing Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Digital solutions that help you scale, connect, and convert.
          </p>
        </header>

        {/* Services Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <li key={service.id}>
              <article className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 h-full">
                <figure className="mb-4">{service.icon}</figure>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-yellow-600 hover:text-yellow-700 font-semibold flex items-center"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </article>
            </li>
          ))}
        </ul>

        {/* Modal */}
        <Dialog open={!!selectedService} onClose={() => setSelectedService(null)} className="relative z-50">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white max-w-2xl w-full p-8 rounded-xl shadow-xl relative">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                aria-label="Close service details"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              <Dialog.Title className="text-2xl font-bold text-yellow-600 mb-4">
                {selectedService?.title}
              </Dialog.Title>

              <div className="text-gray-700 space-y-4">{selectedService?.content}</div>

              <div className="mt-6">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setTimeout(() => {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full transition"
                >
                  Get Started
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>

        {/* CTA */}
        <footer className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Ready to grow your business with First & Last Marketing?
          </h3>
          <a
            href="#contact"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full inline-block transition"
          >
            Get Your Free Consultation
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Services;
