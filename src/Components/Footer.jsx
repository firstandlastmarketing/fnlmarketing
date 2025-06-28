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
import ExplorePricingCTA from "./ExplorePricingCTA";

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
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      className="relative text-white pt-12 pb-6"
      aria-labelledby="footer-heading"
    >
      {/* Background gradient and overlay, both behind content */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900" />
        <div className="absolute inset-0 bg-black/36" />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Company Info */}
          <section aria-label="Company Info" className="lg:col-span-2">
            <h2 id="footer-heading" className="text-3xl font-bold mb-3">
              First and Last Marketing
            </h2>
            <p className="text-white/80 mb-5 max-w-md">
              Turning Clicks Into Clients — we help businesses generate,
              nurture, and convert leads through strategic digital marketing.
            </p>
            <nav
              aria-label="Social media links"
              className="flex flex-wrap gap-3"
            >
              <a
                href="https://www.instagram.com/firstandlastm/"
                aria-label="Instagram"
                className="social-link hover:text-yellow-400 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/fnlmarketting"
                aria-label="Facebook"
                className="social-link hover:text-yellow-400 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.tiktok.com/@first.last.market"
                aria-label="TikTok"
                className="social-link hover:text-yellow-400 transition"
              >
                <FaTiktok />
              </a>
              <a
                href="http://linkedin.com/company/first-last-marketing"
                aria-label="LinkedIn"
                className="social-link hover:text-yellow-400 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/FirstAndLastM"
                aria-label="Twitter / X"
                className="social-link hover:text-yellow-400 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.youtube.com/@firstandlastm"
                aria-label="YouTube"
                className="social-link hover:text-yellow-400 transition"
              >
                <FaYoutube />
              </a>
            </nav>
          </section>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation" className="text-white/80">
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleAnchorNav("#home")}
                  className="hover:text-white bg-transparent border-none p-0 text-left cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleAnchorNav("#about")}
                  className="hover:text-white bg-transparent border-none p-0 text-left cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleAnchorNav("#services")}
                  className="hover:text-white bg-transparent border-none p-0 text-left cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleAnchorNav("#contact")}
                  className="hover:text-white bg-transparent border-none p-0 text-left cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <section aria-label="Core Services" className="text-white/80">
            <h3 className="text-xl font-semibold mb-3">Services</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
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

        {/* CTA Button */}
        <div
          className="flex justify-center lg:justify-start mb-8"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <ExplorePricingCTA
            label="Discover Our Pricing & Packages"
            className="px-6 py-2 text-base shadow-lg max-w-xs w-full sm:w-auto"
          />
        </div>

        {/* Newsletter Signup */}
        <section
          aria-label="Newsletter Signup"
          className="bg-white/10 rounded-xl p-6 mb-10"
        >
          <h3 className="text-2xl font-bold mb-2">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-white/70 mb-4">
            Stay ahead with expert marketing insights, growth strategies, and
            special offers.
          </p>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row w-full lg:w-2/3"
            role="form"
            aria-live="polite"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="px-6 py-3 rounded-full bg-white text-black focus:outline-none mb-3 sm:mb-0 sm:mr-4 w-full"
            />
            <input type="hidden" name="form_name" value="Newsletter Signup" />
            <button
              type="submit"
              disabled={loading}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-full transition shadow-lg"
            >
              {loading ? "Sending..." : "Subscribe"}
            </button>
          </form>
          {status === "success" && (
            <p className="text-green-400 mt-2">Thank you for subscribing!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-2">
              Subscription failed. Please try again later.
            </p>
          )}
        </section>

        {/* Contact Info & Legal */}
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <address className="not-italic mb-4 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-1">
              <MdLocationOn className="mr-2" /> Springfield, Missouri
            </div>
            <div className="flex items-center justify-center md:justify-start mb-1">
              <MdPhone className="mr-2" /> +1 (573) 202-0088
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <MdEmail className="mr-2" /> contact@firstandlastmarketing.com
            </div>
          </address>
          <ul className="flex flex-wrap justify-center md:justify-end space-x-6 text-center">
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-of-use" className="hover:text-white">
                Terms of Use
              </Link>
            </li>
            <li className="mt-2 md:mt-0">
              &copy; {new Date().getFullYear()} First and Last Marketing
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
