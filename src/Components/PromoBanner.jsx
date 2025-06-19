import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSpeakerphone } from 'react-icons/hi';
import PromoFormModal from './PromoFormModal';

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasAutoExpanded, setHasAutoExpanded] = useState(false);
  const [showPromoForm, setShowPromoForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasClosed) {
        setIsVisible(true);
        setIsExpanded(true);
        setHasAutoExpanded(true);

        // Auto-close after 4s only on mobile
        if (window.innerWidth < 768) {
          setTimeout(() => {
            setIsExpanded(false);
            setHasClosed(true);
          }, 4000);
        }
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasClosed]);

  const handleClose = () => {
    setIsExpanded(false);
    setHasClosed(true);
  };

  const handleCTA = () => {
    setIsExpanded(false);
    setHasClosed(true);
    setShowPromoForm(true);
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
      {/* Always-visible widget button */}
      <motion.div
        variants={widgetVariants}
        animate="idle"
        className="fixed bottom-4 left-4 z-50"
      >
        {!isExpanded && (
          <button
            onClick={() => {
              setIsExpanded(true);
              setHasClosed(false);
            }}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-yellow-400 text-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold"
          >
            <HiSpeakerphone className="text-xl" />
            Promo
          </button>
        )}
      </motion.div>

      {/* Promo card */}
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
                      🎉 Stop Renting. Own Your Website.
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
                    Most sites are rented — you're paying forever for something you don’t own.
                    Let First and Last Marketing build you a blazing-fast, fully custom website
                    that’s 100% yours. No subscriptions. No cookie cutters. Just results.
                  </p>
                  <p className="text-red-500 text-xs font-medium">
                    Don’t waste $4,000 on templated fluff. Get it done right for $100.
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

      {/* Modal form */}
      <PromoFormModal
        isOpen={showPromoForm}
        onClose={() => setShowPromoForm(false)}
      />
    </>
  );
}
