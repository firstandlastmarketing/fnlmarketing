import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

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
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/pricing", label: "Pricing" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
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
            <Link
              to="/"
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
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden [@media(min-width:975px)]:flex items-center space-x-4 xl:space-x-6 flex-grow justify-center"
              aria-label="Main navigation"
            >
              {navlinks.map((link, index) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={index}
                    to={link.to}
                    className={`text-sm xl:text-base font-bold tracking-wide px-2 py-1 transition-colors duration-200 whitespace-nowrap
          ${isActive
            ? "text-yellow-400"
            : "text-white hover:text-yellow-400"}
          ${link.label === "Pricing" ? "animate-glow-pulse" : ""}
        `}
                    style={{
                      borderBottomWidth: isActive ? "2px" : undefined,
                      borderColor: isActive ? "#f59e42" : undefined, // yellow-500
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
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
                  {navlinks.map((link, index) => {
                    const isActive = location.pathname === link.to;
                    return (
                      <li key={index}>
                        <Link
                          to={link.to}
                          className={`block py-2 font-bold tracking-wide transition
                  ${isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"}
                  ${link.label === "Pricing" ? "animate-glow-pulse" : ""}
                `}
                          style={{
                            borderBottomWidth: isActive ? "2px" : undefined,
                            borderColor: isActive ? "#f59e42" : undefined, // yellow-500
                          }}
                          onClick={toggleMenu}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                  <li>
                    <button
                      onClick={() => {
                        setIsMenuOpen(false); // close menu on click
                        navigate("/pricing");
                      }}
                      className="block w-auto bg-yellow-500 hover:bg-yellow-600 text-white text-center px-4 py-2 rounded-full transition"
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