import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import components
import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import Services from './Components/Services.jsx';
import Portfolio from './Components/Portfolio.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import ChatWidget from './Components/Chatwidget.jsx';
import Promo from './Components/Promo.jsx';
import ReviewWidget from './Components/ReviewWidget.jsx';

// Import legal pages

import { lazy, Suspense } from 'react';

const Blog = lazy(() => import('./Components/Blog.jsx'));
const PostDetail = lazy(() => import('./Components/PostDetail.jsx'));
const PrivacyPolicy = lazy(() => import('./Components/PrivacyPolicy.jsx'));
const TermsOfUse = lazy(() => import('./Components/TermsOfUse.jsx'));


const ScrollToSection = () => {
  useEffect(() => {
    const scrollTo = sessionStorage.getItem('scrollTo');
    if (scrollTo) {
      const el = document.querySelector(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
          sessionStorage.removeItem('scrollTo');
        }, 300); // slight delay to allow DOM to fully render
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
              <ScrollToSection />
              <Header />
              <Hero />
              <ReviewWidget />
              <Services />
              <Portfolio />
              <About />
              <Contact />
              <Promo />
              <Footer />
              <ChatWidget />
            </>
          }
        />
        {/* Blog and Post Detail */}
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<PostDetail />} />
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Suspense>
      </Routes>
    </main>
  );
};

export default App;
