import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './Components/Header.jsx';
import Hero from './Components/Hero.jsx';
import Services from './Components/Services.jsx';
import Portfolio from './Components/Portfolio.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import ChatWidget from './Components/Chatwidget.jsx';
import PromoPopup from './Components/PromoPopUp.jsx';

const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <main lang="en">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <PromoPopup />
      <Footer />
      <ChatWidget />
    </main>
  );
};

export default App;
