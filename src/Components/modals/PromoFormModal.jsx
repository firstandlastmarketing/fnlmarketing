import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function PromoFormModal({ isOpen, onClose }) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // { success: true|false, message: string }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus(null);

    try {
      await emailjs.sendForm(
        'fnlserviceid', // ✅ Correct service ID
        'fnltemplateid',
        formRef.current,
        '_NXkr3UnpbWQmmVNs'
      );

      setFormStatus({ success: true, message: 'Message sent successfully!' });
      formRef.current.reset();

      // ✅ Auto-close modal after a short delay
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      console.error(error);
      setFormStatus({ success: false, message: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog as="div" className="fixed inset-0 z-[100]" open={isOpen} onClose={onClose}>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/30 z-40" aria-hidden="true" />

          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto">
            <Dialog.Panel
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white max-w-xl w-full mx-auto rounded-2xl shadow-2xl border border-gray-200"
            >
              <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 p-[2px] rounded-2xl">
                <div className="bg-white rounded-[1rem] p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">🚀 Claim Your $100 Website</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-black text-xl font-bold">&times;</button>
                  </div>

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <input type="hidden" name="form_name" value="Promo Form Submission" />
                    <input type="hidden" name="services" value="Promo Website" />

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={loading}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        disabled={loading}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={loading}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        disabled={loading}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className={`w-full bg-gradient-to-r from-purple-600 to-yellow-400 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300 hover:scale-105 ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send My Request"}
                    </button>

                    {formStatus && (
                      <p className={`text-sm font-semibold mt-2 ${formStatus.success ? "text-green-600" : "text-red-600"}`} role="alert">
                        {formStatus.message}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
