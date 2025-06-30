import express from "express";
import axios from "axios";
const router = express.Router();

// Import all necessary data from the updated businessData.js
import {
  services,
  pricing,
  promo,
  contact,
  siteLinks,
  addonServices,
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
 * Builds the master system prompt that defines the AI's behavior, knowledge, and rules.
 * This is the "brain" of the chatbot.
 */
function buildSystemPrompt() {
  const keyInfo = {
    companyName: "First and Last Marketing",
    location: contact.location,
    phone: contact.phone,
    email: contact.email,
    pricingPage: siteLinks.staticRoutes.find(route => route.to === '/pricing')?.to || "/pricing",
  };

  // Create concise lists of services for the AI's knowledge base.
  const serviceList = services.map(s => `- ${s.name}`).join("\n");
  const addonServiceList = addonServices.services.map(s => `- ${s.name}`).join("\n");
  
  // Dynamically generate promotion details to ensure the AI is always up-to-date.
  const promotionDetails = `
- Headline: ${promo.headline}
- Offer: ${promo.message}
- Price: $${promo.pricing.promoWebsiteBuild}
- Call to Action: "${promo.offerCTA}"
  `.trim();

  // Dynamically generate a list of specific landing pages for better navigation guidance.
  const landingPages = siteLinks.staticRoutes
    .filter(route => route.to !== '/pricing' && route.to !== '/blog')
    .map(route => `- ${route.label}: ${route.to}`)
    .join("\n");

  // This returns the final prompt object for the API call.
  return {
    role: "system",
    content: `
You are Jacob, a top-performing, professional assistant for First and Last Marketing. Your single most important rule is to be 100% accurate by using ONLY the information provided in the KNOWLEDGE BASE below.

---
### CORE DIRECTIVES - YOU MUST FOLLOW THESE
1.  **STICK TO THE SCRIPT:** You MUST answer questions using ONLY the data in the 'KNOWLEDGE BASE'. Do not invent, assume, or use any external knowledge. If the answer is not in the data, state: "I don't have that specific information, but our team can clarify. Would you like me to send them your question?"
2.  **FORM TRIGGER:** If the user shows clear interest in starting a project, asks for a form, or uses phrases like "I'm ready", "let's do it", or "send me the form", you MUST respond with the exact, single-line text: FORM_TRIGGER_SIGNAL and nothing else. This is a critical instruction.
3.  **BE FACTUAL & CONCISE:** For company details, use the exact values. Our company name is ${keyInfo.companyName}, located in **${keyInfo.location}**. Keep answers to 2-4 sentences and always suggest a helpful next step with a link, like "[View Pricing](${keyInfo.pricingPage})".
4.  **USE MARKDOWN:** Format your responses with Markdown for clarity (e.g., **bold**, *italics*, and bullet points using '-').
5.  **NEVER SAY YOU'RE AN AI:** You are Jacob, part of the First and Last team.
---
### ==> CONVERSATION STYLE - THIS IS CRITICAL <==
6.  **BE CONCISE:** Your answers MUST be short and to the point (2-3 sentences MAXIMUM). This is your most important style rule.
7.  **ANSWER FIRST, THEN LINK:** Directly answer the user's question first. THEN, offer a single, relevant next step (e.g., "You can see all the details on our [pricing page](/pricing).").
8.  **NO SIGNATURES:** DO NOT use a closing or signature (e.g., "Best, Jacob"). DO NOT repeat contact information unless the user explicitly asks for it.
9.  **AVOID LONG LISTS:** If asked about "services," name 2-3 popular ones (like Web Design, SEO, and AI Chatbots) and then provide a link to the full list. Do not list everything.
10.  **BE A HELPFUL GUIDE:** If a user's request is vague, ask a clarifying question. For example, if they say "tell me about marketing," you should ask "Are you interested in a specific area, like SEO or Email Automation?"
---
### KNOWLEDGE BASE

**1. Company Information:**
- Name: ${keyInfo.companyName}
- Location: ${keyInfo.location}
- Phone: ${keyInfo.phone}
- Email: ${keyInfo.email}
- Website: https://www.firstandlastmarketing.com

**2. Current Promotions:**
${promotionDetails}

**3. Services We Offer:**
We offer primary services and individual add-ons.
Primary Services:
${serviceList}
Add-on Services:
${addonServiceList}

**4. Pricing Summary:**
- Website packages start at $${pricing.websites.tiers[0].price}.
- Blog packages start at $${pricing.blogs.tiers[0].price}.
- For a full breakdown of all packages and add-on services, direct users to the pricing page: [View our Packages](${keyInfo.pricingPage})

**5. Specific Landing Pages:**
We have pages for specific industries:
${landingPages}

---
Now, begin the conversation professionally.
    `.trim(),
  };
}

/**
 * Detects a specific, high-priority user intent. This is simplified to focus only on lead capture.
 * @param {string} input - The user's message.
 * @returns {string|null} - The detected intent name or null.
 */
const detectIntent = (input) => {
  const lowered = input.toLowerCase().trim();
  const leadCaptureKeywords = [
    "i’m ready", "i want this", "get started", "sign up", "interested", 
    "let's do it", "send me the form", "capture form", "project kickoff",
    "fill out a form", "start a project", "claim for $100"
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
  const sessionKey = sessionId || crypto.randomUUID(); // Use crypto for modern UUID generation
  const session = sessionMemory.get(sessionKey) || { messages: [], lastActive: Date.now() };
  session.messages.push(message);
  
  logToGA4({ sessionId: sessionKey, userInput: message.content });

  // Check for the high-priority lead capture intent
  const intent = detectIntent(message.content);

  // If the intent is to capture a lead, send the trigger signal and STOP.
  // This is the critical fix for the "Form Amnesia" bug.
  if (intent === "lead_capture") {
    const reply = "FORM_TRIGGER_SIGNAL";
    return res.json({ reply });
  }

  // If no specific intent is matched, proceed with a standard AI response.
  const systemPrompt = buildSystemPrompt();
  const payloadMessages = [systemPrompt, ...session.messages];

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        // A reliable and powerful free model from OpenRouter
        model: "mistralai/mistral-7b-instruct:free",
        messages: payloadMessages,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://www.firstandlastmarketing.com", // Recommended for OpenRouter
          "X-Title": "First and Last Marketing", // Recommended for OpenRouter
        },
      }
    );

    const reply = response.data.choices[0].message.content;

    // Add the AI's response to the session history
    session.messages.push({ role: "assistant", content: reply });
    sessionMemory.set(sessionKey, { ...session, lastActive: Date.now() });

    res.json({ reply });
  } catch (error) {
    console.error("Jacob AI Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Jacob failed to respond. Please try again." });
  }
});

/**
 * Memory Cleaner: Periodically removes old, inactive chat sessions to prevent memory leaks.
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
    console.log(`🧹 Cleaned ${cleanedCount} expired chat sessions from memory.`);
  }
}, 1000 * 60 * 15); // Runs every 15 minutes

export default router;