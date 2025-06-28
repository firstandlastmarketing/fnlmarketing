import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Header from "./Components/Header.jsx";
import Hero from "./Components/Hero.jsx";
import Services from "./Components/Services.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import ChatWidget from "./Components/Chatwidget.jsx";
import ReviewWidget from "./Components/ReviewWidget.jsx";
import PromoBanner from "./Components/PromoBanner.jsx";
import DefaultLayout from "./Components/DefaultLayout.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

// Lazy-loaded pages
const Blog = lazy(() => import("./Components/Blog.jsx"));
const PostDetail = lazy(() => import("./Components/PostDetail.jsx"));
const PrivacyPolicy = lazy(() => import("./Components/PrivacyPolicy.jsx"));
const TermsOfUse = lazy(() => import("./Components/TermsOfUse.jsx"));
const Pricing = lazy(() => import("./Components/Pricing.jsx")); // ✅ NEW
const ContractorLandingPage = lazy(() => import("./Components/ContractorLandingPage.jsx")
); // ✅ NEW

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
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <main lang="en">
      <Routes>
        {/* Main Single-Page Layout */}
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
              <ChatWidget />
            </>
          }
        />

        {/* Lazy-loaded Routes */}
        <Route
          path="/blog"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ScrollToTop />
              <Blog />
              <Footer />
            </Suspense>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ScrollToTop />
              <PostDetail />
              <Header />
              <Footer />
            </Suspense>
          }
        />
        <Route
          path="/pricing"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <>
                <ScrollToTop />
                <DefaultLayout>
                  <Pricing />
                </DefaultLayout>
              </>
            </Suspense>
          }
        />

        <Route
          path="/privacy-policy"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PrivacyPolicy />
            </Suspense>
          }
        />
        <Route
          path="/terms-of-use"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <TermsOfUse />
            </Suspense>
          }
        />
        <Route path="/contractors" element={<ContractorLandingPage />} />
      </Routes>
    </main>
  );
};

export default App;
