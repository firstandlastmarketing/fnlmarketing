import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExplorePricingCTA from "../marketing/ExplorePricingCTA";

// ===[ SLIDESHOW IMAGES ]===
import hvacImage from "../../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-hvac-company-website-screenshot.png";
import plumbingImage from "../../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-plumbing-service-website-screenshot.png";
import electricalImage from "../../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-electrical-website-screenshot.png";
import roofingImage from "../../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-roofing-company-website-screenshot.png";
import pestControlImage from "../../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-pest-control-website-screenshot.png";
import landscapingImage from "../../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-landscaping-website-screenshot.png";
import cleaningImage from "../../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-cleaning-service-website-screenshot.png";
import remodelingImage from "../../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-home-remodeling-website-screenshot.png";

// ===[ ANIMATION VARIANTS ]===
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  const slides = [
    {
      src: hvacImage,
      caption: "For HVAC Specialists",
      alt: "Modern HVAC company website design",
    },
    {
      src: plumbingImage,
      caption: "For Plumbers",
      alt: "High-converting plumbing service website",
    },
    {
      src: electricalImage,
      caption: "For Electricians",
      alt: "Professional electrical services website",
    },
    {
      src: remodelingImage,
      caption: "For Home Remodelers",
      alt: "Aspirational home remodeling website",
    },
    {
      src: roofingImage,
      caption: "For Roofers",
      alt: "Lead-generating roofing company website",
    },
    {
      src: pestControlImage,
      caption: "For Pest Control Experts",
      alt: "Clean pest control website design",
    },
    {
      src: landscapingImage,
      caption: "For Landscapers",
      alt: "Stunning landscaping and lawn care website",
    },
    {
      src: cleaningImage,
      caption: "For Cleaning Services",
      alt: "Bright cleaning services booking website",
    },
  ];

  const stats = [
    { value: "100+", label: "Automation Features" },
    { value: "24/7", label: "Lead Capture" },
    { value: "10+", label: "Years Combined Exp." },
    { value: "99.9%", label: "Uptime Guarantee" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timeoutRef.current);
  }, [currentSlide, slides.length]);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700 overflow-x-hidden py-4 sm:py-8 md:py-12 lg:py-16 px-2 sm:px-6 lg:px-20"
      aria-label="Hero section showcasing First & Last Marketing services"
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <motion.article
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-screen-2xl w-full px-2 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4 h-full"
      >
        {/* Text Content */}
        <div className="text-center w-full max-w-4xl mb-2">
          <motion.h1
            variants={fadeInUp}
            className="text-[1.25rem] sm:text-[1.75rem] md:text-[2.25rem] font-extrabold text-white mb-1 leading-snug text-center px-2"
          >
            Turn Clicks Into Clients—
            <span className="text-yellow-300">Smart Sites.</span> Real Leads. On
            Autopilot.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-0"
          >
            We combine high-converting websites with powerful AI and marketing
            automation to generate leads on autopilot.
          </motion.p>
        </div>

        {/* Slideshow */}
        <motion.figure
          variants={fadeInUp}
          className="w-full max-w-5xl mt-2"
          role="group"
          aria-label="Slideshow of example contractor websites"
        >
          <div className="relative aspect-video bg-slate-900/50 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden ring-1 ring-white/20 max-w-full">
            {/* Remove solid background layer to avoid flashes */}
            {/* Render ALL images, only current and previous are visible */}
            {slides.map((slide, idx) => {
              // Show current and previous, hide others
              const isCurrent = idx === currentSlide;
              const isPrev = idx === prevSlide && prevSlide !== currentSlide;
              if (!isCurrent && !isPrev) return null;
              return (
                <motion.img
                  key={idx}
                  src={slide.src}
                  alt={slide.alt}
                  initial={{ opacity: isCurrent ? 0 : 1 }}
                  animate={{ opacity: isCurrent ? 1 : 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0 object-cover w-full h-full"
                  style={{ zIndex: isCurrent ? 2 : 1 }}
                />
              );
            })}
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white p-3 text-center">
              <p className="font-semibold text-sm">
                Example Site:{" "}
                <span className="text-yellow-400">
                  {slides[currentSlide].caption}
                </span>
              </p>
            </div>
          </div>
        </motion.figure>

        {/* CTAs + Stats */}
        <div className="w-full flex flex-col items-center gap-4 mt-2">
          {/* Buttons */}
          <motion.nav
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-center gap-4"
            aria-label="Call to action"
          >
            <ExplorePricingCTA
              label="Discover Our Pricing & Packages"
              className="px-8 py-3 rounded-full text-center shadow-lg transition transform hover:scale-105 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            />
            <a
              href="#services"
              className="border border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 font-semibold px-8 py-3 rounded-full text-center transition transform hover:scale-105"
              aria-label="Explore First & Last Marketing services"
            >
              Explore Our Services
            </a>
          </motion.nav>

          {/* Stats */}
          <motion.aside variants={fadeInUp}>
            <ul
              className="flex flex-wrap justify-center gap-x-2 sm:gap-x-8 md:gap-x-12 gap-y-2 text-center max-w-full"
              aria-label="Company capabilities and statistics"
            >
              {stats.map((stat, index) => (
                <li key={index} className="min-w-[90px] flex-1">
                  <strong className="text-2xl font-bold text-white">
                    {stat.value}
                  </strong>
                  <small className="block text-sm text-slate-400 mt-1">
                    {stat.label}
                  </small>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </motion.article>
    </section>
  );
};

export default Hero;
