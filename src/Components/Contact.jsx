import React, { useState, useRef } from 'react';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import contactImg from '../assets/contactImg.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const contactItems = [
    {
      icon: <FaMapMarkerAlt className="text-gold-600 text-xl" />,
      title: "Our Location",
      content: <p className="text-gray-700">Springfield, Missouri</p>,
    },
    {
      icon: <FaPhoneAlt className="text-gold-600 text-xl" />,
      title: "Phone Number",
      content: (
        <p className="text-gray-700">
          <a href="tel:+15732020088" className="hover:text-gold-600">+1 (573) 202-0088</a>
        </p>
      ),
    },
    {
      icon: <FaEnvelope className="text-gold-600 text-xl" />,
      title: "Email",
      content: (
        <p className="text-gray-700">
          <a href="mailto:contact@firstandlastmarketing.com" className="hover:text-gold-600">contact@firstandlastmarketing.com</a>
        </p>
      ),
    },
    {
      icon: <FaClock className="text-gold-600 text-xl" />,
      title: "Working Hours",
      content: (
        <p className="text-gray-700">
          Sunday - Thursday: 8am - 8pm<br />
          Friday: 8am - 4pm<br />
          Saturday: Closed
        </p>
      ),
    },
  ];

  const services = [
    "Web Design & Development",
    "Web Hosting",
    "Online Reputation Management",
    "Database Reactivation Campaigns",
    "Email & SMS Marketing Automation",
    "Live Chat & AI Chatbot Platforms",
    "Social Media Post Schedulers",
  ];

  const handleCheckboxChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Inject selected services as comma-separated string into hidden input
    const servicesInput = formRef.current.querySelector('input[name="services"]');
    servicesInput.value = selectedServices.join(', ');

    emailjs
      .sendForm('fnlserviceid', 'fnltemplateid', formRef.current, '_NXkr3UnpbWQmmVNs')
      .then(() => {
        setFormStatus({ success: true, message: "Message sent successfully!" });
        formRef.current.reset();
        setSelectedServices([]);
      })
      .catch(() => {
        setFormStatus({ success: false, message: "Failed to send message. Please try again later." });
      })
      .finally(() => setLoading(false));
  };

  return (
    <article
      id="contact"
      className="relative pt-4 pb-30 overflow-hidden"
    >
      {/* Background overlay, only dims the gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-gold-300 opacity-30 z-0" />
          <h1 className="text-4xl font-bold text-white mb-4 relative z-10">
            Contact <span className="text-gold-300">First and Last Marketing</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto relative z-10">
            Ready to grow your brand online? Get in touch for web design, hosting, or reputation services.
          </p>
        </header>

        <main className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <aside className="lg:w-2/5">
            <section className="bg-white rounded-2xl shadow-xl p-8 h-full" aria-labelledby="contact-info-title">
              <h2 id="contact-info-title" className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <address className="space-y-6 not-italic">
                {contactItems.map((item, index) => (
                  <article key={index} className="flex items-start">
                    <figure className="bg-gold-100 p-3 rounded-full mr-4 flex-shrink-0">{item.icon}</figure>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">{item.title}</h3>
                      {item.content}
                    </div>
                  </article>
                ))}
              </address>
              <figure className="mt-8 rounded-xl overflow-hidden shadow-md">
                <img
                  src={contactImg}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  width="400"
                  height="200"
                  loading="lazy"
                  alt="Team assisting clients online"
                />
              </figure>
            </section>
          </aside>

          {/* Contact Form */}
          <section className="lg:w-3/5">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full" aria-labelledby="contact-form-title">
              <h2 id="contact-form-title" className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
                <input type="hidden" name="form_name" value="Contact Form Submission" />
                <input type="hidden" name="services" />

                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    />
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                  />
                </div>

                <fieldset>
                  <legend className="block text-gray-700 font-medium mb-2">Services You're Interested In</legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <label key={index} className="flex items-center space-x-3 text-gray-700">
                        <input
                          type="checkbox"
                          name="services[]"
                          value={service}
                          checked={selectedServices.includes(service)}
                          onChange={() => handleCheckboxChange(service)}
                          disabled={loading}
                          className="w-5 h-5 text-gold-600 border-gray-300 rounded focus:ring-gold-400"
                        />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className={`bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>

              {formStatus && (
                <p className={`mt-4 font-semibold ${formStatus.success ? "text-green-600" : "text-red-600"}`} role="alert">
                  {formStatus.message}
                </p>
              )}
            </div>
          </section>
        </main>

        <figure className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-93.3276%2C37.1783%2C-93.2892%2C37.2051&layer=mapnik&marker=37.1917%2C-93.3084"
            width="100%"
            height="450"
            loading="lazy"
            title="First and Last Marketing Location Map"
            className="rounded-2xl"
            style={{ border: 0 }}
            aria-label="Map showing Springfield Missouri location"
          ></iframe>
        </figure>
      </div>
    </article>
  );
};

export default Contact;
