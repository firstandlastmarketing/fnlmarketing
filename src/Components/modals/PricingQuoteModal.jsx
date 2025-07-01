import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

// --- NEW: Define package options for each tab ---
// This makes the dropdown dynamic and easier to manage.
const packageOptions = {
  websites: [
    { value: "LaunchPad", label: "Website - LaunchPad" },
    { value: "Growth Engine", label: "Website - Growth Engine" },
    { value: "ScaleMax", label: "Website - ScaleMax" },
  ],
  blogs: [
    { value: "Basic Tier", label: "Blog - Basic Tier" },
    { value: "Standard Tier", label: "Blog - Standard Tier" },
    { value: "Premium Tier", label: "Blog - Premium Tier" },
  ],
  marketing: [
    { value: "Fast & Secure Web Hosting", label: "Service - Web Hosting" },
    { value: "Online Reputation Management", label: "Service - Reputation Management" },
    { value: "Database Reactivation", label: "Service - Database Reactivation" },
    { value: "Email & SMS Automation", label: "Service - Email & SMS Automation" },
    { value: "Live Chat & AI Chatbots", label: "Service - Live Chat & AI Bots" },
    { value: "Social Media Schedulers", label: "Service - Social Schedulers" },
  ],
};


export default function PricingQuoteModal({ isOpen, onClose, preselectedPackage, activeTab }) {
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // This state will now hold the selected package value directly
  const [selectedService, setSelectedService] = useState("");

  // --- FIX #1: More robust useEffect ---
  // This hook now runs only when the modal opens. It sets the state
  // directly from the prop, ensuring the correct value is always there.
  useEffect(() => {
    if (isOpen) {
      // If a package was pre-selected, set it. Otherwise, clear it.
      setSelectedService(preselectedPackage || "");
      // Reset status messages when modal re-opens
      setStatus(null); 
    }
  }, [isOpen, preselectedPackage]); // It depends on both isOpen and the prop

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        "fnlserviceid",        // Your EmailJS service ID
        "fnltemplateid",       // Your EmailJS template ID
        formRef.current,
        "_NXkr3UnpbWQmmVNs"    // Your EmailJS public key
      );
      setStatus("success");
      // Delay reset to allow user to see success message
      setTimeout(() => {
        formRef.current.reset();
        setSelectedService("");
        onClose(); // Optionally close the modal on success
      }, 2000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
    } finally {
      // We don't set loading to false immediately on success because of the timeout
      if (status !== "success") {
        setLoading(false);
      }
    }
  };

  // --- FIX #2: Get the correct options for the active tab ---
  const currentOptions = packageOptions[activeTab] || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose} // Close modal on overlay click
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
              aria-label="Close quote form"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <h2 className="text-2xl font-bold text-purple-800 mb-2">Request a Quote</h2>
            <p className="text-gray-600 text-sm mb-6">Tell us what you're looking for — we'll follow up with a custom quote based on your needs.</p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="form_name" value="Service Kickoff Form" />
              <input type="hidden" name="category" value={activeTab || ""} />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input required id="name" type="text" name="name" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input required id="email" type="email" name="email" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input id="phone" type="tel" name="phone" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">What package or service are you interested in?</label>
                <select
                  id="service"
                  name="service" // Correct name for form data
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                >
                  <option value="" disabled>Select a package...</option>
                  
                  {/* --- FIX #3: Render options dynamically --- */}
                  {currentOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                  
                  <option value="Not Sure Yet">Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell us a bit about your goals (optional)</label>
                <textarea id="message" name="message" rows="3" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"></textarea>
              </div>

              <button type="submit" disabled={loading || status === "success"} className="w-full py-3 rounded-lg bg-yellow-400 text-purple-900 font-bold hover:bg-yellow-500 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                {loading ? "Sending..." : status === "success" ? "Request Sent!" : "Send Request"}
              </button>

              {status === "success" && <p className="text-green-600 text-center text-sm pt-2">✅ Thank you! We’ll be in touch shortly.</p>}
              {status === "error" && <p className="text-red-600 text-center text-sm pt-2">❌ Something went wrong. Please check your info and try again.</p>}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}