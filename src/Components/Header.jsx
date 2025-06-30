import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorNav = (hash) => {
    if (location.pathname === "/") {
      const el = document.querySelector(hash);
      if (el) {
        // Get header height (default 72px, adjust if needed)
        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight : 72;
        const elTop = el.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elTop - headerHeight,
          behavior: "smooth",
        });
      }
    } else {
      sessionStorage.setItem("scrollTo", hash);
      navigate("/");
    }
    setIsMenuOpen(false);
  };

  const navlinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { to: "/pricing", label: "Pricing" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About Us" },
    { href: "#contact", label: "Contact" },
    { to: "/blog", label: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-md overflow-x-hidden">
      <div className="relative overflow-x-hidden">
        {/* Gradient background for both header and mobile menu */}
        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700 overflow-x-hidden">
          {/* Overlay for dimming the gradient */}
          <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
          {/* Header bar */}
          <div className="relative max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between min-h-[72px] z-10 overflow-x-hidden">
            {/* Logo */}
            <a
              onClick={() => handleAnchorNav("#home")}
              className="flex items-center gap-2 min-w-0 whitespace-nowrap cursor-pointer overflow-x-hidden"
              aria-label="Go to homepage"
            >
              <img
                src={logo}
                alt="First and Last Marketing company logo"
                loading="lazy"
                decoding="async"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain flex-shrink-0"
              />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400 truncate max-w-[160px] sm:max-w-[220px] md:max-w-[300px]">
                First & Last Marketing
              </span>
            </a>

            {/* Desktop Nav */}
            <nav
              className="hidden [@media(min-width:975px)]:flex items-center space-x-4 xl:space-x-6 flex-grow justify-center"
              aria-label="Main navigation"
            >
              {navlinks.map((link, index) =>
                link.to ? (
                  <Link
                    key={index}
                    to={link.to}
                    className={`text-sm xl:text-base ${
                      link.label === "Pricing"
                        ? "text-white hover:text-yellow-400 animate-glow-pulse font-semibold"
                        : "text-white hover:text-yellow-400"
                    } transition-colors duration-200 whitespace-nowrap`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={index}
                    onClick={() => handleAnchorNav(link.href)}
                    className="text-sm xl:text-base text-white hover:text-yellow-400 transition-colors duration-200 whitespace-nowrap bg-transparent border-none cursor-pointer"
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden [@media(min-width:975px)]:block flex-shrink-0 ml-4">
              <button
                onClick={() => navigate("/pricing")}
                className="bg-yellow-500 hover:bg-yellow-600 text-sm xl:text-base text-white px-4 xl:px-6 py-2 rounded-full transition duration-200 whitespace-nowrap"
              >
                Explore Pricing
              </button>
            </div>

            {/* Hamburger Button */}
            <button
              className="[@media(min-width:975px)]:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Mobile Nav */}
          {isMenuOpen && (
            <aside className="[@media(min-width:975px)]:hidden relative z-10 shadow-lg p-4">
              <nav aria-label="Mobile menu">
                <ul className="flex flex-col space-y-4">
                  {navlinks.map((link, index) => (
                    <li key={index}>
                      {link.to ? (
                        <Link
                          to={link.to}
                          className={`block py-2 transition ${
                            link.label === "Pricing"
                              ? "text-white hover:text-yellow-400 font-semibold animate-glow-pulse"
                              : "text-white hover:text-yellow-400"
                          }`}
                          onClick={toggleMenu}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleAnchorNav(link.href)}
                          className="block w-full text-left text-white hover:text-yellow-400 transition py-2 bg-transparent border-none"
                        >
                          {link.label}
                        </button>
                      )}
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => {
                        setIsMenuOpen(false); // close menu on click
                        navigate("/pricing");
                      }}
                      className="block w-full bg-yellow-500 hover:bg-yellow-600 text-white text-center px-4 py-2 rounded-full transition"
                    >
                      Explore Pricing
                    </button>
                  </li>
                </ul>
              </nav>
            </aside>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;