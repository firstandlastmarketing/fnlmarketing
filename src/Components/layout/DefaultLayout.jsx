import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import PromoBanner from './PromoBanner.jsx';
import AIChatAssistant from '../ai/AIChatAssistant.jsx';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <AIChatAssistant />
      <PromoBanner />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
