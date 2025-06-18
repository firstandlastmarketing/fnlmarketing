import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navlinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700 sticky top-0 z-50 w-full shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between min-h-[72px]">
        {/* Logo & Brand */}
        <a href="#home" className="flex items-center gap-2 min-w-0 whitespace-nowrap" aria-label="Go to homepage">
          <img
            src={logo}
            alt="First and Last Marketing company logo"
            loading="lazy"
            decoding="async"
            className="w-10 h-10 sm:w-11 sm:h-11 object-contain flex-shrink-0"
          />
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 truncate">
            First & Last Marketing
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden [@media(min-width:940px)]:flex items-center space-x-4 xl:space-x-6 flex-grow justify-center" aria-label="Main navigation">
          {navlinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm xl:text-base text-white hover:text-yellow-400 transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}

          {/* Add Blog Link here with React Router */}
          <Link
            to="/blog"
            className="text-sm xl:text-base text-white hover:text-yellow-400 transition-colors duration-200 whitespace-nowrap"
          >
            Blog
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden [@media(min-width:940px)]:block flex-shrink-0 ml-4">
          <a
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-sm xl:text-base text-white px-4 xl:px-6 py-2 rounded-full transition duration-200 whitespace-nowrap"
          >
            Get a Free Consultation
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          className="[@media(min-width:940px)]:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <aside className="[@media(min-width:940px)]:hidden bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700 shadow-lg p-4">
          <nav aria-label="Mobile menu">
            <ul className="flex flex-col space-y-4">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="block text-white hover:text-yellow-400 transition py-2"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {/* Add Blog link here for mobile */}
              <li>
                <Link
                  to="/blog"
                  className="block text-white hover:text-yellow-400 transition py-2"
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
              </li>

              <li>
                <a
                  href="#contact"
                  className="block bg-yellow-500 hover:bg-yellow-600 text-white text-center px-4 py-2 rounded-full transition"
                  onClick={toggleMenu}
                >
                  Get a Free Consultation
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      )}
    </header>
  );
};

export default Header;
