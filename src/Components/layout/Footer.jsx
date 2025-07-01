import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { useLocation, useNavigate, Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import ExplorePricingCTA from "../marketing/ExplorePricingCTA.jsx";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorNav = (hash) => {
    if (location.pathname === "/") {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollTo", hash);
      navigate("/");
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        "fnlserviceid",
        "fnltemplateid",
        {
          email,
          form_name: "Newsletter Signup",
        },
        "_NXkr3UnpbWQmmVNs"
      );
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.error("EmailJS Error:", error); // It's good practice to log the error
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // Corrected and Refactored Footer Component
  return (
    <footer
      className="relative text-white pt-8 pb-6 isolate" // <-- isolate creates a new stacking context, pt-12 -> pt-8
      aria-labelledby="footer-heading"
    >
      {/* BACKGROUND FIX: Use a single container for background layers */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900" />
        <div className="absolute inset-0 bg-black/40" /> {/* Increased overlay opacity slightly for better text contrast */}
      </div>

      <div className="container mx-auto px-4">
        {/* Main content grid with reduced gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <section aria-label="Company Info" className="lg:col-span-2">
            <h2 id="footer-heading" className="text-3xl font-bold mb-2">
              First and Last Marketing
            </h2>
            <p className="text-white/80 mb-4 max-w-md"> {/* mb-5 -> mb-4 */}
              Turning Clicks Into Clients — we help businesses generate,
              nurture, and convert leads through strategic digital marketing.
            </p>
            <nav
              aria-label="Social media links"
              className="flex flex-wrap gap-4" // gap-3 -> gap-4 for slightly better spacing
            >
              {/* Added text-2xl for icon sizing */}
              <a href="https://www.instagram.com/firstandlastm/" aria-label="Instagram" className="text-2xl hover:text-yellow-400 transition-colors"> <FaInstagram /> </a>
              <a href="https://www.facebook.com/fnlmarketting" aria-label="Facebook" className="text-2xl hover:text-yellow-400 transition-colors"> <FaFacebookF /> </a>
              <a href="https://www.tiktok.com/@first.last.market" aria-label="TikTok" className="text-2xl hover:text-yellow-400 transition-colors"> <FaTiktok /> </a>
              <a href="http://linkedin.com/company/first-last-marketing" aria-label="LinkedIn" className="text-2xl hover:text-yellow-400 transition-colors"> <FaLinkedinIn /> </a>
              <a href="https://x.com/FirstAndLastM" aria-label="Twitter / X" className="text-2xl hover:text-yellow-400 transition-colors"> <FaTwitter /> </a>
              <a href="https://www.youtube.com/@firstandlastm" aria-label="YouTube" className="text-2xl hover:text-yellow-400 transition-colors"> <FaYoutube /> </a>
            </nav>
          </section>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation" className="text-white/80">
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1.5"> {/* space-y-2 -> space-y-1.5 */}
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </nav>

          {/* Services */}
          <section aria-label="Core Services" className="text-white/80">
            <h3 className="text-xl font-semibold mb-3">Services</h3>
            {/* RESPONSIVE FIX: Single column on mobile, two on larger screens */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm">
              <li>Web Design & Development</li>
              <li>Web Hosting</li>
              <li>Online Reputation Management</li>
              <li>Database Reactivation</li>
              <li>Email & SMS Automation</li>
              <li>Live Chat & AI Bots</li>
              <li>Social Post Schedulers</li>
            </ul>
          </section>
        </div>

        {/* CTA Button with reduced margin */}
        <div className="flex justify-center lg:justify-start mb-6" data-aos="fade-up"> {/* mb-8 -> mb-6 */}
          <ExplorePricingCTA label="Discover Our Pricing & Packages" className="px-6 py-2 text-base shadow-lg max-w-xs w-full sm:w-auto" />
        </div>

        {/* Newsletter Signup with reduced padding */}
        <section aria-label="Newsletter Signup" className="bg-white/10 rounded-xl p-5 mb-8"> {/* p-6 -> p-5, mb-10 -> mb-8 */}
          <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-white/70 mb-4">
            Stay ahead with expert marketing insights, growth strategies, and special offers.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row w-full lg:w-2/3" role="form" aria-live="polite">
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="px-5 py-2.5 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-3 sm:mb-0 sm:mr-3 w-full" // Reduced padding and margin
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2.5 rounded-full transition shadow-lg shrink-0" // Reduced padding, added shrink-0
            >
              {loading ? "Sending..." : "Subscribe"}
            </button>
          </form>
          {status === "success" && <p className="text-green-400 mt-2">Thank you for subscribing!</p>}
          {status === "error" && <p className="text-red-400 mt-2">Subscription failed. Please try again later.</p>}
        </section>

        {/* Contact Info & Legal */}
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-white/70 gap-y-3">
          <address className="not-italic text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start"> <MdLocationOn className="mr-2 shrink-0" /> Springfield, Missouri </div>
            <div className="flex items-center justify-center md:justify-start"> <MdPhone className="mr-2 shrink-0" /> <a href="tel:+15732020088" className="hover:text-white">+1 (573) 202-0088</a> </div>
            <div className="flex items-center justify-center md:justify-start"> <MdEmail className="mr-2 shrink-0" /> <a href="mailto:contact@firstandlastmarketing.com" className="hover:text-white">contact@firstandlastmarketing.com</a> </div>
          </address>
          <div className="flex flex-col md:flex-row items-center gap-x-6 gap-y-2 text-center">
            <div className="flex gap-x-6">
              <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link to="/terms-of-use" className="hover:text-white">Terms of Use</Link>
            </div>
            <span>© {new Date().getFullYear()} First and Last Marketing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;