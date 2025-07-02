import express from "express";
import axios from "axios";
import crypto from "crypto"; // Using crypto for modern UUID generation
const router = express.Router();

// Import the FULL enriched data objects. This is crucial for the new prompt.
import {
  brandPersona,
  about,
  services,
  pricing,
  promo,
  contact,
  siteLinks,
  addonServices,
  generalFaqs
} from "./businessData.js";

const sessionMemory = new Map();
const SESSION_TIMEOUT_MS = 1000 * 60 * 30; // 30 mins of inactivity

// This Google Analytics function is fine as is.
async function logToGA4({ sessionId, userInput }) {
  const GA_MEASUREMENT_ID = "G-J9FY6BCYT4";
  const GA_API_SECRET = "9MB8YB6lS5OjC3BhKGOpY";
  try {
    await axios.post(
      `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${GA_API_SECRET}`,
      {
        client_id: sessionId,
        events: [
          {
            name: "user_message",
            params: {
              session_id: sessionId,
              user_input: userInput,
              timestamp: new Date().toISOString(),
            },
          },
        ],
      }
    );
  } catch (err) {
    // console.error("GA4 logging failed:", err.message);
  }
}

/**
 * ** THE 2025 UPGRADE: buildSystemPrompt() **
 * This is the new "brain" of Jacob, completely redesigned for natural, intelligent conversation.
 * It teaches Jacob *how* to think and behave, not just what to say.
 */
function buildSystemPrompt() {
  // We use the full JSON objects to give the AI deep context.
  return {
    role: "system",
    content: `
You are "Jacob," an expert digital marketing consultant and friendly assistant for First and Last Marketing. Your goal is to be indistinguishable from a top-performing, human team member. Your personality is the key: professional, humble, trustworthy, and incredibly helpful.

---
### 👑 YOUR GUIDING PRINCIPLES (Non-Negotiable) 👑

**1. THE LAW OF CONCISENESS: This is your most important rule.**
   - You **MUST** keep your answers short and to the point (1-3 sentences).
   - Never overwhelm the user with information they didn't ask for. Your default is to be brief.

**2. THE CONSULTATIVE METHOD: Listen -> Clarify -> Recommend.**
   - **Listen:** First, understand the user's true intent. What problem are they trying to solve?
   - **Clarify:** If a query is vague (e.g., "tell me about websites"), you **MUST** ask a clarifying question.
     - Good Example: "Of course. To point you in the right direction, are you looking to build a brand new site, or improve an existing one?"
     - Bad Example: Listing all our website packages.
   - **Recommend:** Only after you understand their need, provide a **single, concise** recommendation.

**3. THE LAYERED INFORMATION STRATEGY: Give information in small, digestible pieces.**
   - Start with a high-level summary or benefit.
   - **DO NOT** list all features, prices, or details at once.
   - Wait for the user to ask for more details ("Tell me more," "What features does that include?").
   - This makes the conversation feel natural, not like a data dump.

**4. THE HUMAN TOUCH: Handle simple social interactions naturally.**
   - If a user says "hello" or "thanks," respond politely and briefly.
   - Example: "Hello! How can I help you today?" or "You're very welcome! Was there anything else?"
   - This makes you feel like a real person, not a cold machine.

**5. THE FORM TRIGGER: Your tool for conversion.**
   - When a user shows clear intent to buy ("I want that," "Let's do it," "I'm ready to start"), or agrees to a quote, you MUST respond with the exact text: \`FORM_TRIGGER_SIGNAL\` and nothing else.
   - This is the critical handoff to our team.

---
### 🧠 YOUR KNOWLEDGE BASE (Your Single Source of Truth) 🧠
You must base all your answers on this data. Use the 'salesAngle' and 'benefits' to frame your recommendations.

**// Persona & Voice Guidelines**
${JSON.stringify(brandPersona, null, 2)}

**// Company Background & Mission**
${JSON.stringify(about, null, 2)}

**// Core Service Offerings (Your Main Catalog)**
${JSON.stringify(services, null, 2)}

**// Pricing Packages (Emphasize 'bestFor' and 'salesAngle')**
${JSON.stringify(pricing, null, 2)}

**// Add-On Services (Explain setup vs. monthly fees clearly)**
${JSON.stringify(addonServices, null, 2)}

**// Current Promotional Offer (Use for urgency)**
${JSON.stringify(promo, null, 2)}

**// General FAQs & Contact Info**
${JSON.stringify(generalFaqs, null, 2)}
${JSON.stringify(contact, null, 2)}
---

Now, begin the conversation. Greet the user and ask how you can help.
    `.trim(),
  };
}


/**
 * Detects specific, high-priority user intent to ensure critical actions are taken.
 * This acts as a reliable safety net for lead capture.
 * @param {string} input - The user's message.
 * @returns {string|null} - The detected intent name or null.
 */
const detectIntent = (input) => {
  const lowered = input.toLowerCase().trim().replace(/[.,!?'"]/g, ''); // Clean the input
  const leadCaptureKeywords = [
    "im ready", "i want this", "lets get started", "sign me up", "i am interested",
    "lets do it", "send me the form", "i need the form", "project kickoff",
    "fill out a form", "start a project", "claim for 100", "i want to buy", "lets proceed"
  ];

  if (leadCaptureKeywords.some(p => lowered.includes(p))) {
    return "lead_capture";
  }

  return null;
};


/**
 * The main chat API endpoint.
 */
router.post("/", async (req, res) => {
  const { message, sessionId } = req.body;
  if (!message || !message.content) {
    return res.status(400).json({ error: "Message content is missing." });
  }

  // Manage session history
  const sessionKey = sessionId || crypto.randomUUID();
  const session = sessionMemory.get(sessionKey) || { messages: [], lastActive: Date.now() };
  session.messages.push(message);

  logToGA4({ sessionId: sessionKey, userInput: message.content });

  // Safety Net: Check for the high-priority lead capture intent first.
  const intent = detectIntent(message.content);
  if (intent === "lead_capture") {
    // Directly trigger the form, bypassing the AI for reliability.
    return res.json({ reply: "FORM_TRIGGER_SIGNAL" });
  }

  // If no high-priority intent, proceed with the intelligent AI response.
  const systemPrompt = buildSystemPrompt();

  // We cap the history to keep the payload efficient and focused.
  const maxHistory = 10;
  const recentMessages = session.messages.slice(-maxHistory);
  const payloadMessages = [systemPrompt, ...recentMessages];

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct:free", // As requested, using this model
        messages: payloadMessages,
        // Adding parameters to guide the model towards better, more concise behavior
        temperature: 0.5, // Lower temperature makes it more focused and less likely to ramble.
        max_tokens: 150,  // Hard limit on response length to enforce conciseness.
        "response_format": { "type": "text" }, // Explicitly ask for text format.
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://www.firstandlastmarketing.com",
          "X-Title": "First and Last Marketing",
        },
      }
    );

    let reply = response.data.choices[0].message.content;

    // Post-processing check: If the AI itself generates the trigger signal, ensure it's clean.
    if (reply.includes("FORM_TRIGGER_SIGNAL")) {
      reply = "FORM_TRIGGER_SIGNAL";
    }

    // Add the AI's response to the session history
    session.messages.push({ role: "assistant", content: reply });
    sessionMemory.set(sessionKey, { ...session, lastActive: Date.now() });

    res.json({ reply });
  } catch (error) {
    console.error("Jacob AI Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Jacob is currently unavailable. Please try again shortly." });
  }
});

/**
 * Memory Cleaner: Periodically removes old, inactive chat sessions.
 */
setInterval(() => {
  const now = Date.now();
  let cleanedCount = 0;
  for (const [key, session] of sessionMemory.entries()) {
    if (now - session.lastActive > SESSION_TIMEOUT_MS) {
      sessionMemory.delete(key);
      cleanedCount++;
    }
  }
  if (cleanedCount > 0) {
    // console.log(`🧹 Cleaned ${cleanedCount} expired chat sessions from memory.`);
  }
}, 1000 * 60 * 15); // Runs every 15 minutes

export default router;