import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Core Components
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import Services from "./Components/Services.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import ReviewWidget from "./Components/ReviewWidget.jsx";
import PromoBanner from "./Components/PromoBanner.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

// AI Chat Assistant (✅ renamed if you updated file name from ChatWidget to AIChatAssistant)
import AIChatAssistant from "./Components/AIChatAssistant.jsx";

// Lazy-loaded Pages
const Blog = lazy(() => import("./Components/Blog.jsx"));
const PostDetail = lazy(() => import("./Components/PostDetail.jsx"));
const PrivacyPolicy = lazy(() => import("./Components/PrivacyPolicy.jsx"));
const TermsOfUse = lazy(() => import("./Components/TermsOfUse.jsx"));
const Pricing = lazy(() => import("./Components/Pricing.jsx"));
const ContractorLandingPage = lazy(() => import("./Components/ContractorLandingPage.jsx"));

// Scroll helper (scroll to an ID stored in sessionStorage)
const ScrollToSection = () => {
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
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <main lang="en" className="bg-white text-gray-900">
      <Routes>
        {/* Home Page - Full Scrollable SPA */}
        <Route
          path="/"
          element={
            <>
              <ScrollToTop />
              <ScrollToSection />
              <Header />
              <Hero />
              <ReviewWidget />
              <Services />
              <Portfolio />
              <About />
              <Contact />
              <PromoBanner />
              <Footer />
              <AIChatAssistant /> {/* ⬅️ Make sure this matches your file name */}
            </>
          }
        />

        {/* Blog List */}
        <Route
          path="/blog"
          element={
            <Suspense fallback={<div className="p-6 text-center">Loading blog...</div>}>
              <ScrollToTop />
              <Blog />
              <Footer />
            </Suspense>
          }
        />

        {/* Blog Detail */}
        <Route
          path="/blog/:slug"
          element={
            <Suspense fallback={<div className="p-6 text-center">Loading post...</div>}>
              <ScrollToTop />
              <Header />
              <PostDetail />
              <Footer />
            </Suspense>
          }
        />

        {/* Pricing Page */}
        <Route
          path="/pricing"
          element={
            <Suspense fallback={<div className="p-6 text-center">Loading pricing...</div>}>
              <ScrollToTop />
              <Pricing />
              <Footer />
            </Suspense>
          }
        />

        {/* Static Pages */}
        <Route
          path="/privacy-policy"
          element={
            <Suspense fallback={<div className="p-6 text-center">Loading policy...</div>}>
              <ScrollToTop />
              <PrivacyPolicy />
            </Suspense>
          }
        />
        <Route
          path="/terms-of-use"
          element={
            <Suspense fallback={<div className="p-6 text-center">Loading terms...</div>}>
              <ScrollToTop />
              <TermsOfUse />
            </Suspense>
          }
        />

        {/* Contractor Landing Page */}
        <Route
          path="/contractors"
          element={
            <Suspense fallback={<div className="p-6 text-center">Loading landing page...</div>}>
              <ScrollToTop />
              <ContractorLandingPage />
            </Suspense>
          }
        />
      </Routes>
    </main>
  );
};

export default App;
