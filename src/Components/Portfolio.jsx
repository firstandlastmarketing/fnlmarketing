import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import ExplorePricingCTA from './ExplorePricingCTA';

import ecClinicDesktop from "../assets/ec-clinic-desktop-website.png";
import fnlHero from "../assets/fnlmarketing-hero-section.png";
import carolinsKitchenScreenshot from "../assets/carolins-kitchen-screenshot.png"; // <- make sure it's added

const portfolioProjects = [
  {
    src: ecClinicDesktop,
    alt: "Springfield Missouri healthcare website design - E&C Clinic desktop layout",
    title: "E&C Clinic - Desktop View",
    description:
      "A clean, trust-building layout tailored for patient-focused navigation and lead generation.",
    industry: "Healthcare / Medical",
    caseStudy: {
      challenge:
        "E&C Clinic needs a modern, HIPAA-compliant site to establish digital credibility and allow easy appointment bookings.",
      solution:
        "We build a fully responsive, SEO-optimized website using React + Tailwind. The layout is tailored for accessibility and quick patient actions.",
      result:
        "Bounce rate drops by 43% and mobile engagement increases by 71% within 60 days post-launch.",
    },
  },
  {
    src: carolinsKitchenScreenshot,
    alt: "Dominican catering website design for Carolin’s Kitchen in Springfield Missouri",
    title: "Carolin’s Kitchen - Website",
    description:
      "Authentic Dominican food site with modern layout, vivid visuals, and SEO-optimized UX.",
    industry: "Food & Beverage / Catering",
    caseStudy: {
      challenge:
        "Carolin’s Kitchen needs a vibrant online presence that captures cultural authenticity and helps drive catering inquiries.",
      solution:
        "We design a stunning, responsive website using React + Tailwind, featuring bold food imagery, an inviting color palette, and SEO-optimized sections with strong CTAs.",
      result:
        "The site consistently receives praise for its professional layout, increases user time-on-site, and actively converts visitors into catering leads.",
    },
  },
  {
    src: fnlHero,
    alt: "First and Last Marketing website hero section with strategic branding and conversion UX",
    title: "First & Last Marketing - Hero Section",
    description:
      "Our own site showcases modern design, fast-loading UI, and lead-gen best practices.",
    industry: "Marketing / Web Design",
    caseStudy: {
      challenge:
        "Our brand needs a site that reflects authority, speed, and conversion mastery.",
      solution:
        "We develop a fast, fully SEO-ready homepage featuring interactive CTAs, trust-building stats, and scroll-based engagement.",
      result:
        "Average visit duration is over 3 minutes, and our hero converts visitors into leads at 11.4%.",
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
    setSelected(null);
  };

  return (
    <section
      id="portfolio"
      className="relative py-20 px-6 lg:px-10 text-white pt-4 pb-30"
    >
      {/* Background gradient and overlay, both behind content */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700" />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">
            Web Design Portfolio
          </h1>
          <p className="text-gray-100 text-lg max-w-2xl mx-auto">
            Discover professional Springfield Missouri web design projects —
            built for speed, SEO, and small business success.
          </p>
        </header>

        {/* Featured Video Project */}
        <article
          className="mb-20"
          data-aos="fade-up"
          aria-labelledby="latest-project"
        >
          <h2
            id="latest-project"
            className="text-3xl font-semibold text-yellow-300 mb-6 text-center"
          >
            Latest Highlight: E&C Clinic
          </h2>
          <figure className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-purple-700">
            <ReactPlayer
              url="https://youtu.be/jKC4e1612eM"
              width="100%"
              height="100%"
              controls
              title="E&C Clinic Healthcare Website Redesign by First and Last Marketing"
            />
          </figure>
          <figcaption className="bg-purple-950/80 mt-8 p-6 lg:p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">
              Modern Healthcare Website for E&C Clinic
            </h3>
            <p className="text-gray-300 mb-1">
              Our team transforms a dated medical site into a sleek,
              HIPAA-compliant lead-generation machine.
            </p>
            <p className="text-sm italic text-gray-400">
              Industry: Healthcare / Medical
            </p>
          </figcaption>
        </article>

        {/* Portfolio Image Grid */}
        <section
          aria-labelledby="more-work"
          className="mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2
            id="more-work"
            className="text-3xl font-semibold text-white mb-10 text-center"
          >
            More From Our Work
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((item, index) => (
              <figure
                key={index}
                className="group relative bg-purple-800/90 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                onClick={() => openModal(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-56 object-cover transition-opacity duration-300"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-yellow-400 font-bold text-sm transition">
                  Click to View Details
                </figcaption>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-yellow-300 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
              </figure>
            ))}
          </div>
        </section>

        {/* Modal with Case Study */}
        <Dialog
          open={isOpen}
          onClose={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <Dialog.Panel
            className="relative max-w-4xl w-full max-h-[90vh] overflow-auto rounded-lg bg-white p-6 shadow-xl text-gray-800"
            aria-modal="true"
            role="dialog"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-yellow-400 text-purple-900 hover:bg-yellow-300 rounded-full p-2 transition"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
            {selected && (
              <>
                <img
                  src={selected.src}
                  alt={selected.alt}
                  className="w-full h-auto rounded-md mb-4"
                />
                <header className="mb-4">
                  <h3 className="text-2xl font-bold text-purple-800 mb-1">
                    {selected.title}
                  </h3>
                  <p className="text-sm italic text-gray-500 mb-2">
                    Industry: {selected.industry}
                  </p>
                  <p className="text-gray-600">{selected.description}</p>
                </header>
                <section className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Challenge
                    </h4>
                    <p className="text-gray-600">
                      {selected.caseStudy.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Solution
                    </h4>
                    <p className="text-gray-600">
                      {selected.caseStudy.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Results
                    </h4>
                    <p className="text-gray-600">{selected.caseStudy.result}</p>
                  </div>
                </section>
              </>
            )}
          </Dialog.Panel>
        </Dialog>

        <footer className="mt-16 text-center">
          <ExplorePricingCTA
            label="Want Results Like These? Explore Our Pricing"
            className="inline-block text-purple-900 font-bold bg-yellow-400 hover:bg-yellow-300 px-8 py-4 rounded-full transition focus:outline-none focus:ring-4 focus:ring-yellow-500 shadow-lg"
          />
        </footer>
      </div>
    </section>
  );
};

export default Portfolio;
