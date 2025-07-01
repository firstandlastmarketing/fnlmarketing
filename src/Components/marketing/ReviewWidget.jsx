// src/components/ReviewSection.jsx
import React from "react";
import { FaFacebook, FaYelp, FaStar } from "react-icons/fa";

const ReviewWidget = () => {
  const renderStars = () => (
    <div className="flex justify-center mt-1">
      {Array(5)
        .fill()
        .map((_, idx) => (
          <FaStar key={idx} className="text-yellow-400 text-xs mx-0.5" />
        ))}
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-yellow-700 text-white pt-4 pb-30 py-12 px-4 sm:px-6 lg:px-10">
      {/* Dark overlay for background gradient */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-3">
          <h2 className="text-xl font-extrabold">
            <span className="text-yellow-400">Please kindly</span> leave us a review
          </h2>
          <p className="mt-1 italic text-yellow-100/70 max-w-xl mx-auto text-xs">
            Whether you’ve experienced our services or simply admire our website, your positive feedback helps us grow and means the world to us. 
            We’d be truly grateful if you leave us a nice review !
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 justify-center items-center">
          {/* Facebook Review Button */}
          <div className="flex flex-col items-center">
            <a
              href="https://www.facebook.com/fnlmarketting/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-[#1877F2] hover:bg-[#145dcf] transition rounded-xl py-2 px-4 shadow-lg w-full"
            >
              <div className="flex items-center">
                <FaFacebook className="text-white text-2xl mr-3" />
                <span className="text-white font-semibold text-xs">Review Us on Facebook</span>
              </div>
              {renderStars()}
            </a>
          </div>

          {/* Yelp Review Button */}
          <div className="flex flex-col items-center">
            <a
              href="https://www.yelp.com/biz/first-and-last-marketing-springfield#reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-[#d32323] hover:bg-[#aa1d1d] transition rounded-xl py-2 px-4 shadow-lg w-full"
            >
              <div className="flex items-center">
                <FaYelp className="text-white text-2xl mr-3" />
                <span className="text-white font-semibold text-xs">Review Us on Yelp</span>
              </div>
              {renderStars()}
            </a>
          </div>

          {/* DesignRush Review Button */}
          <div className="flex flex-col items-center">
            <a
              href="https://www.designrush.com/agency/profile/first-and-last-marketing-digital-marketing#reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-gradient-to-r from-blue-600 to-black transition rounded-xl py-2 px-4 shadow-lg w-full"
            >
              <div className="flex items-center">
                <FaStar className="text-white text-2xl mr-3" />
                <span className="text-white font-semibold text-xs">Review Us on DesignRush</span>
              </div>
              {renderStars()}
            </a>
          </div>

          {/* Clutch Review Button */}
          <div className="flex flex-col items-center">
            <a
              href="https://clutch.co/profile/first-last-marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-[#0A0A0A] hover:bg-[#1c1c1c] transition rounded-xl py-2 px-4 shadow-lg w-full"
            >
              <div className="flex items-center">
                <FaStar className="text-white text-2xl mr-3" />
                <span className="text-white font-semibold text-xs">Review Us on Clutch</span>
              </div>
              {renderStars()}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewWidget;
