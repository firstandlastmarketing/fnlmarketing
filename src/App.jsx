import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true, // whether animation should happen only once
  duration: 1000, // default animation duration
});


import React from 'react'
import Header from './Components/Header.jsx'
import Hero from './Components/Hero.jsx'
import Services from './Components/Services.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import Portfolio from './Components/Portfolio.jsx'
import ChatWidget from "./Components/Chatwidget.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App
