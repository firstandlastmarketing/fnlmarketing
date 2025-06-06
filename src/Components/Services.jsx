import React, { useState } from 'react';
import { FaGlobe, FaServer, FaStar } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'web-design',
      icon: <FaGlobe className='text-4xl text-yellow-500' />,
      title: 'Web Design & Development',
      desc: 'We craft modern, responsive websites that convert visitors into clients and build trust in your brand.',
      content: (
        <>
          <p className='mb-4'>
            At First & Last Marketing, we don't just build websites — we create high-converting digital experiences. Our team specializes in:
          </p>
          <ul className='list-disc ml-6 space-y-2 mb-4'>
            <li><strong>Custom Designs:</strong> Tailored to your brand, not templates.</li>
            <li><strong>Mobile Responsiveness:</strong> Flawless experience on any device.</li>
            <li><strong>SEO Optimization:</strong> Built-in strategies to get you found.</li>
            <li><strong>Fast Loading:</strong> Optimized for speed and performance.</li>
            <li><strong>Lead-Centric Architecture:</strong> Designed to guide users to take action.</li>
          </ul>
          <p>
            Your website is your #1 salesperson. Let’s build one that works 24/7 to bring in leads and grow your business.
          </p>
        </>
      )
    },
    {
      id: 'web-hosting',
      icon: <FaServer className='text-4xl text-purple-600' />,
      title: 'Fast & Secure Web Hosting',
      desc: 'Enjoy ultra-fast performance, 99.9% uptime, and peace of mind with our managed hosting solutions.',
      content: (
        <>
          <p className='mb-4'>
            Your website deserves the best environment to thrive. We offer fully managed hosting that includes:
          </p>
          <ul className='list-disc ml-6 space-y-2 mb-4'>
            <li><strong>Blazing-Fast Servers:</strong> Optimized for speed and stability.</li>
            <li><strong>Automatic Backups:</strong> Daily protection, just in case.</li>
            <li><strong>SSL Certificates:</strong> Secured for you and your visitors.</li>
            <li><strong>Zero Downtime Deployments:</strong> Updates without disruption.</li>
            <li><strong>24/7 Monitoring:</strong> We watch so you don’t have to.</li>
          </ul>
          <p>
            Hosting isn’t just storage — it’s the foundation of your digital presence. Make it solid, secure, and super fast.
          </p>
        </>
      )
    },
    {
      id: 'reputation',
      icon: <FaStar className='text-4xl text-blue-600' />,
      title: 'Online Reputation Management',
      desc: 'We help you take control of your online presence, improve reviews, and build lasting client confidence.',
      content: (
        <>
          <p className='mb-4'>
            What people see online can make or break their decision to work with you. We help you manage that narrative through:
          </p>
          <ul className='list-disc ml-6 space-y-2 mb-4'>
            <li><strong>Review Generation:</strong> Get more 5-star reviews from happy clients.</li>
            <li><strong>Reputation Repair:</strong> Strategic handling of negative feedback.</li>
            <li><strong>Directory Management:</strong> Consistent listings across platforms.</li>
            <li><strong>Google Business Profile:</strong> Optimization for maximum visibility.</li>
          </ul>
          <p>
            Build trust, improve visibility, and turn your happy customers into your biggest advocates.
          </p>
        </>
      )
    }
  ];

  return (
    <section id='services' className='py-20 bg-gradient-to-br from-yellow-50 via-purple-50 to-blue-100'>
      <div className='container mx-auto px-4'>
        <header className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>
            Our <span className='text-yellow-600'>Marketing Services</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Everything you need to grow your online presence, generate leads, and convert visitors into loyal clients.
          </p>
        </header>

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service) => (
            <li key={service.id}>
              <article className='bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 h-full'>
                <figure className='mb-4'>{service.icon}</figure>
                <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
                <p className='text-gray-600 mb-4'>{service.desc}</p>
                <button
                  onClick={() => setSelectedService(service)}
                  className='text-yellow-600 hover:text-yellow-700 font-semibold flex items-center'>
                  Learn more
                  <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </button>
              </article>
            </li>
          ))}
        </ul>

        {/* Modal */}
        <Dialog open={!!selectedService} onClose={() => setSelectedService(null)} className='relative z-50'>
          <div className='fixed inset-0 bg-black/50 backdrop-blur-sm' aria-hidden='true' />
          <div className='fixed inset-0 flex items-center justify-center p-4'>
            <Dialog.Panel className='bg-white max-w-2xl w-full p-8 rounded-xl shadow-xl relative'>
              <button
                onClick={() => setSelectedService(null)}
                className='absolute top-4 right-4 text-gray-500 hover:text-red-500'
                aria-label='Close modal'
              >
                <XMarkIcon className='h-6 w-6' />
              </button>
              <Dialog.Title className='text-2xl font-bold text-yellow-600 mb-4'>
                {selectedService?.title || 'Service Details'}
              </Dialog.Title>

              {/* Render ALL service contents, but only show the selected one */}
              {services.map((service) => (
                <div
                  key={service.id}
                  className={service.id === selectedService?.id ? 'block text-gray-700 space-y-4' : 'hidden'}
                  aria-hidden={service.id !== selectedService?.id}
                >
                  {service.content}
                </div>
              ))}

              <div className='mt-6'>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setTimeout(() => {
                      const contactSection = document.querySelector('#contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className='inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-full transition'
                >
                  Get Started
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>

        <footer className='mt-20 text-center'>
          <h3 className='text-2xl font-bold text-gray-800 mb-6'>
            Ready to grow your business with First & Last Marketing?
          </h3>
          <a
            href="#contact"
            className='bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full inline-block transition'
          >
            Get Your Free Consultation
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Services;
