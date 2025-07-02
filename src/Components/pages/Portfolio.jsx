import React, { useState } from "react";
import ReactPlayer from "react-player/youtube"; // Optimized import for YouTube
import { Dialog } from "@headlessui/react";
import { X, Star } from "lucide-react";
import ExplorePricingCTA from '../marketing/ExplorePricingCTA.jsx';

// Import your assets
import ecClinicDesktop from "../../assets/ec-clinic-desktop-website.png";
import fnlHero from "../../assets/fnlmarketing-hero-section.png";
import carolinsKitchenScreenshot from "../../assets/carolins-kitchen-screenshot.png";

// --- Data remains the same, no changes needed here ---
const portfolioProjects = [
  {
    src: ecClinicDesktop,
    alt: "Springfield Missouri healthcare website design - E&C Clinic desktop layout",
    title: "E&C Clinic - Website Redesign",
    description: "A clean, trust-building layout tailored for patient-focused navigation and lead generation.",
    industry: "Healthcare / Medical",
    caseStudy: {
      challenge: "E&C Clinic needed a modern, HIPAA-compliant site to establish digital credibility and allow easy appointment bookings.",
      solution: "We built a fully responsive, SEO-optimized website using React + Tailwind. The layout is tailored for accessibility and quick patient actions.",
      result: "Bounce rate dropped by 43% and mobile engagement increased by 71% within 60 days post-launch.",
    },
  },
  {
    src: carolinsKitchenScreenshot,
    alt: "Dominican catering website design for Carolin’s Kitchen in Springfield Missouri",
    title: "Carolin’s Kitchen - Website",
    description: "Authentic Dominican food site with modern layout, vivid visuals, and SEO-optimized UX.",
    industry: "Food & Beverage / Catering",
    caseStudy: {
      challenge: "Carolin’s Kitchen needed a vibrant online presence that captures cultural authenticity and helps drive catering inquiries.",
      solution: "We designed a stunning, responsive website using React + Tailwind, featuring bold food imagery, an inviting color palette, and SEO-optimized sections with strong CTAs.",
      result: "The site consistently receives praise for its professional layout, increases user time-on-site, and actively converts visitors into catering leads.",
    },
  },
  {
    src: fnlHero,
    alt: "First and Last Marketing website hero section with strategic branding and conversion UX",
    title: "First & Last Marketing - Hero Section",
    description: "Our own site showcases modern design, fast-loading UI, and lead-gen best practices.",
    industry: "Marketing / Web Design",
    caseStudy: {
      challenge: "Our brand needed a site that reflects authority, speed, and conversion mastery.",
      solution: "We developed a fast, fully SEO-ready homepage featuring interactive CTAs, trust-building stats, and scroll-based engagement.",
      result: "Average visit duration is over 3 minutes, and our hero converts visitors into leads at 11.4%.",
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
    // Add a small delay to allow the closing animation to finish before clearing data
    setTimeout(() => setSelected(null), 300);
  };

  return (
    <section
      id="portfolio"
      className="relative py-16 sm:py-20 text-white isolate" // <-- isolate creates new stacking context
    >
      {/* BACKGROUND FIX: This will now render correctly behind the content */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12 md:mb-20" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">
            Our Work
          </h1>
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
            We build high-performance websites for small businesses, focusing on speed, SEO, and converting visitors into customers.
          </p>
        </header>

        {/* --- NEW: ENHANCED FEATURED PROJECT LAYOUT --- */}
        <article className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 md:mb-28" data-aos="fade-up">
          {/* Video Player */}
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border-2 border-purple-600/50">
            <ReactPlayer
              url="https://youtu.be/jKC4e1612eM"
              width="100%"
              height="100%"
              controls
              light={true} // Shows a preview image for faster load times
              playing={true}
              volume={0.5}
              title="E&C Clinic Healthcare Website Redesign by First and Last Marketing"
            />
          </div>
          {/* Case Study Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-sm font-bold uppercase tracking-wider text-yellow-400 mb-2">Featured Project</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">E&C Clinic Healthcare Site</h3>
            <p className="text-gray-300 mb-6 lg:text-lg">
              We transformed a dated medical site into a sleek, HIPAA-compliant lead-generation machine that builds patient trust from the first click.
            </p>
            <div className="space-y-4 border-l-4 border-purple-500 pl-4">
              <div>
                <h4 className="font-semibold text-white">Challenge</h4>
                <p className="text-gray-400 text-sm">Establish digital credibility and streamline appointment booking.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white">Result</h4>
                <p className="text-gray-400 text-sm">43% drop in bounce rate and 71% increase in mobile engagement within 60 days.</p>
              </div>
            </div>
          </div>
        </article>


        {/* --- NEW: ENHANCED PROJECT GRID --- */}
        <section
          aria-labelledby="more-work"
          className="mb-20 md:mb-28"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 id="more-work" className="text-3xl font-bold text-white mb-10 text-center">
            More From Our Portfolio
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((item, index) => (
              <figure
                key={index}
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
                    Click to see the case study
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* --- NEW: CLIENT TESTIMONIALS SECTION (ACTION REQUIRED) --- */}
        <section aria-labelledby="testimonials-heading" className="mb-20 md:mb-28" data-aos="fade-up">
            <h2 id="testimonials-heading" className="text-3xl font-bold text-center text-white mb-10">Imagine Your Customers <span className="text-yellow-400">Raving About You...</span></h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                {/* WHAT TO DO: Replace this placeholder with a real client testimonial */}
                <figure className="bg-purple-950/60 rounded-lg p-6 flex flex-col">
                    <div className="flex text-yellow-400 mb-4">
                        <Star /><Star /><Star /><Star /><Star />
                    </div>
                    <blockquote className="text-gray-200 italic flex-grow">
                        "First and Last Marketing delivered a website that not only looks incredible but also performs. Our online inquiries have doubled since the launch. Their process was seamless and professional."
                    </blockquote>
                    <figcaption className="mt-4 pt-4 border-t border-purple-400/20">
                        <p className="font-semibold text-white">Jane Doe</p>
                        <p className="text-sm text-gray-400">Owner, Carolin's Kitchen</p>
                    </figcaption>
                </figure>
                {/* WHAT TO DO: You can add a second testimonial here by duplicating the <figure> block above */}
                 <figure className="bg-purple-950/60 rounded-lg p-6 flex flex-col">
                    <div className="flex text-yellow-400 mb-4">
                        <Star /><Star /><Star /><Star /><Star />
                    </div>
                    <blockquote className="text-gray-200 italic flex-grow">
                        "The team is incredibly knowledgeable about SEO and local search. They got us on the map, literally. We've seen a noticeable increase in foot traffic from customers who found us online."
                    </blockquote>
                    <figcaption className="mt-4 pt-4 border-t border-purple-400/20">
                        <p className="font-semibold text-white">Dr. John Smith</p>
                        <p className="text-sm text-gray-400">E&C Clinic</p>
                    </figcaption>
                </figure>
            </div>
        </section>


        {/* Modal (Dialog) - Styling improved, logic is the same */}
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
                    <p className="text-sm font-bold uppercase tracking-wider text-yellow-400 mb-1">{selected.industry}</p>
                    <Dialog.Title as="h3" className="text-3xl font-bold text-white mb-2">{selected.title}</Dialog.Title>
                    <p className="text-gray-300">{selected.description}</p>
                  </header>
                  <section className="space-y-6 bg-black/20 p-6 rounded-lg">
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300">Challenge</h4>
                      <p className="text-gray-300">{selected.caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300">Solution</h4>
                      <p className="text-gray-300">{selected.caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300">Results</h4>
                      <p className="text-gray-300">{selected.caseStudy.result}</p>
                    </div>
                  </section>
                </>
              )}
            </Dialog.Panel>
          </div>
        </Dialog>

        {/* Footer CTA */}
        <footer className="mt-16 text-center">
          <ExplorePricingCTA
            label="Ready for Results Like These?"
            className="text-lg" // Let the component handle its own styling, just pass a size modifier if needed
          />
        </footer>
      </div>
    </section>
  );
};

export default Portfolio;