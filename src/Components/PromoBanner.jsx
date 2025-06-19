import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSpeakerphone } from 'react-icons/hi';
import PromoFormModal from './PromoFormModal'; // ✅ Make sure the path is correct

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasAutoExpanded, setHasAutoExpanded] = useState(false);
  const [showPromoForm, setShowPromoForm] = useState(false); // ✅ New state to manage form modal

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasClosed) {
        setIsVisible(true);
        // Auto-expand on desktop only once per load
        if (window.innerWidth >= 768 && !hasAutoExpanded) {
          setIsExpanded(true);
          setHasAutoExpanded(true);
        }
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasClosed, hasAutoExpanded]);

  const handleClose = () => {
    setIsExpanded(false);
    setHasClosed(true);
  };

  const handleCTA = () => {
    setIsExpanded(false);
    setHasClosed(true);
    setShowPromoForm(true); // ✅ Open the form modal instead of scrolling
  };

  const widgetVariants = {
    idle: {
      scale: [1, 1.05, 1],
      transition: {
        repeat: Infinity,
        repeatDelay: 6,
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
      {/* Widget button — always visible */}
      <motion.div
        variants={widgetVariants}
        animate="idle"
        className="fixed bottom-4 left-4 z-50"
      >
        {!isExpanded && (
          <button
            onClick={() => {
              setIsExpanded(true);
              setHasClosed(false); // Allow expansion
            }}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-yellow-400 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold"
          >
            <HiSpeakerphone className="text-xl" />
            Promo
          </button>
        )}
      </motion.div>

      {/* Expanded promo content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="fixed bottom-4 left-4 z-50 w-[90vw] max-w-sm"
          >
            <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 p-[2px] rounded-2xl">
                <div className="bg-white rounded-[1rem] p-4 space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <h3 className="text-md font-bold text-gray-800">
                      🎉 $100 Website
                    </h3>
                    <button
                      onClick={handleClose}
                      className="text-gray-400 hover:text-black text-lg"
                      aria-label="Close promo"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm">
                    No templates. No fluff. Just clean websites that convert.
                  </p>
                  <button
                    onClick={handleCTA}
                    className="w-full text-white font-semibold text-sm py-2 rounded-xl bg-gradient-to-r from-purple-600 to-yellow-400 hover:scale-105 transition"
                  >
                    🚀 Claim for $100
                  </button>
                  <p className="text-[11px] text-gray-400 text-center pt-1">
                    by First and Last Marketing
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Promo Form Modal (Fully Self-contained) */}
      <PromoFormModal
        isOpen={showPromoForm}
        onClose={() => setShowPromoForm(false)}
      />
    </>
  );
}
