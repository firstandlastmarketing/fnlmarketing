import React from "react";
import { motion } from "framer-motion";

// ===[ YOUR COMPONENT & ASSET IMPORTS ]===
// Imports remain the same as you provided
import { FaAward, FaHeart, FaGlobe, FaServer, FaChartLine, FaComments, FaRobot, FaBolt, FaQuoteLeft } from "react-icons/fa";
import aboutImage from "../../assets/aboutImage.png";
import ExplorePricingCTA from '../marketing/ExplorePricingCTA.jsx';

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

const About = () => {

// Data remains the same, but icons are now styled within the mapping
const stats = [
  { value: "100+", label: "Automations Built", icon: FaRobot },
  { value: "24/7", label: "Lead Capture", icon: FaBolt },
  { value: "10+", label: "Years Combined Exp.", icon: FaAward },
  { value: "99.9%", label: "Uptime Guarantee", icon: FaServer },
];

const keyServices = [
  { icon: FaChartLine, text: "Advanced SEO, PPC, and conversion-focused web design to drive traffic and sales." },
  { icon: FaServer, text: "Secure, high-performance hosting optimized for speed and 99.9% uptime." },
  { icon: FaHeart, text: "Full-suite Reputation Management Software that monitors, requests, and manages online reviews." },
  { icon: FaBolt, text: "Database Reactivation Campaigns to re-engage past customers with automated outreach." },
  { icon: FaChartLine, text: "Email & SMS Marketing Automation built for conversion, onboarding, and nurture flows." },
  { icon: FaRobot, text: "Live Chat & AI Chatbot integration that turns visitors into leads 24/7." },
  { icon: FaComments, text: "Social Media Post Scheduler tools to maintain consistency and visibility across all platforms." },
];

  return (
    <section id="about" className="relative text-white isolate overflow-hidden">
      {/* BRANDING MATCH: This is the signature dark gradient background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 py-20 sm:py-28">
        <motion.article 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          {/* ENHANCED Image Section */}
          <motion.figure variants={fadeInUp} className="lg:w-5/12 w-full relative flex justify-center">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto ring-2 ring-purple-500/50">
              <img
                src={aboutImage}
                alt="Our expert digital team working on conversion-optimized websites and marketing automation"
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />
            </div>
            {/* ENHANCED Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl" aria-hidden="true"/>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl" aria-hidden="true"/>
            <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-md p-3 rounded-xl shadow-lg z-20 border border-white/20">
              <strong className="text-3xl font-bold text-yellow-400">10+</strong>
              <small className="block text-xs font-medium text-gray-200">Years Experience</small>
            </div>
          </motion.figure>

          {/* ENHANCED Text Content */}
          <motion.div variants={staggerContainer} className="lg:w-7/12">
            <header className="mb-8">
              <motion.h2 variants={fadeInUp} id="about-title" className="text-4xl md:text-5xl font-extrabold mb-4 [text-wrap:balance]">
                An Agency Built on <span className="text-yellow-400">Ownership & Results</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-gray-300 leading-relaxed">
                We are a full-service digital agency helping businesses generate leads, boost conversions, and dominate their niche online. Our expert team blends <strong>web design, automation, and AI</strong> to deliver consistent results that matter.
              </motion.p>
            </header>

            {/* ENHANCED Key Services Section */}
            <motion.section variants={fadeInUp} aria-label="What We Offer" className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-6">What Sets Us Apart</h3>
              <ul className="space-y-4">
                {keyServices.slice(0, 4).map((item, index) => ( // Show first 4 for impact
                  <motion.li key={index} variants={fadeInUp} className="flex items-start">
                    <div className="flex-shrink-0 bg-white/10 p-2.5 rounded-full mr-4 border border-white/10">
                      <item.icon className="text-yellow-400 h-5 w-5" />
                    </div>
                    <p className="text-gray-300 pt-1">{item.text}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* ENHANCED Stats Section */}
            <motion.section variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-center">
              {stats.map((item) => (
                <div key={item.label} className="bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                  <strong className="text-3xl font-bold text-yellow-400">{item.value}</strong>
                  <p className="text-xs text-gray-300 mt-1">{item.label}</p>
                </div>
              ))}
            </motion.section>

            {/* ENHANCED CTA */}
            <motion.nav variants={fadeInUp} aria-label="Explore services">
                <ExplorePricingCTA
                    label="Discover Our Packages"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold px-8 py-3.5 rounded-full transition-transform transform hover:scale-105 shadow-lg shadow-yellow-500/20"
                />
            </motion.nav>
          </motion.div>
        </motion.article>

        {/* ENHANCED Mission Section */}
        <motion.aside
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          aria-labelledby="mission-heading"
          className="mt-28 bg-gradient-to-br from-purple-900/50 to-blue-900/30 rounded-2xl p-8 md:p-12 shadow-2xl relative border border-white/10 backdrop-blur-xl"
        >
          <div className="relative z-10 text-center">
             <FaQuoteLeft className="text-yellow-400/50 h-16 w-16 mx-auto mb-6" />
            <h3 id="mission-heading" className="text-3xl font-bold text-white mb-6 [text-wrap:balance]">
              Our Mission
            </h3>
            <blockquote className="text-xl text-gray-200 mb-8 italic max-w-4xl mx-auto leading-relaxed">
              "To give every business—big or small—the power to compete and win online. We don't just build websites; we build visibility, trust, and growth systems powered by smart automation and personalized strategies."
            </blockquote>
            <figcaption className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mr-4 ring-2 ring-yellow-400">
                <FaGlobe className="text-yellow-300 h-8 w-8" />
              </div>
              <div>
                <cite className="font-semibold text-white text-lg not-italic">
                  Enoch A. Twumasi
                </cite>
                <p className="text-sm text-gray-300">Founder & CEO</p>
              </div>
            </figcaption>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default About;