import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ChatWidget from './Chatwidget.jsx';
import PromoBanner from './PromoBanner.jsx';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <PromoBanner />
      {children}
      <Footer />
      <ChatWidget />
    </>
  );
};

export default DefaultLayout;
