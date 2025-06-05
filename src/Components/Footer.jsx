import React, { useState } from 'react'
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        'fnlserviceid',
        'fnltemplateid',
        {
          email: email,
          form_name: 'Newsletter Signup',
        },
        '_NXkr3UnpbWQmmVNs'
      )
      alert('Thank you for subscribing!')
      setEmail('')
    } catch (error) {
      alert('Subscription failed. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Company Info */}
          <section className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">First and Last Marketing</h2>
            <p className="text-white/80 mb-6">
              Turning Clicks Into Clients — helping your business generate, nurture, and convert leads.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.instagram.com/firstandlastm/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/fnlmarketting" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                <FaFacebookF />
              </a>
              <a href="https://www.tiktok.com/@first.last.market" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                <FaTiktok />
              </a>
              <a href="http://linkedin.com/company/first-last-marketing" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                <FaLinkedinIn />
              </a>
              <a href="https://x.com/FirstAndLastM" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/@firstandlastm" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                <FaYoutube />
              </a>
            </div>
          </section>

          {/* Quick Links */}
          <section>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </section>

          {/* Services */}
          <section>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>Web Design & Development</li>
              <li>Web Hosting</li>
              <li>Online Reputation Management</li>
            </ul>
          </section>
        </div>

        {/* Newsletter */}
        <section className="bg-white/10 rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-white/70 mb-4">Stay updated with our latest strategies and offers.</p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row w-full lg:w-2/3">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="px-6 py-3 rounded-full bg-white text-black focus:outline-none mb-3 sm:mb-0 sm:mr-4 w-full"
              required
            />
            <input type="hidden" name="form_name" value="Newsletter Signup" />
            <button
              type="submit"
              disabled={loading}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-full transition shadow-lg"
            >
              {loading ? 'Sending...' : 'Subscribe'}
            </button>
          </form>
        </section>

        {/* Contact Info + Legal */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 text-sm mb-4 md:mb-0">
            <div className="flex items-center mb-1">
              <MdLocationOn className="mr-2" /> Springfield, Missouri
            </div>
            <div className="flex items-center mb-1">
              <MdPhone className="mr-2" /> +1 (573) 202-0088
            </div>
            <div className="flex items-center">
              <MdEmail className="mr-2" /> fnlmarketting@gmail.com
            </div>
          </div>
          <ul className="flex space-x-6 text-white/70 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
