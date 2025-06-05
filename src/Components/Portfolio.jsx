import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

import screenshot1 from "../assets/screenshot1.png";
import screenshot2 from "../assets/screenshot2.png";
import screenshot3 from "../assets/screenshot3.png";

const portfolioImages = [
  {
    src: screenshot1,
    alt: "E&C Clinic - Desktop View",
    title: "E&C Clinic - Desktop View",
    description: "Clean, professional layout optimized for desktop viewing.",
  },
  {
    src: screenshot3,
    alt: "E&C Clinic - Mobile View",
    title: "E&C Clinic - Mobile View",
    description: "Responsive design delivering optimal user experience on mobile devices.",
  },
  {
    src: screenshot2,
    alt: "First & Last Marketing - Hero Section",
    title: "First & Last Marketing - Hero Section",
    description: "Bold, strategic design showcasing our branding power.",
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
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">
            Portfolio
          </h2>
          <p className="text-gray-100 text-lg max-w-2xl mx-auto">
            Explore our latest digital craftsmanship in web design and brand storytelling.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-3xl font-semibold text-yellow-300 mb-6 text-center">
            Our Latest Project
          </h3>
          <div className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl border-4 border-purple-700">
            <ReactPlayer
              url="https://youtu.be/jKC4e1612eM"
              width="100%"
              height="100%"
              controls
            />
          </div>
          <div className="bg-purple-950/80 mt-8 p-6 lg:p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-yellow-400 mb-3">
              E&C Clinic Website Redesign
            </h4>
            <p className="text-gray-300 mb-2">
              A sleek, modern, and responsive website tailored to elevate E&C Clinic's online presence, engage patients, and build trust.
            </p>
            <p className="text-sm text-gray-400 italic">
              Industry: Healthcare / Medical
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-3xl font-semibold text-white mb-8 text-center">
            More From Our Work
          </h3>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioImages.map((item, index) => (
              <div
                key={index}
                className="group relative bg-purple-800/80 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                onClick={() => openModal(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-56 object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-yellow-400 font-bold text-sm">
                    Click to Enlarge
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold text-yellow-300 mb-1">{item.title}</h4>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Lightbox */}
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
                alt="Portfolio preview"
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
