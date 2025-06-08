import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

import ecClinicDesktop from "../assets/ec-clinic-desktop-website.png";
import ecClinicMobile from "../assets/ec-clinic-mobile-website.png";
import fnlHero from "../assets/fnlmarketing-hero-section.png";

const portfolioImages = [
  {
    src: ecClinicDesktop,
    alt: "E&C Clinic website design - desktop version by First and Last Marketing, a Springfield Missouri web design agency",
    title: "E&C Clinic - Desktop View",
    description:
      "A clean, modern desktop layout designed for seamless navigation and patient trust.",
  },
  {
    src: ecClinicMobile,
    alt: "Mobile responsive healthcare website design for E&C Clinic by First and Last Marketing",
    title: "E&C Clinic - Mobile View",
    description:
      "Fully responsive mobile layout ensuring accessibility and optimal user experience.",
  },
  {
    src: fnlHero,
    alt: "Hero section of First and Last Marketing website showcasing strategic branding and layout",
    title: "First & Last Marketing - Hero Section",
    description:
      "Bold branding and UI/UX elements aligned with modern web design standards.",
  },
];

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImg(imgSrc);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImg(null);
  };

  return (
    <section
      id="portfolio"
      className="bg-gradient-to-r from-purple-950 via-blue-900 to-yellow-800 text-white py-20 px-6 lg:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">
            Web Design Portfolio
          </h1>
          <p className="text-gray-100 text-lg max-w-2xl mx-auto">
            Discover our latest Springfield Missouri web design projects, crafted for small businesses and SEO success.
          </p>
        </header>

        <section
          className="mb-20"
          data-aos="fade-up"
          data-aos-delay="100"
          aria-labelledby="latest-project"
        >
          <h2
            id="latest-project"
            className="text-3xl font-semibold text-yellow-300 mb-6 text-center"
          >
            Our Latest Project
          </h2>
          <figure className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-purple-700">
            <ReactPlayer
              url="https://youtu.be/jKC4e1612eM"
              width="100%"
              height="100%"
              controls
              title="E&C Clinic Web Design Video Showcase"
            />
          </figure>
          <figcaption className="bg-purple-950/80 mt-8 p-6 lg:p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-400 mb-3">
              E&C Clinic Website Redesign
            </h3>
            <p className="text-gray-300 mb-2">
              We helped a local Missouri healthcare provider modernize its digital presence with a sleek, SEO-friendly, mobile-optimized website.
            </p>
            <p className="text-sm text-gray-400 italic">
              Industry: Healthcare / Medical
            </p>
          </figcaption>
        </section>

        <section
          className="mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
          aria-labelledby="more-work"
        >
          <h2
            id="more-work"
            className="text-3xl font-semibold text-white mb-8 text-center"
          >
            More From Our Work
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioImages.map((item, index) => (
              <figure
                key={index}
                className="group relative bg-purple-800/80 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                onClick={() => openModal(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-56 object-cover transition-opacity duration-300"
                />
                <figcaption className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-yellow-400 font-bold text-sm">
                  Click to Enlarge
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

        <Dialog
          open={isOpen}
          onClose={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition duration-300"
        >
          <Dialog.Panel className="relative max-w-4xl w-full max-h-[90vh] overflow-auto rounded-lg bg-white p-6">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-yellow-400 text-purple-900 hover:bg-yellow-300 rounded-full p-2 transition"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedImg && (
              <img
                src={selectedImg}
                alt={
                  portfolioImages.find((img) => img.src === selectedImg)
                    ? `${portfolioImages.find((img) => img.src === selectedImg).title} – ${portfolioImages.find((img) => img.src === selectedImg).description}`
                    : "Website project preview by First and Last Marketing"
                }
                className="w-full h-auto rounded-md"
              />
            )}
          </Dialog.Panel>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
