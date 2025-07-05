/*
/src/Components/ai/AIChatAssistant.jsx
--------------------------------------------------------------------------------
REVISION: 7.1 "The Definitive & Debugged Experience"
PURPOSE:
This is the final, corrected, and self-contained version of the component.
1.  FIXED: A critical syntax error where localStorage logic was outside of its
    useEffect hook has been corrected. The component now compiles and runs.
2.  SOLVED: The overlapping icon bug is fixed by managing the icon's visibility
    within this component's state.
3.  ENHANCED: Desktop aesthetics are upgraded for a top-tier feel.
4.  ROBUST: All logic for the chat UI is encapsulated in this single component.
*/

import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, XCircle, Sparkles, Bot, User, MessageSquare } from "lucide-react";
import axios from "axios";

// Specialized child components
import Message from "./Message.jsx";
import ChatLeadCaptureForm from "../marketing/ChatLeadCaptureForm.jsx";
import chatSound from "../../assets/chat-open.mp3";

const TypingIndicator = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-end gap-2.5 w-full">
    <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-purple-800"><Sparkles className="w-5 h-5 text-yellow-300" /></div>
    <div className="max-w-[80%] rounded-2xl p-3 shadow-md bg-white text-gray-800 rounded-bl-none">
      <div className="flex items-center gap-1.5">
        <motion.div className="w-2 h-2 bg-gray-400 rounded-full" animate={{ scale: [1, 1.2, 1], y: [0, -2, 0] }} transition={{ duration: 0.8, repeat: Infinity }} />
        <motion.div className="w-2 h-2 bg-gray-400 rounded-full" animate={{ scale: [1, 1.2, 1], y: [0, -2, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }} />
        <motion.div className="w-2 h-2 bg-gray-400 rounded-full" animate={{ scale: [1, 1.2, 1], y: [0, -2, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }} />
      </div>
    </div>
  </motion.div>
);

const AIChatAssistant = forwardRef((props, ref) => {
  const [messages, setMessages] = useState([]);
  const [formConfig, setFormConfig] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showNudge, setShowNudge] = useState(false);
  
  const chatEndRef = useRef(null);
  const audioRef = useRef(null);
  const apiBase = import.meta.env.VITE_API_BASE_URL || "";

  // --- FIX: The localStorage logic is now correctly wrapped in a useEffect hook. ---
  // This hook runs ONLY ONCE when the component first mounts.
  useEffect(() => {
    try {
      const saved = localStorage.getItem("fnl-chat-messages");
      if (saved) {
        setMessages(JSON.parse(saved));
      } else {
        setMessages([{ role: "assistant", content: "Hi there! I'm Jacob from First and Last Marketing. How can I assist you today?" }]);
      }
    } catch {
      setMessages([{ role: "assistant", content: "Hi there! I'm Jacob. How can I help?" }]);
    }
  }, []); // The empty dependency array [] ensures this runs only once.

  // Effect to save messages to localStorage whenever they change
  useEffect(() => {
    try {
      if (messages.length > 0) {
        localStorage.setItem("fnl-chat-messages", JSON.stringify(messages));
      }
    } catch (error) {
      console.error("Failed to save chat messages:", error);
    }
  }, [messages]);

  // Effect for the proactive "Have a question?" nudge
  useEffect(() => {
    const nudgeInterval = setInterval(() => {
      if (!isOpen && messages.length <= 1) {
        setShowNudge(true);
        setTimeout(() => setShowNudge(false), 10000);
      }
    }, 45000);
    return () => clearInterval(nudgeInterval);
  }, [isOpen, messages.length]);

  // Effect to smoothly scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, formConfig]);

  const toggleChat = () => {
    setIsOpen(open => {
      if (!open && audioRef.current) audioRef.current.play().catch(() => {});
      return !open;
    });
  };
  
  const sendMessage = async (messageContent = input) => {
    if (!messageContent.trim() || loading) return;
    if (!messageContent.startsWith("TRIGGER:")) {
      setMessages(prev => [...prev, { role: "user", content: messageContent }]);
    }
    
    setInput("");
    setLoading(true);
    setFormConfig(null);

    const sessionId = localStorage.getItem("jacob-session-id") || crypto.randomUUID();
    localStorage.setItem("jacob-session-id", sessionId);

    try {
      const res = await axios.post(`${apiBase}/api/chat`, {
        sessionId,
        message: { role: "user", content: messageContent },
      });

      const data = res.data;
      const responseContent = data.content || data.confirmationMessage || "";

      if (data.type === "FORM_TRIGGER") {
        setMessages(prev => [...prev, { role: "assistant", content: responseContent }]);
        setFormConfig(data.formConfig);
      } else {
        setMessages(prev => [...prev, { role: "assistant", content: responseContent }]);
      }
    } catch (error) {
      console.error("Chat send error:", error);
      const errorMessage = error.response?.data?.error || "I'm having a little trouble connecting right now. Please try again in a moment.";
      setMessages(prev => [...prev, { role: "assistant", content: errorMessage }]);
    } finally {
      setLoading(false);
    }
  };

  const handleLeadFormSubmit = async (formData) => {
    try {
        setLoading(true);
        const res = await axios.post(`${apiBase}/api/send-lead`, formData);
        setFormConfig(null);
        setMessages(prev => [...prev, { role: "assistant", content: res.data.reply }]);
    } catch (error) {
        const errorMessage = error.response?.data?.error || "There was an issue submitting your form. Please try again.";
        setMessages(prev => [...prev, { role: "assistant", content: errorMessage }]);
    } finally {
        setLoading(false);
    }
  };

  const endChat = () => {
    localStorage.removeItem("jacob-session-id");
    localStorage.removeItem("fnl-chat-messages");
    setMessages([{ role: "assistant", content: "Chat ended. Feel free to start a new conversation anytime!" }]);
    setFormConfig(null);
    setIsOpen(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useImperativeHandle(ref, () => ({
    initiateProactiveMessage(triggerMessage) {
      if (isOpen || messages.length > 1) return;
      setIsOpen(true);
      setTimeout(() => sendMessage(triggerMessage), 500);
    }
  }));

  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: 'circOut' } },
    exit: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.2, ease: 'circIn' } }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="fixed z-[9998] bottom-4 right-4 sm:bottom-6 sm:right-6"
          >
            <AnimatePresence>
              {showNudge && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="absolute bottom-full right-0 mb-3 flex items-center gap-2 p-3 bg-white rounded-lg shadow-lg border border-gray-200"
                >
                  <p className="text-sm font-medium text-gray-700 whitespace-nowrap">Have a question?</p>
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                </motion.div>
              )}
            </AnimatePresence>
            <motion.button
              onClick={toggleChat}
              className="w-16 h-16 rounded-full shadow-xl bg-gradient-to-tr from-purple-600 via-blue-500 to-yellow-400 flex items-center justify-center text-white"
              aria-label="Toggle Chat"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bot className="w-8 h-8" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 w-full h-[100dvh] sm:w-96 sm:h-[calc(100vh-80px)] sm:max-h-[650px] bg-slate-50 rounded-none sm:rounded-2xl shadow-2xl flex flex-col border border-slate-300 z-[9999]"
            role="dialog"
          >
            <header className="flex-shrink-0 flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-800 to-yellow-600 text-white shadow-md sm:rounded-t-2xl">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <h2 className="text-lg font-bold">Ask Jacob</h2>
              </div>
              <button onClick={endChat} aria-label="End Chat" className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-colors">
                <XCircle className="w-6 h-6" />
              </button>
            </header>

            <main className="flex-1 p-4 flex flex-col gap-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-100 hover:scrollbar-thumb-slate-500">
              <motion.div layout className="space-y-4">
                <AnimatePresence>
                  {messages.map((msg, i) => (
                    <Message key={i} msg={msg} />
                  ))}
                </AnimatePresence>
              </motion.div>
              
              {formConfig && <ChatLeadCaptureForm onSubmit={handleLeadFormSubmit} {...formConfig} />}
              {loading && <TypingIndicator />}
              <div ref={chatEndRef} />
            </main>

            <footer className="flex-shrink-0 p-3 border-t bg-white">
              <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex items-center gap-3">
                <textarea
                  rows="1"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="flex-1 resize-none px-4 py-2.5 bg-slate-100 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-base"
                  placeholder="Ask anything..."
                  disabled={loading}
                />
                <button type="submit" disabled={loading || !input.trim()} className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-700 to-blue-600 text-white hover:scale-105 active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed">
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </footer>
            <audio ref={audioRef} src={chatSound} preload="auto" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

export default AIChatAssistant;