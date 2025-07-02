import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player/youtube";

// ===[ YOUR COMPONENT IMPORTS ]===
// Kept your CTA component and imported the ReviewWidget as requested
import ExplorePricingCTA from "../marketing/ExplorePricingCTA";
import ReviewWidget from "../marketing/ReviewWidget"; // Assuming path is correct
import carolinsKitchenScreenshot from "../../assets/carolins-kitchen-screenshot.png";
// ===[ ASSETS & ICONS ]===
// Keeping all original image imports
import hvacImage from "../../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-hvac-company-website-screenshot.png";
import plumbingImage from "../../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-plumbing-service-website-screenshot.png";
import electricalImage from "../../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-electrical-website-screenshot.png";
import roofingImage from "../../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-roofing-company-website-screenshot.png";
import pestControlImage from "../../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-pest-control-website-screenshot.png";
import landscapingImage from "../../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-landscaping-website-screenshot.png";
import cleaningImage from "../../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-cleaning-service-website-screenshot.png";
import remodelingImage from "../../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-home-remodeling-website-screenshot.png";
// Added a placeholder for the founder image, replace with your actual asset path
import founderImage from "../../assets/team/enoch-a-twumasi-founder.jpg";

// Using Lucide-React for modern, clean icons
import { ChevronDown, Layers, Target, Bot, Phone, Rocket, Wrench, ShieldCheck, HeartHandshake, Star, Quote, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';

// ===[ ANIMATION VARIANTS ]===
const staggerContainer = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const fadeInUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

// ===[ DATA MOCKS (from your businessData.js & components) ]===
const heroSlides = [ { src: hvacImage, caption: "For HVAC Specialists" }, { src: plumbingImage, caption: "For Plumbers" }, { src: electricalImage, caption: "For Electricians" }, { src: remodelingImage, caption: "For Home Remodelers" }, { src: roofingImage, caption: "For Roofers" }];
const testimonials = [
    { name: "Jane Doe", company: "Owner, Carolin's Kitchen", quote: "First and Last Marketing delivered a website that not only looks incredible but also performs. Our online inquiries have doubled since the launch. Their process was seamless and professional.", image: carolinsKitchenScreenshot },
    { name: "Dr. John Smith", company: "E&C Clinic", quote: "The team is incredibly knowledgeable about SEO and local search. They got us on the map, literally. We've seen a noticeable increase in foot traffic from customers who found us online.", image: hvacImage }, // Using example images
    { name: "Mike R.", company: "Springfield Roofing Co.", quote: "The AI chatbot they installed is like having another employee. It answers questions and books estimates 24/7. It's been a total game-changer for our lead flow.", image: roofingImage }
];
// ... Other data mocks would go here for a fully self-contained component

// ===[ REUSABLE HELPER COMPONENTS ]===
const Section = ({ children, className = "", id }) => (
  <section id={id} className={`w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 flex justify-center ${className}`}>
    <div className="w-full max-w-7xl">{children}</div>
  </section>
);

const AccordionItem = ({ q, a }) => {
    // Accordion implementation remains the same and is excellent.
    const [isOpen, setIsOpen] = useState(false);
    return (
      <motion.div variants={fadeInUp} className="border-b border-white/10">
        <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left py-5">
          <span className="text-lg font-medium text-white">{q}</span>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}><ChevronDown className="w-6 h-6 text-yellow-400" /></motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ height: 0, opacity: 0, marginTop: 0 }} animate={{ height: 'auto', opacity: 1, marginTop: '-0.5rem' }} exit={{ height: 0, opacity: 0, marginTop: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
              <p className="pb-5 text-gray-300 leading-relaxed">{a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
};

// ===[ NEW - TESTIMONIAL SLIDESHOW COMPONENT ]===
const TestimonialSlideshow = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setTimeout(nextTestimonial, 5000); // Auto-play every 5 seconds
    return () => clearTimeout(timer);
  }, [index]);

  return(
    <Section id="testimonials" className="bg-gray-900/20">
      <motion.div
        variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight">
           Imagine Your Customers <span className="text-yellow-400">Raving About You...</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="mt-4 text-lg text-gray-300">
           We don't just build projects; we build partnerships that lead to real, measurable success.
        </motion.p>
      </motion.div>
      <div className="relative mt-12 max-w-3xl mx-auto h-80 sm:h-72">
        <AnimatePresence custom={index}>
            <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
            >
                <Quote className="w-12 h-12 text-yellow-400/50 absolute top-4 left-4" />
                <p className="text-center text-lg sm:text-xl italic text-gray-200 leading-relaxed">"{testimonials[index].quote}"</p>
                <div className="mt-6 text-center">
                    <p className="font-bold text-white text-lg">{testimonials[index].name}</p>
                    <p className="text-gray-400">{testimonials[index].company}</p>
                </div>
            </motion.div>
        </AnimatePresence>
        <button onClick={prevTestimonial} className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-12 bg-white/10 p-2 rounded-full hover:bg-white/20 transition"><ChevronLeft/></button>
        <button onClick={nextTestimonial} className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-12 bg-white/10 p-2 rounded-full hover:bg-white/20 transition"><ChevronRight/></button>
      </div>
    </Section>
  );
};


// ===[ THE MAIN PAGE COMPONENT ]===
const HomePage = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700 overflow-x-hidden text-white">
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10">

        <HeroSection />

        <Section className="bg-gray-900/20">
           {/* Section 2: Problem & Promise - Enhanced with stronger copy and design */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-center max-w-4xl mx-auto">
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight">Is Your Website Just an Expense? <br /> <span className="text-yellow-400">Let's Turn It Into Your #1 Asset.</span></motion.h2>
                <motion.p variants={fadeInUp} className="mt-6 text-lg text-gray-300">Most agencies rent you a site, trapping you in endless monthly fees. We build you a permanent digital asset that works for you 24/7. <strong className="mt-2 block">You own it 100%. One time. For a lifetime of value.</strong></motion.p>
            </motion.div>
        </Section>

        <Section id="services">
            {/* Section 3: Core Services - Enhanced with interactive hover effects */}
             <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-center">
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight">A Complete Growth System</motion.h2>
                <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[ { icon: Layers, title: "Custom Web Design", description: "Websites you own 100%, built to convert visitors into customers." }, { icon: Target, title: "SEO & Visibility", description: "Climb the ranks on Google and get found by the right people." }, { icon: Bot, title: "AI & Automation", description: "Capture leads and save time with a 24/7 AI-powered assistant." } ].map((service, i) => (
                        <motion.div key={i} variants={fadeInUp} className="group relative flex flex-col items-center p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-yellow-400 hover:bg-white/10">
                            <div className="flex-shrink-0 bg-yellow-400 text-purple-900 p-4 rounded-full group-hover:scale-110 transition-transform duration-300"><service.icon className="h-8 w-8" /></div>
                            <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                            <p className="mt-2 text-center text-gray-300">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
             </motion.div>
        </Section>
        
        {/* NEW - Enhanced Testimonial Slideshow Section */}
        <TestimonialSlideshow />

        <Section id="portfolio" className="bg-gray-900/20">
    {/* NEW - Section 4: Featured Project Showcase */}
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="text-center">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight">We Build Results You Can See</motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">We transformed E&C Clinic's outdated website into a sleek, patient-focused lead-generation machine. Here's a glimpse of the process.</motion.p>
        </div>
        <motion.div variants={fadeInUp} className="mt-12 grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-3 aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-600/50">
                <ReactPlayer url="https://youtu.be/jKC4e1612eM" width="100%" height="100%" controls light={true} playing={true} volume={0.5} playIcon={<PlayCircle className="w-20 h-20 text-white/80 hover:text-white transition"/>} title="E&C Clinic Healthcare Website Redesign" />
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">E&C Clinic Healthcare Site</h3>
                <div className="space-y-4 border-l-4 border-yellow-400 pl-4">
                    <div><h4 className="font-semibold text-white">Challenge</h4><p className="text-gray-300">Establish digital credibility and streamline patient appointment booking.</p></div>
                    <div><h4 className="font-semibold text-white">Result</h4><p className="text-gray-300">43% drop in bounce rate and 71% increase in mobile engagement in 60 days.</p></div>
                </div>

                {/* --- CORRECTED AND ENHANCED CTA SECTION --- */}
                <motion.div 
                    variants={fadeInUp} 
                    className="mt-8 flex flex-wrap gap-3 items-center"
                >
                    {/* Primary button that correctly links to the portfolio page */}
                    <a 
                        href="/portfolio" 
                        className="inline-block bg-yellow-400 text-purple-900 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105 text-center"
                    >
                        See All Our Work
                    </a>
                    
                    {/* Secondary button for Pricing */}
                    <a 
                        href="/pricing" 
                        className="inline-block border border-white/30 text-white hover:bg-white/10 font-medium px-5 py-2.5 rounded-full text-center transition-transform transform hover:scale-105 text-sm"
                    >
                        View Pricing
                    </a>
                    
                    {/* Tertiary button for Services */}
                    <a 
                        href="#services" 
                        className="inline-block text-gray-300 hover:text-white font-medium hover:underline text-sm"
                    >
                        Explore Services
                    </a>
                </motion.div>
            </div>
        </motion.div>
    </motion.div>
</Section>
        
        {/* NEW - Section: Review Widget Integration */}
        {/* Here we directly render the component you provided */}
        <ReviewWidget />

        <Section id="final_cta" className="text-center">
             {/* Section 8: Final CTA - Redesigned for high impact */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-2xl p-8 sm:p-16 text-purple-900 shadow-2xl shadow-yellow-500/20">
                <h2 className="text-4xl md:text-5xl font-extrabold">Ready to Build a Website That <br/>Actually Grows Your Business?</h2>
                <p className="mt-4 text-lg text-purple-800/90 font-medium">Let's schedule a free, 15-minute strategy call. No pressure. No obligation. Just a clear, actionable plan for your success.</p>
                <div className="mt-8">
                    <a href="#contact" className="inline-block px-12 py-4 rounded-full text-center shadow-lg transition transform hover:scale-105 bg-purple-900 hover:bg-black text-white font-bold text-lg">Book Your Free Strategy Call</a>
                </div>
            </motion.div>
        </Section>

      </div>
    </div>
  );
};


// The original Hero component, now refactored as a dedicated section with enhancements
const HeroSection = () => {
    // Hero functionality remains the same - it's already excellent
    const [currentSlide, setCurrentSlide] = useState(0);
    const timeoutRef = useRef(null);
    useEffect(() => {
        const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        timeoutRef.current = setInterval(nextSlide, 4000);
        return () => clearInterval(timeoutRef.current);
    }, []);

    return (
        <div id="home" className="flex items-center justify-center min-h-[90vh] sm:min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <motion.div variants={staggerContainer} initial="hidden" animate="show" className="w-full max-w-7xl mx-auto flex flex-col items-center text-center">
                <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter [text-wrap:balance]">Turn Clicks Into Clients—<br/><span className="text-yellow-400">Smart Sites. Real Leads.</span></motion.h1>
                <motion.p variants={fadeInUp} className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 [text-wrap:balance]">We combine high-converting websites you own with powerful AI and marketing automation to generate leads for your business 24/7.</motion.p>
                <motion.div variants={fadeInUp} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <ExplorePricingCTA label="Start Your Project" className="px-8 py-3.5" />
                    <a href="#portfolio" className="inline-block border border-white/30 text-white hover:bg-white/10 font-medium px-8 py-3.5 rounded-full text-center transition-transform transform hover:scale-105">View Our Work</a>
                </motion.div>
                <motion.div variants={fadeInUp} className="relative w-full max-w-5xl mt-16">
                    <div className="relative aspect-[16/9] bg-slate-900/50 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden ring-2 ring-white/10">
                        <AnimatePresence>
                            <motion.img key={currentSlide} src={heroSlides[currentSlide].src} alt={heroSlides[currentSlide].caption} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: "easeInOut" }} className="absolute inset-0 object-cover w-full h-full" />
                        </AnimatePresence>
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4"><p className="text-center font-semibold text-sm sm:text-base text-gray-200">Example Site: <span className="text-yellow-300">{heroSlides[currentSlide].caption}</span></p></div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default HomePage;