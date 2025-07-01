import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import PricingQuoteModal from "../modals/PricingQuoteModal.jsx";
import { TypeAnimation } from 'react-type-animation';
const tabs = [
  { name: "Websites", key: "websites" },
  { name: "Blogs", key: "blogs" },
  { name: "Marketing Services", key: "marketing" },
  { name: "Terms Glossary", key: "glossary" },
];

// --- Interactive FAQ Accordion Component ---
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/20 last:border-none">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left py-4"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-base md:text-lg text-white">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-yellow-400 shrink-0" />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-4 pr-8 text-white/80 text-sm md:text-base">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("websites");
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activeTab]);

  // --- FAQ Data for each section ---
  const websiteFaqs = [
    { question: "Do I own my website?", answer: "Yes. You have 100% ownership of the final product. We provide you with all the files and assets." },
    { question: "Are prices monthly?", answer: "No. These are one-time project fees for the design and development of the website." },
    { question: "Can I upgrade my package later?", answer: "Absolutely. Our packages are designed to be scalable. You can add more pages or features as your business grows." },
    { question: "Is hosting included?", answer: "No, hosting is sold separately to give you flexibility, but we will help you set it up on a recommended provider for optimal performance." },
    { question: "What is the project timeline?", answer: "A basic site typically takes 7-14 business days, depending on the tier and how quickly we receive content and feedback from you." },
    { question: "Can you write the content for my site?", answer: "Yes, professional copywriting services are available as an add-on. We can craft compelling content that aligns with your brand voice and SEO strategy." },
  ];
  
  const blogFaqs = [
    { question: "How long does setup and publishing take?", answer: "Blog setup typically takes 3-5 business days. The initial set of posts are delivered within 1-2 weeks, depending on your chosen tier and research requirements." },
    { question: "Can I request specific topics?", answer: "Yes! We encourage collaboration. We'll align our keyword research and content creation with your business goals and preferred topics." },
    { question: "Are the posts optimized for SEO?", answer: "Absolutely. Every post includes thorough keyword research, proper structure, meta tag optimization, and is crafted for high readability to engage both users and search engines." },
    { question: "Do you offer ongoing content creation?", answer: "Yes. After your initial package, we offer flexible monthly retainers for ongoing content creation to keep your blog fresh and growing. Contact us for a custom quote." },
  ];

  const marketingFaqs = [
    { question: "Are these services required for my website?", answer: "No, but they are highly recommended to enhance performance, automate workflows, and accelerate your business growth." },
    { question: "Why are there setup and monthly fees?", answer: "The one-time setup fee covers initial configuration, strategy, and integration. The monthly fee covers software access, ongoing monitoring, support, and continuous optimization." },
    { question: "Can I cancel my monthly service anytime?", answer: "Yes. We believe in earning your business every month. You can cancel any monthly service with just 14 days' notice, no long-term contracts." },
    { question: "Do you offer discounts for bundling services?", answer: "Yes! We provide significant discounts when you bundle multiple services or combine them with a website package. Ask for a custom quote." },
  ];

  const glossaryTerms = {
    website: [
        { term: "Analytics Integration", definition: "Connecting your site to platforms like Google Analytics to track visitor behavior, traffic sources, and conversions." },
        { term: "Domain Connection", definition: "Linking your custom domain (e.g., yourbusiness.com) to your website hosting service." },
        { term: "Mobile-Responsive Design", definition: "A website design that adapts seamlessly to all devices, including desktops, smartphones, and tablets." },
        { term: "Lead Capture Form", definition: "An online form designed to collect visitor information (name, email, phone) to generate business leads." },
        { term: "Manual Indexing", definition: "Directly submitting your website URL to search engines like Google & Bing to speed up its appearance in search results." },
        { term: "On-page SEO", definition: "Optimizing website pages (keywords, meta tags, content, speed) to improve search rankings and organic traffic." },
    ],
    marketing: [
        { term: "Database Reactivation", definition: "Marketing campaigns aimed at re-engaging inactive or dormant leads in your contact list through email and SMS." },
        { term: "Email & SMS Automation", definition: "Systems that automatically send timely follow-ups, reminders, and promotions to nurture leads and customers." },
        { term: "Reputation Management", definition: "The practice of monitoring and influencing your brand's reputation and online reviews across various platforms." },
        { term: "Live Chat / AI Chatbots", definition: "Tools that engage website visitors in real-time, answer questions, and capture leads 24/7." },
        { term: "Social Media Scheduling", definition: "Using tools to plan and automate social media posts in advance, ensuring a consistent online presence." },
        { term: "A/B Testing", definition: "Comparing two versions of a webpage or email to see which one performs better in converting visitors." },
    ]
  };

  return (
    <>
      {/* 
        STEP 1: Create the main wrapper with a unified background.
        'relative isolate' creates the context for the absolute background div.
      */}
      <div className="relative isolate">
        {/* This div holds BOTH the gradient and the overlay and sits behind everything */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700" />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* --- REFINED HEADER SECTION --- */}
      {/* 1. Reduced vertical padding for a more compact look (py-8 sm:py-10) */}
      <div className="relative text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 z-10">
        
        {/* 2. Centered on ALL screen sizes by removing md:text-left */}
        <div className="max-w-7xl mx-auto text-center">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg"
          >
            Transparent Pricing for {' '}
            <TypeAnimation
              sequence={[
                'Real Results',
                3000, // Long pause after typing
                '',   // Deletes the text
                800,  // Pause before re-typing
              ]}
              wrapper="span"
              // 3. Slower and more natural typing speed
              speed={70} 
              repeat={Infinity}
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            // Centered on ALL screen sizes by removing md:mx-0
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Choose a plan designed for growth. No hidden fees, just powerful solutions.
          </motion.p>
        </div>
      </div>

        {/* Sticky Tab Navigation - Modified to blend with the background */}
        <div className="sticky top-[72px] z-40 w-full backdrop-blur-md border-b border-white/10">
          <nav className="flex justify-center p-2 space-x-1 sm:space-x-2 max-w-7xl mx-auto overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-3 py-2.5 text-sm sm:text-base rounded-full font-semibold transition-colors
                ${
                  activeTab === tab.key
                    ? "text-yellow-300"
                    : "text-white hover:text-yellow-400"
                }
                focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400`}
              >
                {tab.name}
                {activeTab === tab.key && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                    layoutId="underline"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content Area (NO background classes needed here anymore) */}
        <div className="relative text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-2xl border border-white/20 p-6 md:p-10 rounded-3xl shadow-2xl"
            >
              {activeTab === "websites" && (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Website Design Packages</h2>
                  <p className="text-lg text-yellow-400 text-center mb-10 max-w-4xl mx-auto">All packages give you full ownership of a modern, high-performing website built to convert visitors into customers.</p>
                  <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {[{ title: "LaunchPad", price: "$350", features: ["Up to 4 Pages", "Custom Design", "Mobile-Responsive", "Lead Capture Form", "On-page SEO Setup", "Domain Connection"], note: "Launch fast with a clean, professional site." }, { title: "Growth Engine", price: "$650", features: ["Everything in LaunchPad", "Up to 7 Pages", "Enhanced SEO Strategy", "Basic Analytics Setup", "Social Media Integration", "Priority Email Support"], note: "More space, better SEO, stronger conversions." }, { title: "ScaleMax", price: "$1200", features: ["Everything in Growth Engine", "Up to 12 Pages", "Advanced Analytics", "Performance Tuning", "Multi-step Forms", "Dedicated Project Slack Channel"], note: "A scalable presence that’s polished, optimized, and ready to grow." }].map((pkg, idx) => (
                      <div key={idx} className={`relative bg-purple-900/30 p-8 rounded-2xl border border-white/20 flex flex-col transition-all duration-300 ${idx === 1 ? 'scale-100 md:scale-105 shadow-2xl shadow-yellow-500/20' : 'hover:scale-100 md:hover:scale-105 hover:border-yellow-400/50'}`}>
                        {idx === 1 && (<div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"><div className="bg-yellow-400 text-purple-900 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">Most Popular</div></div>)}
                        <h3 className="text-2xl font-bold text-yellow-400 mb-2">{pkg.title}</h3>
                        <p className="text-4xl font-extrabold text-white mb-6">{pkg.price} <span className="text-base font-normal text-white/70">one-time</span></p>
                        <ul className="space-y-3 mb-8 flex-grow">
                          {pkg.features.map((feature, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" /> <span className="text-white/90">{feature}</span></li>))}
                        </ul>
                        <p className="text-white/70 text-sm italic mb-6">{pkg.note}</p>
                        <button onClick={() => { setSelectedPackage(pkg.title); setShowQuoteModal(true); }} className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 px-5 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-300/50">Get Started</button>
                      </div>
                    ))}
                  </div>
                  <div className="max-w-3xl mx-auto"><h3 className="text-2xl font-bold mb-6 text-white text-center">Frequently Asked Questions</h3>{websiteFaqs.map((faq, i) => <FaqItem key={i} {...faq} />)}</div>
                </div>
              )}

              {activeTab === "blogs" && (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Blog & Content Packages</h2>
                  <p className="text-lg text-yellow-400 text-center mb-10 max-w-4xl mx-auto">Build authority, generate organic traffic, and turn readers into customers with SEO-driven content.</p>
                  <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {[
                      { title: "Basic Tier", price: "$350", features: ["Full Blog Setup", "3 SEO-Optimized Posts", "Keyword-Targeted Content", "Improved Search Visibility", "Budget-Friendly"], note: "Perfect for startups taking their first steps into content marketing." },
                      { title: "Standard Tier", price: "$650", features: ["Everything in Basic", "6 SEO-Optimized Posts", "Deeper Keyword Research", "Internal Linking Strategy", "Stronger Content Foundation"], note: "Great for growing brands ready to level up their content strategy." },
                      { title: "Premium Tier", price: "$1200+", features: ["Everything in Standard", "10+ SEO-Optimized Posts", "Content Calendar Included", "Analytics & Reporting", "Thought Leadership Focus"], note: "Ideal for established businesses aiming for content-driven leadership." }
                    ].map((pkg, idx) => (
                      <div key={idx} className={`relative bg-purple-900/30 p-8 rounded-2xl border border-white/20 flex flex-col transition-all duration-300 ${idx === 1 ? 'scale-100 md:scale-105 shadow-2xl shadow-yellow-500/20' : 'hover:scale-100 md:hover:scale-105 hover:border-yellow-400/50'}`}>
                        {idx === 1 && (<div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"><div className="bg-yellow-400 text-purple-900 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">Most Popular</div></div>)}
                        <h3 className="text-2xl font-bold text-yellow-400 mb-2">{pkg.title}</h3>
                        <p className="text-4xl font-extrabold text-white mb-6">{pkg.price}</p>
                        <ul className="space-y-3 mb-8 flex-grow">
                          {pkg.features.map((feature, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" /> <span className="text-white/90">{feature}</span></li>))}
                        </ul>
                        <p className="text-white/70 text-sm italic mb-6">{pkg.note}</p>
                        <button onClick={() => { setSelectedPackage(pkg.title); setShowQuoteModal(true); }} className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 px-5 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-300/50">Get Started</button>
                      </div>
                    ))}
                  </div>
                   <div className="max-w-3xl mx-auto"><h3 className="text-2xl font-bold mb-6 text-white text-center">Blog Package FAQs</h3>{blogFaqs.map((faq, i) => <FaqItem key={i} {...faq} />)}</div>
                </div>
              )}

              {activeTab === "marketing" && (
                 <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Marketing & Automation Services</h2>
                  <p className="text-lg text-yellow-400 text-center mb-10 max-w-4xl mx-auto">Enhance your website with powerful tools that automate workflows, increase visibility, and drive growth.</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {[
                      { name: "Fast & Secure Web Hosting", price: "$120/year", features: ["99.9% Uptime Guarantee", "Free SSL Certificate", "Full Setup & Management"] },
                      { name: "Online Reputation Management", price: "$300/mo", features: ["Review Monitoring", "Automated Review Requests", "Negative Feedback Strategy"] },
                      { name: "Database Reactivation", price: "$450 one-time", features: ["Re-engage Dormant Leads", "Custom Email/SMS Sequences", "No Ad Spend Required"] },
                      { name: "Email & SMS Automation", price: "$250 setup + $100/mo", features: ["Automated Lead Follow-up", "Custom Drip Campaigns", "Ongoing Optimization"] },
                      { name: "Live Chat & AI Chatbots", price: "$350 setup + $30/mo", features: ["24/7 Website Engagement", "Smart Response Logic", "Automatic Lead Capture"] },
                      { name: "Social Media Schedulers", price: "$200 setup + $50/mo", features: ["Schedule Posts in Advance", "Cross-Platform Integration", "Performance Analytics"] },
                    ].map((service, idx) => (
                      <div key={idx} className="bg-purple-900/30 p-8 rounded-2xl border border-white/20 flex flex-col transition-all duration-300 hover:scale-105 hover:border-yellow-400/50">
                        <h3 className="text-2xl font-bold text-yellow-400 mb-2">{service.name}</h3>
                        <p className="text-3xl font-extrabold text-white mb-6">{service.price}</p>
                        <ul className="space-y-3 mb-8 flex-grow">
                          {service.features.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" /> <span className="text-white/90">{item}</span></li>))}
                        </ul>
                        <button onClick={() => { setSelectedPackage(service.name); setShowQuoteModal(true); }} className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 px-5 rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-300/50">Get This Service</button>
                      </div>
                    ))}
                  </div>
                  <div className="max-w-3xl mx-auto"><h3 className="text-2xl font-bold mb-6 text-white text-center">Add-on Services FAQs</h3>{marketingFaqs.map((faq, i) => <FaqItem key={i} {...faq} />)}</div>
                </div>
              )}

              {activeTab === "glossary" && (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Glossary of Terms</h2>
                  <div className="space-y-12">
                      <section><h3 className="text-2xl font-semibold text-yellow-400 mb-6 border-b-2 border-yellow-400/30 pb-3">Website & Design Terms</h3><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{glossaryTerms.website.map((item, i) => (<div key={i} className="bg-purple-900/30 p-5 rounded-xl border border-white/10"><h4 className="font-bold text-white text-lg mb-1">{item.term}</h4><p className="text-white/80 text-sm">{item.definition}</p></div>))}</div></section>
                      <section><h3 className="text-2xl font-semibold text-yellow-400 mb-6 border-b-2 border-yellow-400/30 pb-3">Marketing & Growth Terms</h3><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{glossaryTerms.marketing.map((item, i) => (<div key={i} className="bg-purple-900/30 p-5 rounded-xl border border-white/10"><h4 className="font-bold text-white text-lg mb-1">{item.term}</h4><p className="text-white/80 text-sm">{item.definition}</p></div>))}</div></section>
                  </div>
                </div>
              )}

            </motion.div>
          </div>
        </div>
      </div>
      <PricingQuoteModal
        isOpen={showQuoteModal}
        onClose={() => setShowQuoteModal(false)}
        preselectedPackage={selectedPackage}
        activeTab={activeTab}
      />
    </>
  );
}