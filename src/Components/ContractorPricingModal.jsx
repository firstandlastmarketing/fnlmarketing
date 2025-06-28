// src/components/ContractorPricingModal.jsx

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { XMarkIcon, PaperAirplaneIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
};

const ContractorPricingModal = ({ isOpen, onClose }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    emailjs.sendForm(
      'fnlserviceid',       // Your Service ID
      'fnltemplateid',      // Your Template ID
      form.current,
      '_NXkr3UnpbWQ'  // Your Public Key
    ).then((result) => {
        console.log(result.text);
        setSubmissionStatus('success');
        setIsSubmitting(false);
        form.current.reset();
        setTimeout(() => {
          onClose();
          setSubmissionStatus(null);
        }, 3000); // Close modal after 3 seconds on success
      }, (error) => {
        console.log(error.text);
        setSubmissionStatus('error');
        setIsSubmitting(false);
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="relative bg-gradient-to-br from-slate-800 to-gray-900 w-full max-w-lg m-4 p-8 rounded-2xl border border-purple-500/20 shadow-2xl"
            variants={modal}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
              <XMarkIcon className="h-6 w-6" />
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-2">Schedule Your Free Strategy Call</h2>
            <p className="text-gray-400 mb-6">Let's find out how we can get your phone ringing. Fill this out, and we'll be in touch!</p>

            {submissionStatus === 'success' ? (
              <div className="text-center py-10">
                <CheckCircleIcon className="h-16 w-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                <p className="text-gray-300">Your request has been sent. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <input type="text" name="user_name" id="user_name" required className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all" />
                  </div>
                  <div>
                    <label htmlFor="company_name" className="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                    <input type="text" name="company_name" id="company_name" required className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all" />
                  </div>
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input type="email" name="user_email" id="user_email" required className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">What's your biggest marketing challenge?</label>
                  <textarea name="message" id="message" rows="3" required className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"></textarea>
                </div>
                
                {submissionStatus === 'error' && (
                  <p className="text-sm text-red-400">Something went wrong. Please try again or email us directly.</p>
                )}

                <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center font-bold text-gray-900 bg-gradient-to-r from-[#FCD34D] to-yellow-300 rounded-lg shadow-lg px-7 py-3 text-base transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send My Request <PaperAirplaneIcon className="h-5 w-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContractorPricingModal;