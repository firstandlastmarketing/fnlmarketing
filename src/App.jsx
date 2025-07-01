import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Core Components
import Header from "./Components/layout/Header.jsx";
import Hero from "./Components/pages/Hero.jsx";
import Services from "./Components/pages/Services.jsx";
import Portfolio from "./Components/pages/Portfolio.jsx";
import About from "./Components/pages/About.jsx";
import Contact from "./Components/pages/Contact.jsx";
import Footer from "./Components/layout/Footer.jsx";
import ReviewWidget from "./Components/marketing/ReviewWidget.jsx";
import PromoBanner from "./Components/layout/PromoBanner.jsx";
import ScrollToTop from "./Components/layout/ScrollToTop.jsx";
import DefaultLayout from "./Components/layout/DefaultLayout.jsx";
// AI Chat Assistant
import AIChatAssistant from "./Components/ai/AIChatAssistant.jsx";

// Lazy-loaded Pages
const Blog = lazy(() => import("./Components/blog/Blog.jsx"));
const PostDetail = lazy(() => import("./Components/blog/PostDetail.jsx"));
const PrivacyPolicy = lazy(() => import("./Components/pages/PrivacyPolicy.jsx"));
const TermsOfUse = lazy(() => import("./Components/pages/TermsOfUse.jsx"));
const Pricing = lazy(() => import("./Components/pages/Pricing.jsx"));
const ContractorLandingPage = lazy(() => import("./Components/pages/ContractorLandingPage.jsx"));

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
        {/* Home Page */}
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Hero />
            </DefaultLayout>
          }
        />

        {/* Services Page */}
        <Route
          path="/services"
          element={
            <DefaultLayout>
              <Services />
            </DefaultLayout>
          }
        />

        {/* Portfolio Page */}
        <Route
          path="/portfolio"
          element={
            <DefaultLayout>
              <Portfolio />
            </DefaultLayout>
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={
            <DefaultLayout>
              <About />
            </DefaultLayout>
          }
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <DefaultLayout>
              <Contact />
            </DefaultLayout>
          }
        />

        {/* Pricing Page */}
        <Route
          path="/pricing"
          element={
            <Suspense fallback={<div className="p-6 text-center">Loading pricing...</div>}>
              <ScrollToTop />
              <DefaultLayout>
                <Pricing />
              </DefaultLayout>
            </Suspense>
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
              <AIChatAssistant />
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
              <AIChatAssistant />
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
