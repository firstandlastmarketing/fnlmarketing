import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import ContractorPricingModal from './ContractorPricingModal'; // Assuming this component exists

// ICONS
// CORRECT
import { ArrowRightIcon, CheckCircleIcon, XCircleIcon, ChevronLeftIcon, ChevronRightIcon, StarIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { WrenchScrewdriverIcon, UsersIcon, ChatBubbleLeftRightIcon, ChartBarIcon, ServerStackIcon, SparklesIcon, ShieldCheckIcon, PhoneIcon, BuildingStorefrontIcon, UserGroupIcon } from '@heroicons/react/24/outline';

// LOGO - Ensure you have a version of your logo that works on dark backgrounds (e.g., white or monochrome)
import logo from '../assets/logo.png'; 

// ===[ SLIDESHOW IMAGES (ALL 8) ]==============================================
import hvacImage from '../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-hvac-company-website-screenshot.png';
import plumbingImage from '../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-plumbing-service-website-screenshot.png';
import electricalImage from '../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-electrical-website-screenshot.png';
import roofingImage from '../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-roofing-company-website-screenshot.png';
import pestControlImage from '../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-pest-control-website-screenshot.png';
import landscapingImage from '../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-landscaping-website-screenshot.png';
import cleaningImage from '../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-cleaning-service-website-screenshot.png';
import remodelingImage from '../assets/landing_page_slides/first-last-marketing-web-design-springfield-mo-home-remodeling-website-screenshot.png';

//===[ DATA STRUCTURES ]=========================================================
const slides = [
  { src: hvacImage, caption: "For HVAC Specialists", alt: "Desktop screenshot of a modern HVAC company website in Springfield MO, showcasing live chat, online scheduling, and positive customer reviews; designed to convert leads for heating and cooling businesses by First & Last Marketing." },
  { src: plumbingImage, caption: "For Plumbers", alt: "Screenshot of a high-converting plumbing service website in Springfield MO, featuring emergency contact info, customer testimonials, and an email signup for lead generation by First & Last Marketing." },
  { src: electricalImage, caption: "For Electricians", alt: "Modern electrical services website screenshot for Springfield MO, highlighting smart home automation, EV charger installation, and online reputation management; built by First & Last Marketing." },
  { src: remodelingImage, caption: "For Home Remodelers", alt: "Aspirational home remodeling website screenshot for Springfield MO, showcasing a 'Before & After' gallery and clear design consultation prompts; built to inspire and convert new projects by First & Last Marketing." },
  { src: roofingImage, caption: "For Roofers", alt: "Professional roofing company website screenshot for Springfield MO, displaying a project gallery, warranty information, and a clear call-to-action for free estimates; designed for high-conversion by First & Last Marketing." },
  { src: pestControlImage, caption: "For Pest Control Experts", alt: "Clean pest control website screenshot for Springfield MO, with a live chat widget, service plan options, and customer testimonials; optimized for lead capture by First & Last Marketing." },
  { src: landscapingImage, caption: "For Landscapers", alt: "Stunning landscaping and lawn care website screenshot for Springfield MO, featuring a prominent project gallery and intuitive online booking; created to attract and convert clients by First & Last Marketing." },
  { src: cleaningImage, caption: "For Cleaning Services", alt: "Bright cleaning services website screenshot for Springfield MO, showing an easy online booking system, transparent pricing, and positive customer reviews; developed for recurring revenue by First & Last Marketing." },
];
const coreServices = [
    { icon: <WrenchScrewdriverIcon />, title: 'Pro Web Design & Dev', description: 'Blazing-fast, mobile-perfect websites designed to convert visitors into paying customers. Your 24/7 digital salesperson.' },
    { icon: <ShieldCheckIcon />, title: '5-Star Reputation Mgmt', description: 'Our system automatically gets reviews from happy customers, building a powerful 5-star reputation that makes you the obvious choice.' },
    { icon: <ChatBubbleLeftRightIcon />, title: '24/7 Lead Capture', description: 'Never miss a lead. Our smart chat and forms capture inquiries around the clock, so you can respond when you’re ready.' },
    { icon: <ChartBarIcon />, title: 'Local SEO Dominance', description: 'We get you to the top of Google for searches like "plumber in Springfield," putting you in front of customers who need you now.' },
    { icon: <SparklesIcon />, title: 'Marketing Automation', description: 'Automated email & SMS follow-ups that nurture new leads, check in with past clients, and win back old business—hands-free.' },
    { icon: <UsersIcon />, title: 'All-In-One CRM', description: 'Manage all your leads, conversations, and marketing campaigns from a single, easy-to-use dashboard. Total control, zero chaos.' },
];
const exampleTestimonials = [
  { quote: "Our online presence was non-existent. First & Last Marketing built a site that not only looks incredible but actually brings in qualified leads from Google. Our schedule has never been this full.", name: 'A Springfield Plumber', company: 'Result: Increased Bookings by 300%', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { quote: "The automated review system is a game-changer. We went from a handful of reviews to over 60 five-star ratings. Now, new customers call us with confidence, and it's all hands-free.", name: 'An Ozark HVAC Specialist', company: 'Result: 5-Star Reputation Built in 90 Days', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { quote: "I used to miss calls and leads while on a job. The 24/7 lead capture system has paid for itself ten times over. I can finally focus on the work, knowing my marketing is handled.", name: 'A 417-Area Electrician', company: 'Result: 15+ Leads Captured After-Hours Monthly', avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
];
const oldWayPainPoints = ["Missed calls go to competitors", "No idea if marketing works", "Website is slow and outdated", "Struggling to get reviews", "Juggling 5 different tools"];
const newWaySolutions = ["24/7 lead capture system", "Clear ROI & analytics", "Blazing-fast, modern site", "Automated 5-star reviews", "One simple, all-in-one platform"];
const faqs = [
    { q: "How much does this cost?", a: "We offer simple, flat-rate monthly packages with no surprise fees. Our goal is to provide massive value that pays for itself many times over. Check out our Pricing page for full details!" },
    { q: "Is this a long-term contract?", a: "No. We believe our results should speak for themselves. All our plans are month-to-month. You can cancel anytime, though we're confident you won't want to." },
    { q: "How long does it take to get started?", a: "We can typically have your new high-performance website and marketing system launched within 14-21 days after our initial strategy call." },
    { q: "Do I need to be tech-savvy?", a: "Not at all! Our platform is designed to be incredibly user-friendly. We handle all the technical setup, and we're always here to help. Your job is to answer the new leads we send you." }
];

//===[ ANIMATION VARIANTS ]======================================================
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

//===[ REUSABLE SUB-COMPONENTS ]==================================================

const CTAButton = ({ children, className = '', variant = 'primary', to, onClick }) => {
    const baseClasses = `inline-block text-center font-bold rounded-xl shadow-lg px-8 py-3 text-base transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4`;
    const styles = {
        primary: 'bg-yellow-400 hover:bg-yellow-500 text-black focus:ring-yellow-300',
        secondary: 'bg-black text-yellow-400 hover:bg-gray-800 hover:text-white py-4 px-8 font-bold focus:ring-yellow-500/50',
        tertiary: 'bg-transparent text-gray-300 border border-gray-700 hover:bg-gray-800 hover:border-gray-600 focus:ring-gray-600'
    };
    const finalClasses = `${baseClasses} ${styles[variant]} ${className}`;
    if (to) { return <motion.div whileTap={{ scale: 0.98 }}><Link to={to} className={finalClasses}>{children}</Link></motion.div>; }
    return <motion.button onClick={onClick} whileTap={{ scale: 0.98 }} className={finalClasses}>{children}</motion.button>;
};

const SectionHeading = ({ children, subtitle }) => (
    <motion.div className="text-center mb-12 md:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn}>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">{children}</h2>
        {subtitle && <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">{subtitle}</p>}
    </motion.div>
);

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => { const timer = setInterval(() => { setCurrentSlide(prev => (prev + 1) % slides.length); }, 4000); return () => clearInterval(timer); }, []);

    return (
        <div className="relative aspect-[16/9] bg-gray-900 rounded-xl shadow-2xl shadow-black/50 overflow-hidden ring-1 ring-gray-800">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentSlide}
                    src={slides[currentSlide].src}
                    alt={slides[currentSlide].alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.8 } }}
                    exit={{ opacity: 0, transition: { duration: 0.4 } }}
                    className="absolute inset-0 object-cover w-full h-full"
                />
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 right-0 bg-gray-900/60 backdrop-blur-sm text-white p-3 text-center">
                <p className="font-semibold text-sm">
                    Example Site: <span className="text-yellow-400">{slides[currentSlide].caption}</span>
                </p>
            </div>
        </div>
    );
};

const FAQItem = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(index === 0); // Open the first FAQ by default
    return (
        <motion.div variants={fadeIn} className="border-b border-gray-800">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left py-5">
                <span className="text-lg font-semibold text-white">{item.q}</span>
                <ChevronDownIcon className={`h-6 w-6 text-yellow-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                        <p className="pb-5 text-gray-300 leading-relaxed">{item.a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

//===[ PAGE SECTIONS ]===========================================================

const HeroSection = ({ onCtaClick }) => (
    <section
        id="hero"
        className="w-full bg-gray-950 text-white pt-6 pb-2 md:pt-8 md:pb-3" // reduced top/bottom padding
    >
        <div className="container mx-auto px-6">
            <motion.div
                className="text-center max-w-3xl mx-auto" // slightly narrower max width
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.h1
                    variants={fadeIn}
                    className="text-2xl md:text-4xl font-extrabold tracking-tight mb-1" // smaller font, less margin
                >
                    Your Website Should <span className="text-yellow-400">Actually Work For You.</span>
                </motion.h1>
                <motion.p
                    variants={fadeIn}
                    className="text-base md:text-lg text-gray-300 max-w-xl mx-auto mt-1 mb-2" // less margin
                >
                    Imagine your website and marketing working together to bring you leads—while you focus on the job.
                </motion.p>
                <motion.div
                    variants={fadeIn}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3"
                >
                    <CTAButton onClick={onCtaClick} variant="primary">
                        Get My Free Proposal <ArrowRightIcon className="inline-block h-5 w-5 ml-2" />
                    </CTAButton>
                    <CTAButton to="/pricing" variant="tertiary">
                        See Plans & Pricing
                    </CTAButton>
                </motion.div>
            </motion.div>
            <motion.div
                className="w-full max-w-6xl mx-auto mt-4" // less margin above slideshow
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
                <Slideshow />
            </motion.div>
        </div>
    </section>
);

const TrustBadgesSection = () => (
    <div className="bg-gray-900 py-12 text-gray-300">
        <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <motion.div variants={fadeIn} className="flex items-center justify-center gap-3 text-lg"><StarIcon className="h-6 w-6 text-yellow-400" /> <span>5-Star Rated</span></motion.div>
                <motion.div variants={fadeIn} className="flex items-center justify-center gap-3 text-lg"><ShieldCheckIcon className="h-6 w-6 text-yellow-400" /> <span>Results Guaranteed</span></motion.div>
                <motion.div variants={fadeIn} className="flex items-center justify-center gap-3 text-lg"><BuildingStorefrontIcon className="h-6 w-6 text-yellow-400" /> <span>Local 417 Experts</span></motion.div>
                <motion.div variants={fadeIn} className="flex items-center justify-center gap-3 text-lg"><UserGroupIcon className="h-6 w-6 text-yellow-400" /> <span>Happy Contractors</span></motion.div>
            </motion.div>
        </div>
    </div>
);

const CoreServicesGrid = () => (
    <section id="solutions" className="bg-gray-950 py-16 md:py-24">
        <div className="container mx-auto px-6">
            <SectionHeading subtitle="One system, one monthly price, zero headaches. We handle everything you need to dominate your local market.">Your Digital Command Center</SectionHeading>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {coreServices.map((service, i) => (
                    <motion.div key={i} variants={fadeIn} className="bg-gray-900 rounded-xl p-8 text-left transition-all duration-300 shadow-lg hover:shadow-yellow-500/10 border border-gray-800 hover:border-yellow-600 hover:-translate-y-2">
                        <div className="mb-5"><div className="inline-block p-4 bg-yellow-400/10 text-yellow-400 rounded-lg">{React.cloneElement(service.icon, { className: 'h-8 w-8' })}</div></div>
                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{service.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
);

const ValuePropositionSection = () => (
    <section id="transform" className="bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-6">
            <SectionHeading subtitle="Stop juggling confusing tools and losing leads. Start getting results with one unified platform built for contractors.">Stop the Struggle. Start Winning.</SectionHeading>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto bg-gray-950/50 p-4 rounded-2xl border border-gray-800">
                <div className="bg-gray-900 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-red-400 mb-6">The Old Way</h3>
                    <ul className="space-y-4 text-gray-300">
                        {oldWayPainPoints.map(point => (<li key={point} className="flex items-start gap-3"><XCircleIcon className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5" /><span>{point}</span></li>))}
                    </ul>
                </div>
                <div className="bg-gradient-to-br from-yellow-500/10 to-transparent rounded-xl p-8 border border-yellow-400/30">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-6">The F&L Way</h3>
                    <ul className="space-y-4 text-gray-200">
                        {newWaySolutions.map(point => (<li key={point} className="flex items-start gap-3"><CheckCircleIcon className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" /><span>{point}</span></li>))}
                    </ul>
                </div>
            </motion.div>
        </div>
    </section>
);

const TestimonialCarousel = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => setCurrentIndex((p) => (p + 1) % testimonials.length);
    const handlePrev = () => setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);
    useEffect(() => { const timer = setInterval(handleNext, 7000); return () => clearInterval(timer); }, []);

    return (
        <section id="testimonials" className="bg-gray-950 py-16 md:py-24">
            <div className="container mx-auto px-6">
                <SectionHeading subtitle="Here’s the kind of feedback great service + great marketing can earn.">
                    Imagine Your Clients Raving About You Like This.
                </SectionHeading>
                <div className="relative w-full max-w-3xl mx-auto">
                    <div className="overflow-hidden relative h-80 md:h-72">
                        <AnimatePresence mode="wait">
                            <motion.div key={currentIndex} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.4 }} className="absolute w-full h-full flex flex-col justify-center items-center text-center p-8 bg-gray-900 rounded-2xl border border-gray-800 shadow-xl">
                                <span className="text-8xl text-yellow-400/10 absolute top-0 left-4 font-serif">“</span>
                                <p className="text-xl italic text-gray-300 leading-relaxed mb-6 z-10">"{testimonials[currentIndex].quote}"</p>
                                <div className="flex items-center z-10">
                                    <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-14 h-14 rounded-full mr-4 border-2 border-yellow-400" />
                                    <div>
                                        <p className="font-bold text-white text-lg">{testimonials[currentIndex].name}</p>
                                        <p className="text-yellow-400 font-semibold text-base">{testimonials[currentIndex].company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <button onClick={handlePrev} className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors shadow-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"><ChevronLeftIcon className="h-6 w-6 text-gray-300" /></button>
                    <button onClick={handleNext} className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors shadow-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"><ChevronRightIcon className="h-6 w-6 text-gray-300" /></button>
                </div>
            </div>
        </section>
    );
};

const FAQSection = () => (
    <section id="faq" className="bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-6">
            <SectionHeading subtitle="We know you have questions. Here are the most common ones we get from contractors.">Your Questions, Answered</SectionHeading>
            <div className="max-w-3xl mx-auto">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                    {faqs.map((item, index) => (<FAQItem key={index} item={item} index={index} />))}
                </motion.div>
            </div>
        </div>
    </section>
);

const FinalCTA = ({ onCtaClick }) => (
    <section id="final-cta" className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black py-16 md:py-20">
        <div className="container mx-auto px-6 text-center max-w-3xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={staggerContainer}>
                <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Ready to Dominate Your Local Market?</motion.h2>
                <motion.p variants={fadeIn} className="text-lg text-gray-900/80 max-w-2xl mx-auto mb-10">Schedule your quick, no-pressure strategy call. We'll show you exactly how our system works. No sales pitch, just a clear plan to get more customers.</motion.p>
                <motion.div variants={fadeIn}>
                    <CTAButton onClick={onCtaClick} variant="secondary">Claim My Free Strategy Call <ArrowRightIcon className="inline-block h-5 w-5 ml-2" /></CTAButton>
                </motion.div>
            </motion.div>
        </div>
    </section>
);


//===[ MAIN LANDING PAGE COMPONENT ]=============================================
const ContractorLandingPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-gray-950 text-gray-300 font-sans antialiased">
            <ContractorPricingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <motion.header initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-lg border-b border-gray-800">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-3">
                        <img src={logo} alt="First and Last Marketing Logo" className="h-10 w-auto" />
                        <span className="text-xl font-bold text-white hidden sm:block">First <span className="text-gray-400">&</span> Last Marketing</span>
                    </Link>
                    <CTAButton onClick={() => setIsModalOpen(true)} variant="primary" className="px-5 py-2 text-sm">Free Strategy Call</CTAButton>
                </div>
            </motion.header>

            <main>
                <HeroSection onCtaClick={() => setIsModalOpen(true)} />
                <TrustBadgesSection />
                <CoreServicesGrid />
                <ValuePropositionSection />
                <TestimonialCarousel testimonials={exampleTestimonials} />
                <FAQSection />
                <FinalCTA onCtaClick={() => setIsModalOpen(true)} />
            </main>

            <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
                <div className="container mx-auto px-6 py-12 text-center text-sm">
                    <img src={logo} alt="First and Last Marketing" className="h-12 w-auto mx-auto mb-4" />
                    <p className="font-semibold text-white text-base">First & Last Marketing</p>
                    <p className="mb-6">Turning Clicks Into Clients in Springfield, Missouri</p>
                    <div className="flex justify-center space-x-6 mb-8">
                        <a href="#solutions" className="hover:text-yellow-400 transition-colors">Services</a>
                        <a href="#testimonials" className="hover:text-yellow-400 transition-colors">Results</a>
                        <a href="#faq" className="hover:text-yellow-400 transition-colors">FAQ</a>
                        <Link to="/pricing" className="hover:text-yellow-400 transition-colors">Pricing</Link>
                    </div>
                    <p className="text-xs text-gray-500">© {new Date().getFullYear()} First and Last Marketing. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default ContractorLandingPage;