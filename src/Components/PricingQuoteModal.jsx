import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function PricingQuoteModal({ isOpen, onClose, preselectedPackage, activeTab }) {
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState("");

  // Update selected package when prop changes
  useEffect(() => {
    if (preselectedPackage) {
      setSelectedPkg(preselectedPackage);
    }
  }, [preselectedPackage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        "fnlserviceid",        // Replace with your EmailJS service ID
        "fnltemplateid",       // Replace with your EmailJS template ID
        formRef.current,
        "_NXkr3UnpbWQmmVNs"    // Replace with your EmailJS public key
      );
      setStatus("success");
      formRef.current.reset();
      setSelectedPkg("");  // Reset selection after submit
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold"
              aria-label="Close quote form"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-purple-800 mb-2">
              Request a Quote
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Tell us what you're looking for — we'll follow up with a custom quote based on your needs.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="form_name" value="Service Kickoff Form" />
              <input type="hidden" name="category" value={activeTab || ""} />

              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  What package or service are you interested in?
                </label>
                <select
                  name="services"
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  value={selectedPkg}
                  onChange={(e) => setSelectedPkg(e.target.value)}
                  required
                >
                  <option value="">Select a package</option>
                  <option value="Basic Package">Basic Package</option>
                  <option value="Growth Package">Growth Package</option>
                  <option value="Premium Package">Premium Package</option>
                  <option value="Basic Tier">Basic Tier</option>
                  <option value="Standard Tier">Standard Tier</option>
                  <option value="Premium Tier">Premium Tier</option>
                  <option value="Fast & Secure Web Hosting">Fast & Secure Web Hosting</option>
                  <option value="Online Reputation Management">Online Reputation Management</option>
                  <option value="Database Reactivation Campaigns">Database Reactivation Campaigns</option>
                  <option value="Email & SMS Automation">Email & SMS Automation</option>
                  <option value="Live Chat & AI Chatbots">Live Chat & AI Chatbots</option>
                  <option value="Social Media Schedulers">Social Media Schedulers</option>
                  <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tell us a bit about your goals (optional)
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-yellow-400 text-white font-semibold hover:opacity-90 transition"
              >
                {loading ? "Sending..." : "Send Request"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-sm pt-2">
                  ✅ Request sent! We’ll be in touch shortly.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm pt-2">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
