import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, XCircle, User, Sparkles } from "lucide-react";
import chatSound from "../../assets/chat-open.mp3";
import ReactMarkdown from "react-markdown";

// This would be your actual component import
// import ChatLeadCaptureForm from "../marketing/ChatLeadCaptureForm.jsx";

// MOCK FORM COMPONENT FOR DEMONSTRATION - Replace with your actual import
const ChatLeadCaptureForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      onSubmit({ name, email, message: 'Lead captured from Jacob.' });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg border border-gray-200 text-sm">
      <p className="font-bold text-gray-800 mb-2">Let's get you a quote. Please provide your details:</p>
      <div className="space-y-2">
        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-purple-700 text-white font-bold p-2 rounded hover:bg-purple-800">Submit</button>
      </div>
    </form>
  );
};


// ===> ENHANCEMENT: A new, animated "typing" indicator component.
const TypingIndicator = () => (
  <div className="flex items-end gap-2">
    <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-purple-800">
      <Bot className="w-5 h-5 text-yellow-300" />
    </div>
    <div className="max-w-[80%] rounded-2xl p-3 shadow-md bg-white text-gray-800 rounded-bl-none">
      <div className="flex items-center gap-1.5">
        <motion.div
          className="w-2 h-2 bg-gray-400 rounded-full"
          animate={{ scale: [1, 1.2, 1], y: [0, -2, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="w-2 h-2 bg-gray-400 rounded-full"
          animate={{ scale: [1, 1.2, 1], y: [0, -2, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.div
          className="w-2 h-2 bg-gray-400 rounded-full"
          animate={{ scale: [1, 1.2, 1], y: [0, -2, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </div>
    </div>
  </div>
);

export default function AIChatAssistant() {
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem("fnl-chat-messages");
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);
  const audioRef = useRef(null);
  const apiBase = import.meta.env.VITE_API_BASE_URL || "";
  const [showHint, setShowHint] = useState(false);

  // ===> UPGRADE: Logic for the repeating, cycling hint bubble.
  useEffect(() => {
    if (isOpen) {
      setShowHint(false);
      return;
    }

    const initialDelay = 5000; // 5 seconds before the first hint
    const hintVisibleDuration = 6000; // Hint stays visible for 6 seconds
    const cycleInterval = 20000; // Repeats every 20 seconds (6s visible + 14s hidden)

    let intervalId;
    const startCycle = () => {
      setShowHint(true);
      setTimeout(() => setShowHint(false), hintVisibleDuration);
    };
    
    const initialTimeoutId = setTimeout(() => {
      startCycle();
      intervalId = setInterval(startCycle, cycleInterval);
    }, initialDelay);

    return () => {
      clearTimeout(initialTimeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [isOpen]);

  useEffect(() => {
    try {
      localStorage.setItem("fnl-chat-messages", JSON.stringify(messages));
    } catch { /* Ignore */ }
  }, [messages]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen && messages.length === 0 && !loading) {
      setMessages([{ role: "assistant", content: "Hi there! I'm Jacob from First and Last Marketing. How can I assist you today?" }]);
    }
  }, [isOpen, messages.length, loading]);

  const toggleChat = () => {
    setIsOpen(open => {
      if (!open && audioRef.current) audioRef.current.play().catch(() => {}); // Play sound, ignore errors
      return !open;
    });
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages(p => [...p, userMessage]);
    setInput("");
    setLoading(true);
    const sessionId = localStorage.getItem("jacob-session-id") || crypto.randomUUID();
    localStorage.setItem("jacob-session-id", sessionId);
    try {
      const res = await fetch(`${apiBase}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, message: userMessage }),
      });
      if (!res.ok) throw new Error("Network response not ok");
      const data = await res.json();
      const botMessage = { role: "assistant", content: data.reply };
      setMessages(p => [...p, botMessage]);
    } catch (error) {
      setMessages(p => [...p, { role: "assistant", content: "Oops! Something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const endChat = () => {
    localStorage.removeItem("jacob-session-id");
    setMessages([]);
    setIsOpen(false);
  };

  const handleLeadFormSubmit = async (formData) => {
    setLoading(true);
    try {
      const res = await fetch(`${apiBase}/api/send-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to send lead information.");
      const data = await res.json();
      setMessages(p => {
        const newMessages = p.filter(msg => msg.content !== "FORM_TRIGGER_SIGNAL");
        return [...newMessages, { role: "assistant", content: data.reply }];
      });
    } catch (error) {
      setMessages(p => [...p, { role: "assistant", content: "Sorry, there was an error submitting your information. Please try again or contact us directly." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed z-[9999] bottom-4 right-4 sm:bottom-6 sm:right-6">
      <audio ref={audioRef} src={chatSound} preload="auto" />

      {/* ===> UPGRADE: The captivating, animated, and cycling hint bubble */}
      <AnimatePresence>
        {showHint && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: [0, -5, 0], scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ 
              duration: 0.3, 
              y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="absolute bottom-full right-0 mb-3 w-52 bg-gradient-to-br from-purple-800 via-blue-800 to-purple-900 text-white p-3 rounded-xl shadow-2xl shadow-purple-500/20 border border-white/20"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-300 flex-shrink-0" />
              <p className="text-sm font-semibold leading-tight">Got a question? Ask Jacob!</p>
            </div>
            <div className="absolute right-4 -bottom-2 w-4 h-4 bg-purple-900 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleChat}
        className="w-16 h-16 rounded-full shadow-xl bg-gradient-to-tr from-purple-600 via-blue-500 to-yellow-400 flex items-center justify-center"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Bot className="text-white w-8 h-8" />
      </motion.button>

      {/* ===> UPGRADE: The stunning, fully responsive chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="absolute bottom-[calc(100%+1rem)] right-0 w-[calc(100vw-2rem)] max-w-md sm:w-96 h-[80vh] max-h-[600px] bg-gray-50 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-900 via-blue-800 to-yellow-700 text-white shadow-md">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <h2 className="text-lg font-bold">Ask Jacob</h2>
              </div>
              <button
                onClick={endChat}
                aria-label="End Chat"
                className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-colors"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>

            {/* Chat History Area */}
            <div className="flex-1 p-4 flex flex-col gap-y-6 overflow-y-auto">
              {messages.map((msg, i) => (
                msg.role === "assistant" && msg.content === "FORM_TRIGGER_SIGNAL" ? (
                  <ChatLeadCaptureForm key={i} onSubmit={handleLeadFormSubmit} />
                ) : (
                  <div key={i} className={`flex items-end gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    {/* Avatars */}
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === "user" ? "bg-blue-600" : "bg-purple-800"}`}>
                      {msg.role === "user" ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-yellow-300" />}
                    </div>

                    {/* Message Bubble */}
                    <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 shadow-md text-sm sm:text-base ${msg.role === "user" ? "bg-blue-600 text-white rounded-br-lg" : "bg-white text-gray-800 rounded-bl-lg"}`}>
                      <ReactMarkdown
                        components={{
                          p: ({ node, ...props }) => <p className="mb-1 last:mb-0" {...props} />,
                          strong: ({ node, ...props }) => <strong {...props} />,
                          ul: ({ node, ...props }) => <ul className="list-disc pl-5 my-2 space-y-1" {...props} />,
                          a: ({ node, ...props }) => <a className={`font-bold hover:underline ${msg.role === "user" ? "text-yellow-300" : "text-purple-700"}`} {...props} />,
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                )
              ))}
              {loading && <TypingIndicator />}
              <div ref={chatEndRef} />
            </div>

            {/* Input Field Area */}
            <div className="flex-shrink-0 p-3 border-t bg-white">
              <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex items-center gap-3">
                <textarea
                  rows="1"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="flex-1 resize-none px-4 py-2 bg-slate-100 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm sm:text-base"
                  placeholder="Ask us anything..."
                  aria-label="Chat input"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-700 to-blue-600 text-white hover:scale-105 active:scale-95 transition-transform disabled:opacity-50 disabled:scale-100"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}