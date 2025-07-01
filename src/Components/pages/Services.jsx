// src/components/Services.jsx

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import useEmblaCarousel from 'embla-carousel-react';
import {
  X, CheckCircle, ChevronDown, Zap, Target, LineChart, Globe, Server, Star, Database, Mail, MessageSquare, Clock, PenSquare
} from "lucide-react";
import ExplorePricingCTA from "../marketing/ExplorePricingCTA.jsx";
import PricingQuoteModal from "../modals/PricingQuoteModal.jsx";

// --- HELPER COMPONENTS ---
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

// --- RESTORED & ENHANCED SERVICE DATA ---
const servicesData = [
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

const slideData = [
  { imgSrc: "/src/assets/services_slides/web-design-result.png", title: "Web Design", result: "60% Increase in Demo Requests" },
  { imgSrc: "/src/assets/services_slides/web-hosting-result.png", title: "Secure Hosting", result: "80% Faster Load Times" },
  { imgSrc: "/src/assets/services_slides/reputation-management-result.png", title: "Reputation Management", result: "From 3.2 to 4.8 Stars" },
  { imgSrc: "/src/assets/services_slides/database-reactivation-result.png", title: "Database Reactivation", result: "Generated $42k in 1 Month" },
  { imgSrc: "/src/assets/services_slides/email-sms-automation-result.png", title: "Automation", result: "28% Increase in Sales" },
  { imgSrc: "/src/assets/services_slides/ai-chatbots-result.png", title: "AI Chatbots", result: "3x More Leads Captured" },
  { imgSrc: "/src/assets/services_slides/social-schedulers-result.png", title: "Social Scheduling", result: "60% Higher Engagement" },
  { imgSrc: "/src/assets/services_slides/blog-development-result.png", title: "Blog Strategy", result: "150% More Organic Traffic" },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [emblaRef] = useEmblaCarousel({ loop: true });
  const navigate = useNavigate();

  return (
    <div className="relative isolate text-white py-12 sm:py-16 overflow-x-hidden">
      {/* FIX: Self-contained background to ensure correct rendering */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <section className="px-4 mb-16 sm:mb-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Solutions That Drive Growth
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            From stunning websites to intelligent automation, our services are engineered to turn your vision into measurable results.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => setShowQuoteModal(true)} className="w-full sm:w-auto bg-yellow-400 text-purple-900 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-500 transition-all focus:outline-none focus:ring-4 focus:ring-yellow-300/50">
              Get Started
            </button>
            <button onClick={() => navigate('/pricing')} className="w-full sm:w-auto bg-white/10 text-white font-semibold py-3 px-6 rounded-full border border-white/20 hover:bg-white/20 transition-all">
              View Pricing
            </button>
            <button onClick={() => navigate('/portfolio')} className="w-full sm:w-auto text-gray-200 font-semibold hover:text-white transition-all">
              Explore Portfolio
            </button>
          </motion.div>
        </div>
      </section>

      <section className="mb-16 sm:mb-24">
          <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                  {slideData.map((slide, index) => (
                      <div className="flex-grow-0 flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2" key={index}>
                          <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-white/5 border border-white/10 p-4 flex flex-col justify-end">
                              <img src={slide.imgSrc} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                              <div className="relative z-10 text-white">
                                <p className="text-sm font-semibold text-yellow-400">{slide.title}</p>
                                <p className="text-lg font-bold">{slide.result}</p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

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