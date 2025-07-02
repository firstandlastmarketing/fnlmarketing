import React, { useState, useRef } from 'react';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

// ===[ YOUR COMPONENT & ASSET IMPORTS ]===
// Imports remain the same, functions will not be broken.
import contactImg from '../../assets/contactImg.png';
import emailjs from '@emailjs/browser';

// ===[ ANIMATION VARIANTS ]===
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  // All state and logic are preserved. No changes needed here.
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  // Data is preserved, but icon styling will be handled directly in the JSX.
  const contactItems = [
    { icon: FaMapMarkerAlt, title: "Our Location", content: <p>Springfield, Missouri</p> },
    { icon: FaPhoneAlt, title: "Phone Number", content: <a href="tel:+15732020088" className="hover:text-yellow-400 transition-colors">+1 (573) 202-0088</a> },
    { icon: FaEnvelope, title: "Email", content: <a href="mailto:contact@firstandlastmarketing.com" className="hover:text-yellow-400 transition-colors">contact@firstandlastmarketing.com</a> },
    { icon: FaClock, title: "Working Hours", content: <>Sunday - Thursday: 8am - 8pm<br />Friday: 8am - 4pm<br />Saturday: Closed</> },
  ];

  const services = [ "Web Design & Development", "Web Hosting", "Online Reputation Management", "Database Reactivation Campaigns", "Email & SMS Marketing Automation", "Live Chat & AI Chatbot Platforms", "Social Media Post Schedulers" ];

  const handleCheckboxChange = (service) => {
    setSelectedServices((prev) => prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]);
  };

  // This is the CORRECTED function for Vite projects.
const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const servicesInput = formRef.current.querySelector('input[name="services"]');
    servicesInput.value = selectedServices.join(', ');

    // THE FIX: Using import.meta.env to access the VITE_ variables
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        formRef.current, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setFormStatus({ success: true, message: "Message sent successfully! We'll be in touch soon." });
        formRef.current.reset();
        setSelectedServices([]);
      }, (error) => { // Enhanced error handling to see EmailJS specific errors
        setFormStatus({ success: false, message: `Failed to send message: ${error.text}. Please try again.` });
        console.error("EmailJS Error:", error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <article id="contact" className="relative text-white isolate overflow-hidden">
      {/* BRANDING MATCH: Signature dark gradient background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 py-20 sm:py-28">
        <motion.header 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 [text-wrap:balance]">
            Let's Build <span className="text-yellow-400">Your Future</span>, Together
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to grow your brand? Have a question? We're here to help. Reach out and let's start the conversation about your project.
          </p>
        </motion.header>

        <main className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* ENHANCED Contact Info Section */}
          <motion.aside 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-2/5"
          >
            <div className="bg-white/5 rounded-2xl shadow-2xl p-8 h-full border border-white/10 backdrop-blur-lg">
              <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
              <address className="space-y-6 not-italic">
                {contactItems.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 bg-yellow-400/10 p-3 rounded-full mr-5 border border-yellow-400/20">
                        <item.icon className="text-yellow-400 text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                      <div className="text-gray-300">{item.content}</div>
                    </div>
                  </div>
                ))}
              </address>
              <figure className="mt-8 rounded-xl overflow-hidden shadow-md">
                <img src={contactImg} className="w-full h-48 object-cover" loading="lazy" alt="Team collaborating online" />
              </figure>
            </div>
          </motion.aside>

          {/* ENHANCED Contact Form Section */}
          <motion.section 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:w-3/5"
          >
            <div className="bg-white/5 rounded-2xl shadow-2xl p-8 sm:p-10 h-full border border-white/10 backdrop-blur-lg">
              <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
                <input type="hidden" name="form_name" value="Contact Form Submission" />
                <input type="hidden" name="services" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Re-styled input fields */}
                    <div>
                        <label htmlFor="name" className="block text-gray-200 font-medium mb-2">Full Name</label>
                        <input type="text" id="name" name="name" required disabled={loading} className="w-full px-4 py-3 bg-black/20 rounded-lg border-2 border-white/20 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-200 font-medium mb-2">Phone Number</label>
                        <input type="tel" id="phone" name="phone" required disabled={loading} className="w-full px-4 py-3 bg-black/20 rounded-lg border-2 border-white/20 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition" />
                    </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-200 font-medium mb-2">Email Address</label>
                  <input type="email" id="email" name="email" required disabled={loading} className="w-full px-4 py-3 bg-black/20 rounded-lg border-2 border-white/20 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition" />
                </div>
                <div>
                  <legend className="block text-gray-200 font-medium mb-4">What service(s) are you interested in?</legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    {services.map((service) => (
                      <label key={service} className="flex items-center space-x-3 text-gray-200 cursor-pointer">
                        <input type="checkbox" name="services_checkbox" value={service} checked={selectedServices.includes(service)} onChange={() => handleCheckboxChange(service)} disabled={loading} className="w-5 h-5 bg-black/20 border-2 border-white/30 rounded text-yellow-400 focus:ring-yellow-400 focus:ring-offset-gray-900 shrink-0" />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-200 font-medium mb-2">Your Message</label>
                  <textarea id="message" name="message" required disabled={loading} rows="4" className="w-full px-4 py-3 bg-black/20 rounded-lg border-2 border-white/20 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition"></textarea>
                </div>
                <div>
                  <button type="submit" className={`w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold px-8 py-3.5 rounded-full shadow-lg shadow-yellow-500/20 transition-all duration-300 transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
              {formStatus && (
                <div className={`mt-6 p-4 rounded-lg font-semibold text-center ${formStatus.success ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"}`} role="alert">
                  {formStatus.message}
                </div>
              )}
            </div>
          </motion.section>
        </main>
        
        <motion.figure 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mt-20 sm:mt-28 bg-white/5 rounded-2xl shadow-xl overflow-hidden p-2 border border-white/10"
        >
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-93.3276%2C37.1783%2C-93.2892%2C37.2051&layer=mapnik&marker=37.1917%2C-93.3084&theme=dark"
            width="100%"
            height="450"
            loading="lazy"
            title="First and Last Marketing Location Map"
            className="rounded-xl filter invert hue-rotate-180 brightness-95 contrast-125"
            style={{ border: 0 }}
          ></iframe>
        </motion.figure>
      </div>
    </article>
  );
};

export default Contact;