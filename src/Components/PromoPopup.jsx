import { Dialog } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PromoPopUp() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // show after 2s

    return () => clearTimeout(timer);
  }, []);

  const handleCTAClick = () => {
    setIsOpen(false);
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          as="div"
          className="fixed inset-0 z-50 flex items-center justify-center"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative z-50 max-w-lg w-[90%] bg-white rounded-2xl shadow-2xl overflow-hidden p-6"
          >
            <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 p-1 rounded-xl">
              <div className="bg-white p-6 rounded-[0.9rem] space-y-4 relative">
                <h2 className="text-2xl font-bold text-center text-gray-900">
                  🎉 $100 Custom Website — Let’s Build Yours
                </h2>
                <p className="text-center text-gray-700 text-sm">
                  Clean, fast, made-for-you — no templates, no fluff. Just a solid site that does the job.
                </p>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                  <li>Designed around you — not dragged from a builder.</li>
                  <li>Fast, responsive, and ready for anything.</li>
                  <li>Perfect if you’re serious about what you do.</li>
                </ul>
                <p className="text-sm text-center text-red-600 font-medium">
                  Only a few slots open. Once they’re gone, they’re gone.
                </p>
                <p className="text-[13px] text-gray-500 text-center">
                  Fill the form below, then DM us "<strong>$100 Website</strong>" — we’ll take it from there.
                </p>
                <button
                  onClick={handleCTAClick}
                  className="block w-full text-center mt-4 bg-gradient-to-r from-purple-600 to-yellow-400 text-white font-semibold py-2 rounded-xl hover:scale-105 transition"
                >
                  🚀 Claim My $100 Website
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-black transition text-xl"
                  aria-label="Close popup"
                >
                  ×
                </button>
              </div>
            </div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
