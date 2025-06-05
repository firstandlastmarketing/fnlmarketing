import React, { useState } from 'react'
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import contactImg from '../assets/contactImg.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
  // Contact info updated for your business
  const contactItems = [
    {
      icon: <FaMapMarkerAlt className="text-gold-600 text-xl" />,
      title: "Our Location",
      content: (
        <p className="text-gray-700">
          Springfield, Missouri
        </p>
      ),
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
          <a href="mailto:fnlmarketting@gmail.com" className="hover:text-gold-600">fnlmarketting@gmail.com</a>
        </p>
      ),
    },
    {
      icon: <FaClock className="text-gold-600 text-xl" />,
      title: "Working Hours",
      content: (
        <p className="text-gray-700">
          Sunday - Thursday: 8am - 8pm <br />
          Friday: 8am - 4pm
          Saturday: Closed
        </p>
      ),
    },
  ]

  // Updated services list for your business
  const services = [
    { value: "webdesign", label: "Web Design & Development" },
    { value: "webhosting", label: "Web Hosting" },
    { value: "reputation", label: "Online Reputation Management" },
  ]

  // State for form status messages
  const [formStatus, setFormStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.sendForm(
      'fnlserviceid',
      'fnltemplateid',
      e.target,
      '_NXkr3UnpbWQmmVNs'
    )
      .then(() => {
        setFormStatus({ success: true, message: "Message sent successfully!" })
        e.target.reset()
      })
      .catch(() => {
        setFormStatus({ success: false, message: "Failed to send message. Please try again later." })
      })
      .finally(() => setLoading(false))
  }

  return (
    <article
      id="contact"
      className="py-20 overflow-hidden bg-gradient-to-r from-gold-400 via-purple-700 to-blue-700"
    >
      <div className="container mx-auto px-4">
        <header
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-center mb-16 relative"
        >
          <div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full
            bg-gold-300 opacity-30 z-0"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
            Contact <span className="text-gold-300">First and Last Marketing</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto relative z-10">
            Get in touch for website design, hosting, or reputation management. We're here to help you grow your business online.
          </p>
        </header>
        <main className="flex flex-col lg:flex-row gap-12">
          <aside data-aos="fade-up" data-aos-delay="500" className="lg:w-2/5">
            <section className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              <address className="space-y-6 not-italic">
                {contactItems.map((Item, index) => (
                  <article key={index} className="flex items-start">
                    <figure className="bg-gold-100 p-3 rounded-full mr-4 flex-shrink-0">
                      {Item.icon}
                    </figure>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">{Item.title}</h3>
                      {Item.content}
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
                  alt="Contact"
                />
              </figure>
            </section>
          </aside>
          <section data-aos="fade-up" data-aos-delay="600" className="lg:w-3/5">
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <input type="hidden" name="form_name" value="Contact Form Submission" />

                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                        focus:ring-gold-400 focus:border-transparent"
                      placeholder="Your name"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                        focus:ring-gold-400 focus:border-transparent"
                      placeholder="+1 xxx xxx xxxx"
                      required
                      disabled={loading}
                    />
                  </div>
                </fieldset>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                      focus:ring-gold-400 focus:border-transparent"
                    placeholder="Your@email.com"
                    required
                    disabled={loading}
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                      focus:ring-gold-400 focus:border-transparent"
                    required
                    disabled={loading}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2
                      focus:ring-gold-400 focus:border-transparent"
                    placeholder="Tell us about your concerns or question"
                    required
                    disabled={loading}
                  />
                </div>
                <div>
                    <button
                    type="submit"
                    className={`bg-gradient-to-r yellow-600 hover:' bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:opacity-90 transition duration-300 ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    aria-label="Submit contact form"
                    disabled={loading}
                    >
                    {loading ? "Sending..." : "Send Message"}
                    </button> 
                </div>
              </form>

              {/* Feedback message */}
              {formStatus && (
                <p
                  className={`mt-4 font-semibold ${
                    formStatus.success ? "text-green-600" : "text-red-600"
                  }`}
                  role="alert"
                >
                  {formStatus.message}
                </p>
              )}
            </div>
          </section>
        </main>
        <figure
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-93.3276%2C37.1783%2C-93.2892%2C37.2051&layer=mapnik&marker=37.1917%2C-93.3084"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="First and Last Marketing Location Map"
            className="rounded-2xl"
            aria-label="Map showing Springfield Missouri location"
          />
        </figure>
      </div>
    </article>
  )
}

export default Contact
