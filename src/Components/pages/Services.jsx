// src/components/Services.jsx
import React, { useState, useEffect, useRef } from "react"; // FIX: Added useRef
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import useEmblaCarousel from 'embla-carousel-react';
import { TypeAnimation } from "react-type-animation";
import {
  X, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, Globe, Server, Star, Database, Mail, MessageSquare, Clock, PenSquare // FIX: Added ChevronLeft/Right
} from "lucide-react";
import ExplorePricingCTA from "../marketing/ExplorePricingCTA.jsx";
import PricingQuoteModal from "../modals/PricingQuoteModal.jsx";

// --- HELPER COMPONENTS (Unchanged) ---
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-purple-200 last:border-none">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full text-left py-4" aria-expanded={isOpen}>
        <span className="font-semibold text-base text-gray-800">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-purple-600 shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
            <div className="prose prose-sm max-w-none text-gray-600 pb-4 pr-6">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- RESTORED & ENHANCED SERVICE DATA (Unchanged) ---
const servicesData = [
  // ... all your servicesData objects are here, unchanged
  {
    id: "web-design",
    icon: Globe,
    iconColor: "text-blue-400",
    title: "Web Design & Development",
    desc: "Modern, responsive websites that convert visitors and grow your brand.",
    details: {
      overview: "Your website is the cornerstone of your digital presence. We blend strategy, creativity, and technology to deliver sites that don’t just look great—they perform, convert, and scale with your business.",
      delivery: "We follow a proven process: Comprehensive Discovery & Strategy to understand your brand, persona development, and SEO planning. Our Design Excellence phase focuses on custom visuals, conversion-driven layouts, and accessibility. Finally, our Modern Development phase uses the latest tech stacks (like React and headless CMS) for lightning-fast, secure, and mobile-first websites.",
      results: [ "60% increase in demo requests for a B2B SaaS client.", "3x increase in inbound calls for a local service business.", "42% boost in conversion rates for an eCommerce brand."],
      faqs: [
        { question: "How quickly can you launch my site?", answer: "We move fast—our streamlined process and agile team deliver results with impressive speed, typically within a few weeks, without sacrificing quality." },
        { question: "Can you migrate my existing content?", answer: "Yes, we handle full content migrations, including blogs, images, and SEO metadata, with zero downtime." },
        { question: "Will my site be easy to update?", answer: "Yes, we provide custom training and intuitive CMS setups so your team can manage content effortlessly." },
      ]
    }
  },
  {
    id: "web-hosting",
    icon: Server,
    iconColor: "text-purple-400",
    title: "Fast & Secure Web Hosting",
    desc: "Blazing-fast managed hosting with 99.9% uptime and top-tier security.",
    details: {
      overview: "Your website’s speed, security, and reliability are critical. Our managed hosting solutions are engineered for peak performance, robust protection, and effortless scalability—so you can focus on your business, not your servers.",
      delivery: "We provide an enterprise-grade infrastructure using global data centers and SSD storage. Our Advanced Security Suite includes a Web Application Firewall (WAF), daily malware scanning, and DDoS protection. Performance is guaranteed through a global CDN, advanced caching, and real-time monitoring, all managed through an intuitive dashboard with 24/7 expert support.",
      results: [ "80% reduction in load times after migration.", "100% uptime maintained during a major fundraising event.", "90% decrease in spam and phishing attempts for a client." ],
      faqs: [
        { question: "Can you migrate my existing site for free?", answer: "Yes, our team provides a white-glove migration service for most platforms, ensuring a seamless transition with zero downtime." },
        { question: "What if my site gets hacked?", answer: "We provide instant cleanup, restoration from backups, and a full security audit at no extra cost to get you back online safely." },
      ]
    }
  },
  {
    id: "reputation-management",
    icon: Star,
    iconColor: "text-yellow-400",
    title: "Online Reputation Management",
    desc: "Take control of your brand image and turn reviews into lasting trust.",
    details: {
      overview: "In today’s digital world, a single review can influence hundreds of potential customers. Our reputation management service is a proactive approach to building, protecting, and amplifying your brand’s credibility.",
      delivery: "We implement comprehensive review generation funnels with automated requests via email and SMS. Our team actively monitors for new reviews, providing rapid responses using brand-aligned templates. We also manage your directory listings for local SEO consistency and provide advanced analytics to track sentiment and ROI.",
      results: [ "Increased average rating from 3.2 to 4.8 stars for a medical practice.", "Reduced negative reviews by 70% for a home services company.", "Boosted local search rankings, leading to a 40% rise in reservations." ],
      faqs: [
        { question: "How quickly will I see an improvement?", answer: "Our automated systems start generating new positive reviews almost immediately, with tangible improvements in your online rating within the first month." },
        { question: "Does this service help my local SEO?", answer: "Absolutely. A higher volume of positive reviews and consistent directory listings are major factors in boosting your local search rankings on Google." },
      ]
    }
  },
  {
    id: "database-reactivation",
    icon: Database,
    iconColor: "text-green-400",
    title: "Database Reactivation",
    desc: "Wake up dormant leads using automated campaigns that re-engage and convert.",
    details: {
      overview: "Your existing database is a goldmine of untapped revenue. Our campaigns are designed to re-engage dormant leads using personalized, multi-channel outreach without extra ad spend.",
      delivery: "Our process begins with strategic data cleansing and behavioral segmentation. We then launch multi-channel automated outreach via email, SMS, and even ringless voicemail. These campaigns are integrated with your CRM for lead scoring and provide detailed ROI dashboards to track every conversion.",
      results: [ "Reactivated 18% of a fitness studio's lapsed members, generating $42k in one month.", "Converted 12% of dormant B2B leads into booked sales calls.", "Recovered 9% of abandoned carts and increased repeat purchases by 22%." ],
      faqs: [
        { question: "Will this annoy my contacts?", answer: "No. We use smart frequency capping and value-driven messaging to maximize engagement and minimize unsubscribes." },
        { question: "Is this compliant with privacy laws?", answer: "100%. We follow all best practices for consent, opt-outs, and data protection under CAN-SPAM, GDPR, and other regulations." },
      ]
    }
  },
  {
    id: "email-sms-automation",
    icon: Mail,
    iconColor: "text-sky-400",
    title: "Email & SMS Automation",
    desc: "Automate your marketing with targeted messages that nurture and convert.",
    details: {
      overview: "Marketing automation is the secret to scaling your outreach. Our solutions combine advanced segmentation, behavioral triggers, and personalized content to deliver the right message at the right time.",
      delivery: "We build multi-channel automation flows, including lead nurture drip campaigns and event-based triggers (like abandoned carts). We utilize A/B testing and smart send times for conversion optimization and provide detailed reporting on every campaign's performance, ensuring high deliverability.",
      results: [ "Automated cart recovery emails increased sales by 28%.", "Nurture sequences doubled lead-to-client conversion rates.", "Appointment reminders via SMS reduced no-shows by 45%." ],
      faqs: [
        { question: "Will this work with my CRM or eCommerce platform?", answer: "Yes, we specialize in seamless integrations with all major tools, including Shopify, HubSpot, Salesforce, and more." },
        { question: "What if I don’t have a contact list?", answer: "We can help you build and segment your audience from scratch, using high-converting lead magnets and landing pages." },
      ]
    }
  },
  {
    id: "ai-chatbots",
    icon: MessageSquare,
    iconColor: "text-teal-400",
    title: "Live Chat & AI Chatbots",
    desc: "Engage visitors instantly and qualify leads with human-like chatbots.",
    details: {
      overview: "Instant communication is the new standard. Our live chat and AI chatbot solutions help you engage visitors, answer questions, and qualify leads 24/7, boosting conversions and delighting your audience.",
      delivery: "Our AI chatbots use natural language processing for lead qualification and appointment booking. For human support, our live chat platform offers team collaboration and visitor insights. Both options are fully branded and integrated with your CRM, featuring proactive chat triggers to maximize engagement.",
      results: [ "AI chatbot increased lead capture by 3x and reduced support tickets by 40%.", "Live chat doubled demo bookings for a B2B SaaS company.", "Automated appointment scheduling via chat reduced admin workload by 60%." ],
      faqs: [
        { question: "Can I switch between an AI bot and a human agent?", answer: "Yes, our system allows for seamless handoff, ensuring visitors always get the right level of support." },
      ]
    }
  },
  {
    id: "social-schedulers",
    icon: Clock,
    iconColor: "text-orange-400",
    title: "Social Media Scheduling",
    desc: "Stay consistent online with automated post scheduling and analytics.",
    details: {
      overview: "Consistency is key to social media success. Our tools empower you to plan, publish, and analyze your content across every major platform, saving you time and boosting engagement.",
      delivery: "We provide an all-in-one scheduling dashboard for cross-platform posting, bulk uploads, and a visual content calendar. AI-powered tools help generate captions and find trending hashtags. You get detailed analytics, including the best times to post and competitor benchmarking.",
      results: [ "Doubled posting frequency and increased client engagement by 60%.", "Increased website traffic from social media by 40%.", "Streamlined team collaboration and boosted event attendance." ],
      faqs: [
        { question: "Does this support Instagram Reels and Stories?", answer: "Yes, you can plan and schedule all formats, including permanent posts, Reels, and Stories, in advance." },
      ]
    }
  },
  {
    id: "blog-development",
    icon: PenSquare,
    iconColor: "text-pink-400",
    title: "Blog Development & Strategy",
    desc: "Build authority and drive organic traffic with an SEO-optimized blog.",
    details: {
      overview: "A high-quality blog is a powerful asset for attracting your ideal audience. We develop and implement content strategies that establish you as an industry leader and generate a consistent flow of inbound leads.",
      delivery: "Our service includes a full blog setup on your website, tailored to your brand. We conduct in-depth keyword research and create a content calendar. Each post is professionally written and optimized for SEO, readability, and engagement, complete with compelling calls-to-action.",
      results: [ "Increased organic website traffic by 150% in 6 months for a tech startup.", "Blog content became the #1 source of new leads for a consulting firm.", "Ranked on the first page of Google for 10+ high-value keywords." ],
      faqs: [
        { question: "Do you write the articles, or do I?", answer: "We have a team of expert writers who will craft original, plagiarism-free content tailored to your brand voice and industry." },
        { question: "How is blog success measured?", answer: "We track key metrics like organic traffic growth, keyword rankings, time on page, and, most importantly, the number of leads and conversions generated from your blog content." },
      ]
    }
  },
];

// --- FIX: Correctly handling image paths for Vite/CRA bundler ---
// The component is in src/components/Pages, images are in src/assets.
// The relative path is `../../assets/services_slides/`.
// We use `new URL(path, import.meta.url).href` to make sure the bundler finds and includes the images correctly.
const slideData = [
  { imgSrc: new URL('../../assets/services_slides/web-design-result.png', import.meta.url).href, title: "Web Design", result: "60% Increase in Demo Requests" },
  { imgSrc: new URL('../../assets/services_slides/web-hosting-result.png', import.meta.url).href, title: "Secure Hosting", result: "80% Faster Load Times" },
  { imgSrc: new URL('../../assets/services_slides/reputation-management-result.png', import.meta.url).href, title: "Reputation Management", result: "From 3.2 to 4.8 Stars" },
  { imgSrc: new URL('../../assets/services_slides/database-reactivation-result.png', import.meta.url).href, title: "Database Reactivation", result: "Generated $42k in 1 Month" },
  { imgSrc: new URL('../../assets/services_slides/email-sms-automation-result.png', import.meta.url).href, title: "Automation", result: "28% Increase in Sales" },
  { imgSrc: new URL('../../assets/services_slides/ai-chatbots-result.png', import.meta.url).href, title: "AI Chatbots", result: "3x More Leads Captured" },
  { imgSrc: new URL('../../assets/services_slides/social-schedulers-result.png', import.meta.url).href, title: "Social Scheduling", result: "60% Higher Engagement" },
  { imgSrc: new URL('../../assets/services_slides/blog-development-result.png', import.meta.url).href, title: "Blog Strategy", result: "150% More Organic Traffic" },
];

const achievementStats = [
    { value: '3X', label: 'Higher Engagement' },
    { value: '+50%', label: 'Conversion Lift' },
    { value: '2X', label: 'Faster Go-to-Market' },
    { value: '99.9%', label: 'Service Reliability' },
];


const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  
  // NEW: Ref to hold the timer interval ID
  const timerRef = useRef(null);

  // NEW: Functions for manual slide navigation
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slideData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slideData.length) % slideData.length);
  };
  
  // FIX: Updated useEffect to handle resetting the timer on manual navigation
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timerRef.current); // Cleanup on component unmount
  }, [activeIndex]); // Re-run effect when activeIndex changes to reset the timer



  return (
     <div className="relative isolate text-white py-8 sm:py-8 overflow-x-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-900" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <section className="bg-transparent">
  {/* -- COMPACT HERO TEXT ABOVE SLIDESHOW -- */}
  <div className="text-center max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6 mb-2 sm:mb-3">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
className="text-2xl sm:text-3xl md:text-4xl font-black text-white drop-shadow"
    >
      Solutions That{" "}
      <TypeAnimation
        sequence={[
          'Drive Growth', 2000,
          'Convert Leads', 2000,
          'Elevate Brands', 2000,
          'Drive Growth', 2000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-yellow-400"
      />
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className="text-xs text-gray-300 max-w-md mx-auto my-2"
    >
      From stunning websites to intelligent automation, our services are engineered to turn your vision into measurable results.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="flex flex-col sm:flex-row items-center justify-center gap-2"
    >
      <button
        // onClick={() => setShowQuoteModal(true)}
        className="w-full sm:w-auto bg-yellow-400 text-purple-900 font-bold py-1.5 px-3 text-xs sm:text-sm rounded-full shadow hover:bg-yellow-500 transition-all"
      >
        Get Started
      </button>
      <button
        // onClick={() => navigate('/pricing')}
        className="w-full sm:w-auto bg-white/10 text-white font-medium text-xs sm:text-sm py-1.5 px-3 rounded-full border border-white/20 hover:bg-white/20 transition-all backdrop-blur"
      >
        View Services
      </button>
    </motion.div>
  </div>

  {/* -- SLIDESHOW BELOW -- */}
  <div className="relative w-full mx-auto max-w-4xl aspect-[16/9] overflow-hidden rounded-lg shadow-xl">
    <AnimatePresence initial={false}>
      <motion.div
        key={activeIndex}
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <img
          src={slideData[activeIndex].imgSrc}
          alt={slideData[activeIndex].title}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </AnimatePresence>

    {/* Caption */}
    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-30">
      <AnimatePresence>
        <motion.p
          key={activeIndex}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-black/40 text-white text-[10px] sm:text-xs font-semibold py-0.5 px-2 rounded-full backdrop-blur-sm"
        >
          {slideData[activeIndex].title}
        </motion.p>
      </AnimatePresence>
    </div>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

    {/* Navigation Buttons (INSIDE SLIDE FRAME) */}
    <div className="absolute inset-0 z-20 flex items-center justify-between px-2">
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="bg-black/30 text-white p-1 rounded-full hover:bg-black/50 transition focus:outline-none"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="bg-black/30 text-white p-1 rounded-full hover:bg-black/50 transition focus:outline-none"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </div>

  {/* -- ACHIEVEMENT STATS -- */}
  <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-6 sm:-mt-8">
    <div className="bg-gray-800/60 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl p-3 sm:p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 text-center">
        {achievementStats.map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-xl sm:text-2xl font-bold text-yellow-400">{stat.value}</p>
            <p className="mt-0.5 text-[11px] sm:text-xs text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
      {/* --- END OF HERO SECTION FIX --- */}

      <section id="our-services" className="py-16 sm:py-24 px-4">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Our Core Services</h2>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {servicesData.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.1, ease: "easeOut" }}
              className="group relative bg-white/10 rounded-2xl p-6 shadow-lg border border-white/10 backdrop-blur-xl flex flex-col min-h-[220px] transition-all duration-300 hover:border-yellow-400/80 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedService(service)} tabIndex={0} role="button" aria-label={`Learn more about ${service.title}`}>
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              <div className="relative z-10 flex flex-col h-full">
                <div className={`bg-white/5 border border-white/10 p-3 rounded-lg self-start mb-4 ${service.iconColor}`}>
                  <service.icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-white/80 text-sm mb-4 flex-grow">{service.desc}</p>
                <div className="text-yellow-400 font-semibold flex items-center text-sm mt-auto group-hover:text-yellow-300 transition-colors">
                  Learn More <ChevronDown className="w-4 h-4 ml-1 transform -rotate-90" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to Build Something Great?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">Let's turn your ideas into reality. Explore our packages or book a free strategy call to get started today.</p>
            <ExplorePricingCTA label="Discover Our Pricing" />
        </div>
      </section>

      <AnimatePresence>
        {selectedService && (
            <Dialog open={!!selectedService} onClose={() => setSelectedService(null)} className="relative z-50">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel as={motion.div} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-gray-50 text-gray-800 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col">
                        <header className="flex-shrink-0 p-6 border-b border-gray-200 flex justify-between items-start">
                            <div>
                                <Dialog.Title className="text-2xl font-bold text-purple-800">{selectedService.title}</Dialog.Title>
                                <p className="text-gray-600 mt-1">{selectedService.details.overview}</p>
                            </div>
                            <button onClick={() => setSelectedService(null)} className="text-gray-400 hover:text-gray-800 ml-4"><X className="w-6 h-6"/></button>
                        </header>
                        <main className="flex-1 overflow-y-auto p-6 space-y-8">
                            <section>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">How We Deliver Results</h3>
                                <div className="prose prose-sm max-w-none text-gray-700 bg-purple-50 p-4 rounded-lg border border-purple-100">
                                  <p>{selectedService.details.delivery}</p>
                                </div>
                            </section>
                            <section>
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Proven Impact</h3>
                                <div className="space-y-3">
                                  {selectedService.details.results.map((result, i) => (
                                      <div key={i} className="flex items-start gap-3 text-sm">
                                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5"/>
                                          <p className="text-gray-700">{result}</p>
                                      </div>
                                  ))}
                                </div>
                            </section>
                            <section>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Frequently Asked Questions</h3>
                                {selectedService.details.faqs.map((faq, i) => <FaqItem key={i} {...faq} />)}
                            </section>
                        </main>
                        <footer className="flex-shrink-0 p-6 border-t border-gray-200 bg-gray-50/50 rounded-b-2xl flex flex-col sm:flex-row justify-end items-center gap-4">
                            <button onClick={() => { setSelectedService(null); setShowQuoteModal(true); }} className="w-full sm:w-auto bg-yellow-400 text-purple-900 font-bold py-2.5 px-5 rounded-full shadow-md hover:bg-yellow-500 transition-all">
                              Request a Quote
                            </button>
                        </footer>
                    </Dialog.Panel>
                </div>
            </Dialog>
        )}
      </AnimatePresence>
      
      <PricingQuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
    </div>
  );
};

export default Services;