import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaHome } from 'react-icons/fa';
import logo from '../../assets/logo.png'; // Use ../../assets/logo.png if you're in src/Components/blog/

const BlogNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollNav = (e, sectionId) => {
    e.preventDefault();
    sessionStorage.setItem('scrollTo', sectionId);
    navigate('/');
    setIsOpen(false);
    setServicesOpen(false);
  };

  const navLinks = [
    { name: 'Blog', href: '/blog', icon: <FaHome className="inline mr-1" /> },
    {
      name: 'Services',
      dropdown: [
        'Web Design',
        'Hosting',
        'Reputation Management',
        'Marketing Automation',
        'Chat Platforms',
        'Social Media Tools',
        'SEO & Optimization',
      ],
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About Us', scrollTo: '#about' },
    { name: 'Contact', scrollTo: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white border-b-4 border-gradient-to-r from-purple-800 via-blue-800 to-yellow-500 transition-shadow ${
        shadow ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src={logo} alt="First and Last Marketing Logo" className="w-10 h-10 object-contain" />
          <span className="text-lg font-bold text-purple-900">First & Last</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link, i) =>
            link.dropdown ? (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="text-gray-700 hover:text-purple-800 transition flex items-center gap-1"
                  aria-haspopup="true"
                  aria-expanded={servicesOpen ? 'true' : 'false'}
                  type="button"
                >
                  {link.name} <span className="text-xs">▼</span>
                </button>

                {/* Dropdown menu */}
                <div
                  className={`absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-150 ease-in-out ${
                    servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  {link.dropdown.map((item, j) => (
                    <a
                      key={j}
                      href="/"
                      onClick={(e) => handleScrollNav(e, '#services')}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-purple-800 whitespace-nowrap"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ) : link.scrollTo ? (
              <a
                key={i}
                href="/"
                onClick={(e) => handleScrollNav(e, link.scrollTo)}
                className="text-gray-700 hover:text-purple-800 transition"
              >
                {link.name}
              </a>
            ) : (
              <a
                key={i}
                href={link.href}
                className={`text-gray-700 hover:text-purple-800 transition ${
                  location.pathname === link.href ? 'font-semibold text-purple-800' : ''
                }`}
              >
                {link.icon} {link.name}
              </a>
            )
          )}

          {/* Desktop CTA */}
          <div className="ml-4">
            <button
              onClick={() => navigate('/pricing')}
              className="ml-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-full transition"
            >
              Explore Pricing
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 text-xl focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <div className="flex flex-col space-y-3 p-4 text-sm">
            {navLinks.map((link, i) =>
              link.dropdown ? (
                <div key={i}>
                  <p className="font-semibold text-gray-800 flex items-center gap-1">
                    {link.name} <span className="text-xs">▼</span>
                  </p>
                  <div className="pl-4">
                    {link.dropdown.map((item, j) => (
                      <a
                        key={j}
                        href="/"
                        onClick={(e) => handleScrollNav(e, '#services')}
                        className="block text-gray-600 py-1 hover:text-purple-800"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ) : link.scrollTo ? (
                <a
                  key={i}
                  href="/"
                  onClick={(e) => handleScrollNav(e, link.scrollTo)}
                  className="text-gray-700 hover:text-purple-800"
                >
                  {link.name}
                </a>
              ) : (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-purple-800"
                >
                  {link.icon} {link.name}
                </a>
              )
            )}

            {/* Mobile CTA */}
            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/pricing');
              }}
              className=" bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-full transition"
            >
              Explore Pricing
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default BlogNavBar;
