import React, { useEffect, lazy, Suspense } from "react";
// --- UPDATE: Add useLocation to this import ---
import { Routes, Route, useLocation } from "react-router-dom"; 
import AOS from "aos";
import "aos/dist/aos.css";

// --- All your component imports remain exactly the same ---
import Header from "./Components/layout/Header.jsx";
import HomePage from "./Components/pages/HomePage.jsx";
import Services from "./Components/pages/Services.jsx";
import Portfolio from "./Components/pages/Portfolio.jsx";
import About from "./Components/pages/About.jsx";
import Contact from "./Components/pages/Contact.jsx";
import Footer from "./Components/layout/Footer.jsx";
import ScrollToTop from "./Components/layout/ScrollToTop.jsx";
import DefaultLayout from "./Components/layout/DefaultLayout.jsx";
import AIChatAssistant from "./Components/ai/AIChatAssistant.jsx";
import OnboardingForm from "./Components/marketing/OnboardingForm.jsx";

const Blog = lazy(() => import("./Components/blog/Blog.jsx"));
const PostDetail = lazy(() => import("./Components/blog/PostDetail.jsx"));
const PrivacyPolicy = lazy(() => import("./Components/pages/PrivacyPolicy.jsx"));
const TermsOfUse = lazy(() => import("./Components/pages/TermsOfUse.jsx"));
const Pricing = lazy(() => import("./Components/pages/Pricing.jsx"));
const ContractorLandingPage = lazy(() => import("./Components/pages/ContractorLandingPage.jsx"));

const ScrollToSection = () => {
  // This component remains unchanged
  useEffect(() => {
    const scrollTo = sessionStorage.getItem("scrollTo");
    if (scrollTo) {
      const el = document.querySelector(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
          sessionStorage.removeItem("scrollTo");
        }, 300);
      }
    }
  }, []);
  return null;
};

const App = () => {
  // --- NEW: Add this line to get the current location ---
  const location = useLocation();

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  // --- NEW: This useEffect hook tracks page views ---
  useEffect(() => {
    // Check if the gtag function exists (it's loaded from index.html)
    if (window.gtag) {
      // Send a pageview event to Google Analytics every time the route changes
      window.gtag('config', 'YOUR_GA_MEASUREMENT_ID', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]); // This ensures the effect runs on every navigation change

  return (
    // The rest of your App component remains exactly the same
    <main lang="en" className="bg-white text-gray-900">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DefaultLayout><HomePage /></DefaultLayout>} />
        <Route path="/services" element={<DefaultLayout><Services /></DefaultLayout>} />
        <Route path="/portfolio" element={<DefaultLayout><Portfolio /></DefaultLayout>} />
        <Route path="/about" element={<DefaultLayout><About /></DefaultLayout>} />
        <Route path="/contact" element={<DefaultLayout><Contact /></DefaultLayout>} />
        <Route path="/pricing" element={<Suspense fallback={<div>Loading...</div>}><DefaultLayout><Pricing /></DefaultLayout></Suspense>} />
        <Route path="/blog" element={<Suspense fallback={<div>Loading...</div>}><Blog /><Footer /><AIChatAssistant /></Suspense>} />
        <Route path="/blog/:slug" element={<Suspense fallback={<div>Loading...</div>}><Header /><PostDetail /><Footer /><AIChatAssistant /></Suspense>} />
        <Route path="/privacy-policy" element={<Suspense fallback={<div>Loading...</div>}><PrivacyPolicy /></Suspense>} />
        <Route path="/terms-of-use" element={<Suspense fallback={<div>Loading...</div>}><TermsOfUse /></Suspense>} />
        <Route path="/contractors" element={<Suspense fallback={<div>Loading...</div>}><ContractorLandingPage /></Suspense>} />
        <Route path="/onboarding" element={<DefaultLayout><OnboardingForm /></DefaultLayout>} />
      </Routes>
    </main>
  );
};

export default App;