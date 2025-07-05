/*
/src/hooks/useProactiveChat.js
--------------------------------------------------------------------------------
REVISION: 1.0.0 "Proactive Engagement Engine"
PURPOSE:
This custom React hook is the "nervous system" for making the Jacob AI assistant
proactive. It intelligently monitors user behavior on the page—such as idleness,
scrolling to key sections, and intent to exit—and communicates with the
AIChatAssistant component to initiate timely, context-aware conversations.
*/

import { useEffect, useRef, useState } from 'react';

/**
 * A sophisticated hook to manage proactive chat engagements.
 * @param {React.RefObject} chatRef - A ref pointing to the AIChatAssistant component instance.
 * @param {object} options - Configuration options for the hook.
 * @param {string} [options.pricingSectionId] - The DOM ID of the pricing section to observe for scroll triggers.
 * @param {boolean} [options.isChatOpen] - A boolean state from the parent indicating if the chat is already open.
 * @param {number} [options.idleTimeout=60000] - The time in milliseconds before the idle trigger fires (default: 60 seconds).
 * @param {boolean} [options.exitIntentEnabled=true] - A flag to enable or disable the exit intent trigger.
 */
export const useProactiveChat = (chatRef, { isChatOpen, pricingSectionId, idleTimeout = 60000, exitIntentEnabled = true } = {}) => {
  // Use a Set for efficient tracking of which events have already fired this session.
  const [triggeredEvents, setTriggeredEvents] = useState(new Set());
  
  // Use a ref for the idle timer to avoid re-renders on every reset.
  const idleTimerRef = useRef(null);

  /**
   * Central function to safely trigger a proactive event.
   * @param {string} eventName - The name of the event to trigger (e.g., 'onIdle').
   */
  const triggerEvent = (eventName) => {
    // Guard clauses: Do not fire if...
    // 1. The chat assistant ref isn't ready yet.
    // 2. The chat window is already open.
    // 3. This specific event has already been triggered in this session.
    if (!chatRef.current || isChatOpen || triggeredEvents.has(eventName)) {
      return;
    }

    // Mark event as triggered to prevent spamming the user.
    setTriggeredEvents(prev => new Set(prev).add(eventName));

    // This is the "handshake". We call the function exposed by AIChatAssistant
    // to command it to open and send a specific trigger message to the backend.
    console.log(`Proactive hook firing event: ${eventName}`);
    chatRef.current.initiateProactiveMessage(`TRIGGER:${eventName}`);
  };

  // --- EFFECT 1: Idle User Detection ---
  useEffect(() => {
    // Resets the countdown timer. Called by any user activity.
    const resetIdleTimer = () => {
      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => triggerEvent('onIdle'), idleTimeout);
    };

    // Listen for common user activity events.
    window.addEventListener('mousemove', resetIdleTimer);
    window.addEventListener('keypress', resetIdleTimer);
    window.addEventListener('scroll', resetIdleTimer);
    window.addEventListener('touchstart', resetIdleTimer);

    // Start the first timer when the component mounts.
    resetIdleTimer();

    // Cleanup: Remove all listeners and clear the timer when the component unmounts.
    return () => {
      clearTimeout(idleTimerRef.current);
      window.removeEventListener('mousemove', resetIdleTimer);
      window.removeEventListener('keypress', resetIdleTimer);
      window.removeEventListener('scroll', resetIdleTimer);
      window.removeEventListener('touchstart', resetIdleTimer);
    };
  }, [isChatOpen, triggeredEvents]); // Re-evaluate if the chat opens or triggers change.

  // --- EFFECT 2: Scroll-to-Section Detection ---
  useEffect(() => {
    // Do nothing if no pricing section ID is provided.
    if (!pricingSectionId) return;

    const pricingElement = document.getElementById(pricingSectionId);
    if (!pricingElement) return;

    // Use IntersectionObserver for high-performance scroll detection.
    const observer = new IntersectionObserver(
      (entries) => {
        // isIntersecting is true when the element enters the viewport.
        if (entries[0].isIntersecting) {
          triggerEvent('onScrollToPricing');
          // Important: Disconnect the observer after it fires to prevent re-triggering.
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible.
    );

    observer.observe(pricingElement);

    // Cleanup: Ensure the observer is disconnected on unmount.
    return () => observer.disconnect();
  }, [pricingSectionId, isChatOpen, triggeredEvents]);

  // --- EFFECT 3: Exit-Intent Detection ---
  useEffect(() => {
    // Do nothing if this feature is disabled via props.
    if (!exitIntentEnabled) return;

    const handleMouseLeave = (event) => {
      // Trigger if the mouse's vertical position is near the top of the viewport.
      if (event.clientY <= 10) {
        triggerEvent('onExitIntent');
        // We only want to fire this once, so we remove the listener immediately after.
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    // Attach the listener to the document's body.
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup: Remove the listener on unmount.
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [exitIntentEnabled, isChatOpen, triggeredEvents]);

  // This hook performs side effects and doesn't need to return any value to the component.
};