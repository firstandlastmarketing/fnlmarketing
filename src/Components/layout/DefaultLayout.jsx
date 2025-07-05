
//src/Components/layout/DefaultLayout.jsx
//--------------------------------------------------------------------------------
/*ENHANCEMENT: This layout is now the "control center" for the proactive AI.
It uses the useProactiveChat hook and passes commands down to the AIChatAssistant.
*/

import React, { useRef } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import PromoBanner from '../PromoBanner.jsx';
import AIChatAssistant from '../ai/AIChatAssistant.jsx';

// Import our new proactive hook
import { useProactiveChat } from '../../hooks/useProactiveChat.js';

const DefaultLayout = ({ children }) => {
  // Create the ref that will allow us to "command" the chat assistant
  const chatRef = useRef(null);

  // --- THIS IS THE ACTIVATION CODE ---
  // We call the hook here. It will listen for user behavior on any page
  // that uses this DefaultLayout.
  // We pass it the ref and tell it which DOM ID to watch for scroll events.
  useProactiveChat(chatRef, { pricingSectionId: 'pricing-section' });

  return (
    <>
      <Header />
      {/* 
        The chat assistant is now connected to our ref, making it "commandable"
        by the useProactiveChat hook.
      */}
      <AIChatAssistant ref={chatRef} />
      <PromoBanner />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;