import React, { useEffect, useState } from "react"; // Added React for clarity
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import ReactPlayer from "react-player/youtube"; // Corrected the import from 'react-player' to 'react-player/youtube' for tree-shaking

// ===[ ALL NECESSARY IMPORTS ADDED HERE TO FIX ERRORS ]===
import ReviewWidget from "../marketing/ReviewWidget";
import founderImage from "../../assets/team/enoch-a-twumasi-founder.jpg"; // FIX: Added import for the founder image
import { 
  ChevronDown, 
  Layers, 
  Target, 
  Bot, 
  PlayCircle,
  HeartHandshake, // FIX: Added missing icon import
  Zap,            // FIX: Added missing icon import
  ShieldCheck     // FIX: Added missing icon import
} from 'lucide-react';


// ===[ ANIMATION VARIANTS & SHARED DATA ]===
// These are defined at the top level to be accessible by all components in this file.

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// FIX: Added the missing valuePropositions data structure at the global scope
const valuePropositions = [
  { icon: HeartHandshake, statement: "We Build Partnerships, Not Projects.", elaboration: "Your success is our success. We're deeply invested in your growth and provide transparent, direct communication from start to finish." },
  { icon: Zap, statement: "Performance is Our Obsession.", elaboration: "We custom-code every site for speed, security, and scalability. This isn't a template; it's a high-performance engine for your business." },
  { icon: ShieldCheck, statement: "You Own Your Asset, 100%.", elaboration: "The website we build for you is a permanent asset that you own completely. No rental fees, no subscriptions, no vendor lock-in. Ever." }
];


// ===[ THE MODERNIZED HERO SECTION COMPONENT (UNCHANGED) ]===
const HeroSection = () => {
  const heroSlides = [
    { src: "https://res.cloudinary.com/duaxifuiq/image/upload/v1751581339/first-last-marketing-web-design-springfield-mo-hvac-company-website-screenshot_baotwk.png", alt: "Modern HVAC company website design" },
    { src: "https://res.cloudinary.com/duaxifuiq/image/upload/v1751581346/first-last-marketing-web-design-springfield-mo-plumbing-service-website-screenshot_rtriqc.png", alt: "Sleek plumbing service website layout" },
    { src: "https://res.cloudinary.com/duaxifuiq/image/upload/v1751581335/first-last-marketing-web-design-springfield-mo-electrical-website-screenshot_v6vvq6.png", alt: "Professional electrical contractor website" },
    { src: "https://res.cloudinary.com/duaxifuiq/image/upload/v1751581344/first-last-marketing-web-design-springfield-mo-home-remodeling-website-screenshot_o5dpl7.png", alt: "Elegant home remodeling portfolio website" },
    { src: "https://res.cloudinary.com/duaxifuiq/image/upload/v1751581349/first-last-marketing-web-design-springfield-mo-roofing-company-website-screenshot_xqvhsh.png", alt: "Trustworthy roofing company website design" },
    { src: "https://res.cloudinary.com/duaxifuiq/image/upload/v1751581356/first-last-marketing-web-design-springfield-mo-landscaping-website-screenshot_gthvmz.png", alt: "Beautiful landscaping company website" },
    { src: "https://res.cloudinary.com/duaxifuiq/image/upload/v1751581342/first-last-marketing-web-design-springfield-mo-pest-control-website-screenshot_pfmqy6.png", alt: "Effective pest control service website" },
    { src: "https://res.cloudinary.com/duaxifuiq/image/upload/v1751581333/first-last-marketing-web-design-springfield-mo-cleaning-service-website-screenshot_eua1pm.png", alt: "Professional cleaning service website design" },
  ];
  const heroStats = [
    { value: "95+", label: "PageSpeed Score" },
    { value: "100%", label: "Website Ownership" },
    { value: "0", label: "Templates Used" },
    { value: "$0", label: "Recurring Fees" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide, heroSlides.length]);

  return (
    <section
      id="home"
      className="relative w-full min-h-dvh flex items-center py-24 sm:py-32 lg:py-0"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-16 items-center">
          <motion.div
            className="text-center lg:text-left"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white [text-wrap:balance] leading-tight"
            >
              Websites That Don't Just Look Good—
              <br />
              <TypeAnimation
                sequence={["They Perform.", 2500, "They Convert.", 2500, "They Scale.", 2500, "They Last.", 2500]}
                wrapper="span"
                speed={40}
                className="text-yellow-400"
                repeat={Infinity}
              />
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg md:text-xl text-gray-200/90 [text-wrap:balance]"
            >
              We build high-performance, custom-coded digital assets that you
              own forever. No templates. No recurring fees. Just pure,
              measurable results.
            </motion.p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="lg:row-span-2 w-full"
          >
            <div className="relative aspect-video bg-slate-900/30 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden ring-1 ring-white/10">
              <AnimatePresence>
                <motion.img
                  key={currentSlide}
                  src={heroSlides[currentSlide].src}
                  alt={heroSlides[currentSlide].alt}
                  loading="eager"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4 text-center"
            >
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl sm:text-4xl font-bold text-yellow-400">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-300/80 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-white text-black font-bold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                Book a Free Strategy Call
              </Link>
              <Link
                to="/portfolio"
                className="w-full sm:w-auto border border-white/50 text-white hover:bg-white/10 font-medium px-8 py-3 rounded-full text-center transition-all"
              >
                View Our Craft
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ===[ REUSABLE HELPER COMPONENTS (UNCHANGED) ]===
const Section = ({ children, className = "", id }) => (
  <section
    id={id}
    className={`w-full py-14 sm:py-20 px-4 sm:px-6 lg:px-8 flex justify-center ${className}`}
  >
    <div className="w-full max-w-7xl">{children}</div>
  </section>
);

const AccordionItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div variants={fadeInUp} className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5"
      >
        <span className="text-lg font-medium text-white">{q}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="w-6 h-6 text-yellow-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 pt-1 text-gray-300 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


// ====[ ALL OTHER PAGE SECTIONS (UNCHANGED) ]====
const ProblemPromiseSection = () => (
  <Section className="bg-gray-900/20">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="text-center max-w-4xl mx-auto"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
      >
        Is Your Website Just an Expense? <br />{" "}
        <span className="text-yellow-400">
          Let's Turn It Into Your #1 Asset.
        </span>
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        className="mt-5 text-lg lg:text-xl text-gray-300"
      >
        Most agencies "rent" you a slow, generic template site, trapping you in
        endless monthly fees. We hand-craft a permanent digital asset that works
        for you 24/7.{" "}
        <strong className="mt-2 block text-white">
          You own it 100%. One time. For a lifetime of value.
        </strong>
      </motion.p>
      <motion.div variants={fadeInUp} className="mt-8">
        <Link
          to="/pricing"
          className="inline-block bg-white/10 border border-white/20 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-white/20 transition-transform transform hover:scale-105"
        >
          See Our Transparent Pricing
        </Link>
      </motion.div>
    </motion.div>
  </Section>
);

const ProcessSection = () => (
  <Section id="process">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="text-center mb-12">
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Your Path to a High-Performance Website
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-300"
        >
          We make the process simple, transparent, and focused on your goals.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {[
          { num: "01", title: "Strategy Call", desc: "A free, 15-minute call to understand your goals, answer your questions, and define a clear roadmap." },
          { num: "02", title: "Custom Build", desc: "We get to work, custom-coding your high-speed, SEO-ready website from scratch with regular progress updates." },
          { num: "03", title: "Launch & Grow", desc: "We deploy your new site and hand over the keys. You own a powerful new asset, ready to attract and convert customers." },
        ].map((step, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="flex flex-col items-center"
          >
            <div className="text-5xl font-extrabold text-yellow-400/50 mb-2">
              {step.num}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div variants={fadeInUp} className="text-center mt-12">
        <Link
          to="/contact"
          className="inline-block bg-white text-black font-bold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          Book Your Free Strategy Call
        </Link>
      </motion.div>
    </motion.div>
  </Section>
);

const SolutionsSection = () => (
  <Section id="services" className="bg-gray-900/20">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="text-center"
    >
      <motion.h2
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-bold tracking-tight"
      >
        A Complete Digital Growth System
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        className="mt-4 max-w-2xl mx-auto text-lg text-gray-300"
      >
        We don't just build websites. We create integrated systems that solve
        your biggest marketing challenges.
      </motion.p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Layers, title: "Custom Web Development", description: "Lightning-fast websites you own 100%, custom-coded to convert visitors into loyal customers." },
          { icon: Target, title: "SEO & Content Strategy", description: "Climb the ranks on Google with expert SEO and content that establishes you as an industry authority." },
          { icon: Bot, title: "AI & Marketing Automation", description: "Capture every lead and save hundreds of hours with a 24/7 AI-powered assistant and automated workflows." },
        ].map((service, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="group relative flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400 hover:bg-white/10 hover:-translate-y-2"
          >
            <div className="flex-shrink-0 bg-yellow-400 text-purple-900 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
              <service.icon className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-center text-gray-300 flex-grow">
              {service.description}
            </p>
            <Link
              to="/services"
              className="mt-6 font-bold text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Learn More →
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </Section>
);

const ShowcaseSection = () => (
  <Section id="portfolio">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="text-center">
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          We Build Quality You Can See
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-4 max-w-3xl mx-auto text-lg text-gray-300"
        >
          This healthcare website concept demonstrates our commitment to clean,
          professional design and user-focused functionality.
        </motion.p>
      </div>
      <motion.div
        variants={fadeInUp}
        className="mt-10 grid lg:grid-cols-5 gap-8 items-center"
      >
        <div className="lg:col-span-3 aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-600/50">
          <ReactPlayer
            url="https://youtu.be/jKC4e1612eM"
            width="100%"
            height="100%"
            controls
            light={true}
            volume={0.5}
            playIcon={
              <PlayCircle className="w-20 h-20 text-white/80 hover:text-white transition" />
            }
            title="E&C Clinic Healthcare Website Redesign Concept"
          />
        </div>
        <div className="lg:col-span-2 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            E&C Clinic Showcase Project
          </h3>
          <div className="space-y-4 border-l-4 border-yellow-400 pl-4">
            <div>
              <h4 className="font-semibold text-white">Objective</h4>
              <p className="text-gray-300">
                To demonstrate our ability to build a site that establishes
                trust and streamlines patient interactions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Demonstrated Skills</h4>
              <p className="text-gray-300">
                User-centric navigation, responsive design, conversion-focused
                layout, and accessibility principles.
              </p>
            </div>
          </div>
          <motion.div variants={fadeInUp} className="mt-8">
            <Link
              to="/portfolio"
              className="inline-block bg-yellow-400 text-purple-900 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105"
            >
              Explore Our Full Showcase
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  </Section>
);

const CommitmentSection = () => (
  <Section id="commitment" className="bg-gray-900/20">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="text-center mb-12">
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Your Trust is Our Foundation
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-300"
        >
          We don't have clients, we have partners. Our success is built on these
          core commitments to you.
        </motion.p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {valuePropositions.map((vp, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="bg-white/5 p-6 rounded-2xl border border-white/10"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-yellow-400 text-purple-900 p-3 rounded-full">
                <vp.icon className="h-6 w-6" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {vp.statement}
            </h3>
            <p className="text-gray-300">{vp.elaboration}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </Section>
);

const FounderSection = () => (
  <Section id="founder">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid md:grid-cols-2 gap-x-12 gap-y-8 items-center"
    >
      <motion.div
        variants={fadeInUp}
        className="w-full aspect-square max-w-md mx-auto md:max-w-none"
      >
        <img
          src={founderImage}
          alt="Enoch A. Twumasi, Founder of First and Last Marketing"
          className="rounded-2xl object-cover w-full h-full shadow-2xl"
        />
      </motion.div>
      <motion.div variants={fadeInUp}>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Built by a Founder, For Founders
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          My name is Enoch A. Twumasi. I started First and Last Marketing
          because I saw too many passionate business owners being held back by
          subpar, overpriced websites. My mission is to give you the powerful,
          custom-coded tools you deserve—tools that I would want for my own
          business.
        </p>
        <p className="mt-4 text-lg text-gray-300">
          We operate on principles of integrity, transparency, and a genuine
          desire to see you succeed. When you partner with us, you're not just
          another project number; you're a partner in growth.
        </p>
        <div className="mt-6">
          <Link
            to="/about"
            className="font-bold text-yellow-400 hover:underline"
          >
            Learn more about our story →
          </Link>
        </div>
      </motion.div>
    </motion.div>
  </Section>
);

const FaqSection = () => (
  <Section id="faq" className="bg-gray-900/20">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-10">
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Answering Your Key Questions
        </motion.h2>
      </div>
      {[
        { q: "Do I truly own my website?", a: "Yes, 100%. You receive all the code and files. It's a permanent asset for your business, not a rental." },
        { q: "Is the website design from a template?", a: "Never. We custom-design and custom-code every single website from scratch to fit your unique brand and goals." },
        { q: "How much does a website cost?", a: "Our website packages start at a one-time fee of $350. We believe in transparent pricing, which you can explore in detail on our pricing page." },
        { q: "How long does the process take?", a: "We're fast. Most of our custom websites are designed, built, and launched in just a few days to two weeks, depending on complexity." },
      ].map((faq, i) => (
        <AccordionItem key={i} q={faq.q} a={faq.a} />
      ))}
      <motion.div variants={fadeInUp} className="text-center mt-10">
        <p className="text-gray-300">
          Have more questions?{" "}
          <Link
            to="/contact"
            className="font-bold text-yellow-400 hover:underline"
          >
            Contact us directly
          </Link>
        </p>
      </motion.div>
    </motion.div>
  </Section>
);

const FinalCtaSection = () => (
  <Section id="contact" className="text-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl p-8 sm:p-12 text-purple-900 shadow-2xl shadow-yellow-500/20"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold">
        Ready to Build a Website That <br />
        Actually Grows Your Business?
      </h2>
      <p className="mt-4 text-lg text-purple-800/90 font-medium">
        Let's schedule a free, 15-minute strategy call. No pressure. No
        obligation. Just a clear, actionable plan for your success.
      </p>
      <div className="mt-8">
        <Link
          to="/contact"
          className="inline-block px-12 py-4 rounded-full text-center shadow-lg transition transform hover:scale-105 bg-purple-900 hover:bg-black text-white font-bold text-lg"
        >
          Book Your Free Strategy Call
        </Link>
      </div>
    </motion.div>
  </Section>
);

// ===[ THE MAIN PAGE COMPONENT (UNCHANGED) ]===
const HomePage = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700 overflow-x-hidden text-white">
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10">
        <HeroSection />
        <ProblemPromiseSection />
        <ProcessSection />
        <SolutionsSection />
        <ShowcaseSection />
        <CommitmentSection />
        <FounderSection />
        <FaqSection />
        <ReviewWidget />
        <FinalCtaSection />
      </div>
    </div>
  );
};

export default HomePage;