import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Dialog } from "@headlessui/react";
import { X, CheckCircle } from "lucide-react"; // Replaced Star with a more genuine icon
import ExplorePricingCTA from '../marketing/ExplorePricingCTA.jsx';

// Import your assets
import ecClinicDesktop from "../../assets/ec-clinic-desktop-website.png";
import fnlHero from "../../assets/fnlmarketing-hero-section.png";
import carolinsKitchenScreenshot from "../../assets/carolins-kitchen-screenshot.png";

// --- NEW, HONEST & ENHANCED DATA STRUCTURE ---
// This data is reframed to showcase capabilities, not fabricated client results.
const projectShowcaseData = [
  {
    id: "fnl-marketing",
    src: fnlHero,
    alt: "First and Last Marketing website hero section with strategic branding and conversion UX",
    title: "First & Last Marketing - Our Flagship Site",
    category: "Our Live Production Site",
    showcaseDetails: {
      objective: "To build a cutting-edge website that serves as a living demonstration of our capabilities in modern design, high-speed performance, and intelligent lead generation.",
      features: [
        "Custom-coded from scratch for peak performance and security.",
        "Advanced animations and micro-interactions using Framer Motion.",
        "Integrated with a live AI Assistant (like this one) to showcase our automation skills.",
        "Conversion-focused UI/UX with high Google PageSpeed scores."
      ],
      techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Node.js"],
    },
  },
  {
    id: "ec-clinic",
    src: ecClinicDesktop,
    alt: "Springfield Missouri healthcare website design - E&C Clinic desktop layout",
    title: "E&C Clinic - Healthcare Web App Concept",
    category: "Design & Capability Showcase",
    showcaseDetails: {
      objective: "To demonstrate our ability to create clean, professional, and trustworthy websites for service-based industries where user confidence is paramount.",
      features: [
        "Designed with HIPAA-compliant principles in mind.",
        "User-centric navigation focused on clear calls-to-action (e.g., booking appointments).",
        "WCAG accessibility principles applied for a user-friendly experience for all.",
        "A clean, mobile-first layout that builds patient trust from the first click."
      ],
      techStack: ["React", "Vite", "CSS Modules"],
    },
  },
  {
    id: "carolins-kitchen",
    src: carolinsKitchenScreenshot,
    alt: "Dominican catering website design for Carolin’s Kitchen in Springfield Missouri",
    title: "Carolin’s Kitchen - Visual Brand Showcase",
    category: "Design & Capability Showcase",
    showcaseDetails: {
      objective: "This project was built to showcase our expertise in creating visually rich, vibrant websites for brands where aesthetics and product presentation are key.",
      features: [
        "Visually-driven storytelling that makes the product the hero.",
        "Optimized image loading for a fast yet beautiful experience.",
        "A simple and effective lead capture form for catering inquiries.",
        "A warm, inviting color palette and layout to reflect the brand's personality."
      ],
      techStack: ["JavaScript (ES6+)", "HTML5", "CSS Grid & Flexbox"],
    },
  },
];

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (item) => {
    setSelected(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setSelected(null), 300);
  };

  // --- Our Genuine Value Propositions (Replaces Fake Testimonials) ---
  const valuePropositions = [
    {
      id: "vp-01",
      statement: "We Build Assets, Not Expenses.",
      elaboration: "A website from us is a permanent, high-performance asset that you own completely. It's an investment in your growth, not a recurring rental fee on a generic template."
    },
    {
      id: "vp-02",
      statement: "Clarity from Code to Conversation.",
      elaboration: "We believe in transparency. Our code is clean and scalable, our pricing is upfront, and our communication is direct. You will always know what you're getting and why."
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative py-16 sm:py-20 text-white isolate"
    >
      {/* BACKGROUND AND OVERLAY (Unchanged, as requested) */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER - Reframed for authenticity */}
        <header className="text-center mb-12 md:mb-20" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">
            Our Craft & Capabilities
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            We don't use templates. We build high-performance, custom-coded websites that are fast, secure, and engineered to convert.
          </p>
        </header>

        {/* FEATURED SHOWCASE - Now honest and capability-focused */}
        <article className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 md:mb-28" data-aos="fade-up">
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border-2 border-purple-600/50">
            <ReactPlayer
              url="https://youtu.be/jKC4e1612eM"
              width="100%"
              height="100%"
              controls
              light={true}
              playing={true}
              volume={0.5}
              title="E&C Clinic Healthcare Website Redesign by First and Last Marketing"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-sm font-bold uppercase tracking-wider text-yellow-400 mb-2">Featured Showcase</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">Healthcare Web App Concept</h3>
            <p className="text-gray-300 mb-6 lg:text-lg">
              This project demonstrates our ability to create a sleek, professional, and user-friendly interface for the healthcare industry, prioritizing trust and ease-of-use.
            </p>
            <div className="space-y-4 border-l-4 border-purple-500 pl-4">
              <div>
                <h4 className="font-semibold text-white">Objective</h4>
                <p className="text-gray-400 text-sm">To showcase a modern, accessible design that establishes digital credibility and streamlines patient interactions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Demonstrated Skills</h4>
                <p className="text-gray-400 text-sm">User-centric navigation, responsive design, conversion-focused layout, and an emphasis on accessibility.</p>
              </div>
            </div>
          </div>
        </article>

        {/* PROJECT SHOWCASE GRID */}
        <section
          aria-labelledby="more-work"
          className="mb-20 md:mb-28"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 id="more-work" className="text-3xl font-bold text-white mb-10 text-center">
            More From Our Showcase
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projectShowcaseData.map((item) => (
              <figure
                key={item.id}
                className="group relative rounded-xl overflow-hidden shadow-lg h-80 cursor-pointer"
                onClick={() => openModal(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <figcaption className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold text-yellow-300 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                    Click to view details
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* --- NEW: OUR COMMITMENT SECTION (Replaces fake testimonials with genuine promises) --- */}
        <section aria-labelledby="commitment-heading" className="mb-20 md:mb-28" data-aos="fade-up">
            <h2 id="commitment-heading" className="text-3xl font-bold text-center text-white mb-10">Our Commitment to <span className="text-yellow-400">Your Success</span></h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                {valuePropositions.map((vp) => (
                    <figure key={vp.id} className="bg-purple-950/60 rounded-lg p-6 flex flex-col border border-purple-400/20">
                        <div className="text-green-400 mb-4">
                            <CheckCircle className="w-8 h-8" />
                        </div>
                        <blockquote className="text-gray-200 text-lg font-semibold flex-grow">
                            "{vp.statement}"
                        </blockquote>
                        <figcaption className="mt-4 pt-4 border-t border-purple-400/20">
                            <p className="text-gray-300">{vp.elaboration}</p>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>

        {/* MODAL (DIALOG) - Now displays honest showcase data */}
        <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <Dialog.Panel className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg bg-gray-900 text-white border border-purple-500/50 p-6 md:p-8 shadow-2xl">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                aria-label="Close project modal"
              >
                <X className="w-6 h-6" />
              </button>
              {selected && (
                <>
                  <img src={selected.src} alt={selected.alt} className="w-full h-auto rounded-md mb-6 shadow-lg"/>
                  <header className="mb-6">
                    <p className="text-sm font-bold uppercase tracking-wider text-yellow-400 mb-1">{selected.category}</p>
                    <Dialog.Title as="h3" className="text-3xl font-bold text-white mb-2">{selected.title}</Dialog.Title>
                  </header>
                  <section className="space-y-6 bg-black/20 p-6 rounded-lg">
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300">Objective</h4>
                      <p className="text-gray-300">{selected.showcaseDetails.objective}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300">Key Features Demonstrated</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {selected.showcaseDetails.features.map((feature, i) => <li key={i}>{feature}</li>)}
                      </ul>
                    </div>
                     <div>
                      <h4 className="text-lg font-semibold text-purple-300">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selected.showcaseDetails.techStack.map((tech, i) => (
                           <span key={i} className="bg-gray-700 text-gray-200 text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </section>
                </>
              )}
            </Dialog.Panel>
          </div>
        </Dialog>

        {/* FOOTER CTA (Unchanged) */}
        <footer className="mt-16 text-center">
          <ExplorePricingCTA
            label="Ready to See This Quality in Your Project?"
            className="text-lg"
          />
        </footer>
      </div>
    </section>
  );
};

export default Portfolio;