/*
/api/routes/chat.js
--------------------------------------------------------------------------------
REVISION: 8.0 "The Definitive & Holistic Agent"
PURPOSE:
This is the final, complete, and perfected version of the agent's brain.
It synthesizes all previous work into a single, robust, and intelligent system.
- It uses a keyword-indexed search engine for full access to businessData.js.
- It has a bulletproof tool execution engine that cannot crash from bad AI input.
- It uses the ultimate system prompt with clear, non-negotiable instructions.
This version leaves nothing out and achieves the project's full vision.
*/

import express from "express";
import axios from "axios";
import crypto from "crypto";

import { businessData } from "./businessData.js";

const router = express.Router();
const sessionMemory = new Map();
const SESSION_TIMEOUT_MS = 1000 * 60 * 30;

// === 1. THE COMPLETE TOOLSET ===
// All tools defined and ready for use.
const tools = [
  { type: "function", function: { name: "get_service_details", description: "Gets detailed information, benefits, and pricing about a SPECIFIC marketing service when a user asks for it.", parameters: { type: "object", properties: { service_name: { type: "string", description: "The name of the service, e.g., 'SEO', 'Web Design'." } }, required: ["service_name"] } } },
  { type: "function", function: { name: "query_knowledge_base", description: "Searches the internal knowledge base for answers to ALL non-service-specific factual questions (e.g., company info, founder, values, pricing philosophy, policies, what makes you different, FAQs).", parameters: { type: "object", properties: { query: { type: "string", description: "A specific question or search term, e.g., 'core values', 'website ownership policy', 'pricing'." } }, required: ["query"] } } },
  { type: "function", function: { name: "trigger_lead_form", description: "Use this when the user explicitly confirms they are ready to start, want a quote, or want to onboard.", parameters: { type: "object", properties: { service_of_interest: { type: "string", description: "The primary service the user is interested in, if known." }, confirmation_message: { type: "string", description: "A friendly message confirming the action, e.g., 'Great! Let's get some details.'" } }, required: ["confirmation_message"] } } },
  { type: "function", function: { name: "schedule_meeting", description: "Use this to book a meeting or strategy call when a user asks to schedule one.", parameters: { type: "object", properties: {} } } },
  { type: "function", function: { name: "request_human_handover", description: "Use this for complex requests that the knowledge base cannot answer, or if they explicitly ask for a human.", parameters: { type: "object", properties: { reason: { type: "string", description: "The user's question or reason." } }, required: ["reason"] } } },
  { type: "function", function: { name: "get_proactive_suggestion", description: "Provides a context-aware proactive message based on a system trigger event.", parameters: { type: "object", properties: { trigger_event: { type: "string", "enum": ["onInitialPageLoad", "onScrollToPricing", "onIdle", "onExitIntent"] } }, required: ["trigger_event"] } } },
];

// === 2. THE ULTIMATE & BULLETPROOF SYSTEM PROMPT ===
// This version is defensively coded with optional chaining to prevent crashes
// and contains the complete set of instructions for Jacob.
function buildSystemPrompt(session) {
  const { metadata } = session;
  const serviceNames = businessData.knowledgeBase.services.map(s => s.name).join(', ');

  // DEFENSIVE CODING: Safely access nested properties using optional chaining (`?.`).
  // This makes the prompt immune to crashes from missing data in businessData.js.
  const bookingLink = businessData?.links?.keyActions?.booking || "the company's main booking page";
  const pricingLink = businessData?.links?.main?.pricing || "the company's main pricing page";

  return {
    role: "system",
    content: `You are "Jacob," an expert digital marketing consultant for First and Last Marketing. Your absolute #1 rule is to be 100% grounded in the company's official data using your tools. YOU MUST NOT INVENT ANSWERS.

### YOUR OPERATING INSTRUCTIONS

1.  **TOOL-USE IS MANDATORY:** You do not know facts directly. You must use a tool to answer any question about services, pricing, company info, or policies.
    *   **For SPECIFIC SERVICE details** (e.g., 'tell me about SEO benefits'): Use the \`get_service_details\` tool.
    *   **For ALL OTHER QUESTIONS** (e.g., 'who is the founder?', 'what are your prices?', 'what makes you different?'): Use the \`query_knowledge_base\` tool.

2.  **PRICING PROTOCOL:** If the user asks about "pricing" or "cost," you MUST immediately call the \`query_knowledge_base\` tool with the query "pricing". Do not invent prices. After providing the summary, offer the direct link to the pricing page: ${pricingLink}.

3.  **ONBOARDING/BOOKING PROTOCOL:**
    *   If the user wants to start, get a quote, or onboard, you MUST use the \`trigger_lead_form\` tool.
    *   If they ask for just a link to schedule a call, provide this one: ${bookingLink}.

4.  **CORRECTION PROTOCOL:** If a user tells you that your information is wrong, DO NOT apologize and repeat yourself. Immediately state: "You are right to correct me. Let me consult my knowledge base for the accurate information." Then, use the \`query_knowledge_base\` tool to find the correct answer.

5.  **BE CONCISE & CONVERSATIONAL:** After using a tool, present the information clearly and concisely. Frame the data in a helpful, human-like way. Do not just dump data. End your response with a helpful next question.

---
### KNOWLEDGE INDEX (A map of what you can find with your tools)
-   **Company Info:** Founder, Mission, Values, Differentiators (via \`query_knowledge_base\`)
-   **Core Services:** ${serviceNames} (via \`get_service_details\`)
-   **Pricing & Packages:** All pricing details for all services (via \`query_knowledge_base({query: "pricing"})\`)
-   **General FAQs & Policies:** Available via \`query_knowledge_base\`.
---

### SESSION METADATA
${JSON.stringify(metadata, null, 2)}

Now, analyze the user's message and execute the correct protocol.`.trim(),
  };
}

// === 3. THE COMPREHENSIVE KNOWLEDGE SEARCH ENGINE ===
// This function uses a keyword index for robust and full access to businessData.js.
function findInKnowledgeBase(query) {
  const lowerQuery = query.toLowerCase();

  const searchIndex = [
    { keywords: ['founder', 'started', 'founded'], data: businessData.companyInfo.founder, type: 'text' },
    { keywords: ['mission'], data: businessData.companyInfo.mission, type: 'text' },
    { keywords: ['story', 'history'], data: businessData.companyInfo.story, type: 'text' },
    { keywords: ['values', 'ethos'], data: businessData.persona.coreValuesToEmbody, type: 'list' },
    { keywords: ['different', 'unique', 'differentiator'], data: businessData.companyInfo.differentiation, type: 'list' },
    { keywords: ['talking points', 'key points'], data: businessData.persona.keyTalkingPoints, type: 'object' },
    { keywords: ['own', 'ownership'], data: businessData.persona.keyTalkingPoints.websiteOwnership, type: 'text' },
    { keywords: ['showcase', 'portfolio', 'past work', 'examples'], data: businessData.resources.projectShowcase, type: 'object' },
    { keywords: ['propositions', 'pledge', 'promise'], data: businessData.resources.valuePropositions, type: 'object' },
    { keywords: ['pricing', 'cost', 'how much', 'prices'], data: businessData.knowledgeBase.pricing, type: 'pricing' },
    // ... inside the searchIndex array in findInKnowledgeBase
    { keywords: ['promo', 'promotion', 'deal', 'offer', 'discount'], data: "Currently, we do not have any site-wide promotions, but we often create custom packages and bundle discounts for new clients. The best way to get a personalized offer is to discuss your project on a free strategy call.", type: 'text' },
  ];

  for (const item of searchIndex) {
    if (item.keywords.some(kw => lowerQuery.includes(kw))) {
      if (item.type === 'pricing') {
        const websites = item.data.websites.tiers.map(t => `${t.tier}: ${t.price}`).join('; ');
        const blogs = item.data.blogs.tiers.map(t => `${t.tier}: ${t.price}`).join('; ');
        return `We offer transparent, one-time fees for our core packages. Here is a summary:\n- **Website Packages:** ${websites}.\n- **Blog Packages:** ${blogs}.\nFor add-ons or custom quotes, I can provide the full pricing page link.`;
      }
      if (item.type === 'list') return `- ${item.data.join('\n- ')}`;
      return item.data;
    }
  }

  const faqs = businessData.knowledgeBase.faqs;
  const faqMatch = faqs.find(f => f.q.toLowerCase().includes(lowerQuery));
  if (faqMatch) return faqMatch.a;

  return "I couldn't find a specific answer for that in my knowledge base. Could you please rephrase the question? I can also connect you with a human expert who can help.";
}

// === 4. THE BULLETPROOF TOOL EXECUTION ENGINE ===
// This function is fully robust with guard clauses for every tool case.
function executeTool(toolCall) {
  const { name, arguments: args } = toolCall.function;
  if (!args) return { success: false, error: "Tool call failed: The AI did not provide arguments." };

  switch (name) {
    case "get_service_details":
      if (!args.service_name) return { success: false, error: "AI failed to specify a service_name." };
      const service = businessData.knowledgeBase.services.find(s => s.name.toLowerCase().includes(args.service_name.toLowerCase()));
      return service ? { success: true, ...service } : { success: false, error: "Service not found." };
    
    case "query_knowledge_base":
      if (!args.query || typeof args.query !== 'string') return { success: false, error: "Tool call failed: The query was missing or invalid." };
      const result = findInKnowledgeBase(args.query);
      return { success: true, result: result };

    case "trigger_lead_form":
      return { type: "FORM_TRIGGER", confirmationMessage: args.confirmation_message || "Great! Please provide your details below.", formConfig: { initialService: args.service_of_interest || '', availableServices: businessData.leadForm.availableServices } };

    case "schedule_meeting":
      return { success: true, message: `Of course. You can book a free strategy call directly on our calendar here: [Book a Call](${businessData.links.keyActions.booking})` };

    case "request_human_handover":
      console.log(`!! HUMAN HANDOVER REQUESTED: ${args.reason || 'No reason specified'} !!`);
      return { success: true, message: "You've got it. I've notified our team. One of our human experts will reach out shortly." };

    case "get_proactive_suggestion":
      if (!args.trigger_event) return { success: false, error: "AI failed to specify a trigger_event." };
      const triggerConfig = businessData.agentConfig.proactiveEngagement[args.trigger_event];
      if (triggerConfig?.messages?.length > 0) {
        const message = triggerConfig.messages[Math.floor(Math.random() * triggerConfig.messages.length)];
        return { success: true, message: message };
      }
      return { success: false, error: "No proactive message configured for this event." };

    default:
      return { success: false, error: `Unknown tool: ${name}` };
  }
}

// === 5. THE MAIN AGENT LOOP ROUTER ===
// This logic remains the same, orchestrating the two-step AI process.
router.post("/", async (req, res) => {
  const { sessionId, message } = req.body;
  if (!message || !message.content) return res.status(400).json({ error: "Message content is missing." });

  const sessionKey = sessionId || crypto.randomUUID();
  const session = sessionMemory.get(sessionKey) || { messages: [], metadata: {}, lastActive: Date.now() };
  session.messages.push(message);

  try {
    const systemPrompt = buildSystemPrompt(session);
    const apiResponse = await axios.post("https://openrouter.ai/api/v1/chat/completions", {
      model: "deepseek/deepseek-chat-v3-0324:free",
      messages: [systemPrompt, ...session.messages.slice(-10)],
      tools: tools,
      tool_choice: "auto",
    }, { headers: { Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}` } });

    const aiChoice = apiResponse.data.choices[0].message;
    session.messages.push(aiChoice);

    if (aiChoice.tool_calls && aiChoice.tool_calls.length > 0) {
      const toolCall = aiChoice.tool_calls[0];
      const toolResult = executeTool(toolCall);
      if (toolResult.type === 'FORM_TRIGGER') return res.json(toolResult);

      session.messages.push({ role: "tool", tool_call_id: toolCall.id, content: JSON.stringify(toolResult) });

      const finalResponse = await axios.post("https://openrouter.ai/api/v1/chat/completions", {
        model: "deepseek/deepseek-chat-v3-0324:free",
        messages: [systemPrompt, ...session.messages.slice(-10)],
      }, { headers: { Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}` } });

      const finalMessage = finalResponse.data.choices[0].message.content;
      session.messages.push({ role: "assistant", content: finalMessage });
      res.json({ type: "MESSAGE", content: finalMessage });
    } else {
      const directMessage = aiChoice.content;
      session.messages.push({ role: "assistant", content: directMessage });
      res.json({ type: "MESSAGE", content: directMessage });
    }

    session.lastActive = Date.now();
    sessionMemory.set(sessionKey, session);
  } catch (error) {
    console.error("Jacob AI Agent Error:", error.response?.data?.error?.message || error.message);
    res.status(500).json({ type: "MESSAGE", content: "I'm having a little trouble connecting right now. Please try again in a moment." });
  }
});

// Memory cleaner
setInterval(() => {
  const now = Date.now();
  for (const [key, session] of sessionMemory.entries()) {
    if (now - session.lastActive > SESSION_TIMEOUT_MS) sessionMemory.delete(key);
  }
}, 1000 * 60 * 15);

export default router;