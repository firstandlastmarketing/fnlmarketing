// /src/Components/ai/Message.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User, CheckCircle, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

// Custom renderers for Markdown to make it look top-notch
const markdownComponents = {
  a: ({ node, ...props }) => (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 font-bold text-yellow-700 underline hover:text-yellow-600 transition-colors"
    >
      <span>{props.children}</span>
      <ExternalLink className="w-4 h-4" />
    </a>
  ),
  ul: ({ node, ...props }) => <ul className="list-none pl-2 space-y-2" {...props} />,
  li: ({ node, ...props }) => (
    <li className="flex items-start gap-3">
      <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
      <span>{props.children}</span>
    </li>
  ),
};

const Message = ({ msg }) => {
  const isUser = msg.role === 'user';

  const bubbleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };
  
  return (
    <motion.div
      variants={bubbleVariants}
      className={`flex items-end gap-2.5 w-full ${isUser ? 'flex-row-reverse' : ''}`}
    >
      <div
        className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
          isUser ? 'bg-blue-600' : 'bg-purple-800'
        }`}
      >
        {isUser ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-yellow-300" />}
      </div>
      <div
        className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-4 py-3 shadow-md text-base leading-relaxed ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-none'
            : 'bg-white text-gray-800 rounded-bl-none'
        }break-words`}
      >
        <ReactMarkdown components={markdownComponents}>{msg.content || ''}</ReactMarkdown>
      </div>
    </motion.div>
  );
};

export default Message;