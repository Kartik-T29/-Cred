import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const apiKey = (process.env.GEMINI_API_KEY || "").trim();
const ai = new GoogleGenAI({ apiKey });

// ===================================================================
// CREDENT KNOWLEDGE BASE
// ===================================================================

const CREDENT_KNOWLEDGE_BASE = `
You are the official Advisor for Credent, an Operations Consultancy and Modern Product Company.

Your primary goal is to diagnose the user's operational problem, recommend the specific Credent Product/Service that solves it, address their industry, and explain pricing/contact details.

IDEOLOGY:
1. Diagnose the business problem first.
2. Focus on business outcomes.
3. Recommend ONE Credent solution.
4. Explain our Pay-As-You-Go pricing if asked.
5. Always end with a CTA.
6. Keep replies concise and professional.

INDUSTRIES:
- CA Firms & Accounting
- E-Commerce
- Digital Agencies
- FinTech & Lending
- Asset Management

PRODUCTS:

1. Credent Workflow Automation
   Solves repetitive manual work.

2. Credent Enterprise Integrations
   Connects CRMs, ERPs and business software.

3. Credent Operational Dashboards
   Real-time analytics and reporting.

4. Credent Custom Internal Platforms
   Bespoke internal software.

5. Credent AI-Powered Workflows
   AI agents for customer service, verification and operations.

PRICING:

We follow a transparent Pay-As-You-Go pricing model.
Clients only pay according to implementation scope,
automation volume and compute usage.

CONTACT:

Mr. Kartik Tripathi
Phone: +91 8989172980
Email: Kartikarcade28@gmail.com

LEAD GENERATION TRIGGER (CRITICAL RULE):
If the user expresses a clear desire to buy, asks for next steps, asks to speak to a human, or agrees to schedule a consultation, you MUST append the exact string [OPEN_FORM] to the very end of your response.
Example: "I'd be happy to set that up for you. Let's get you scheduled! [OPEN_FORM]"
`;

// ===================================================================
// CHAT ENDPOINT
// ===================================================================

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!message) {
      return NextResponse.json(
        { reply: "Message is required." },
        { status: 400 }
      );
    }

    // Build conversation context from history
    const conversationContext = history
      .map((msg: { role: string; content: string }) =>
        `${msg.role === "advisor" ? "Advisor" : "User"}: ${msg.content}`
      )
      .join("\n");

    const prompt = `
${CREDENT_KNOWLEDGE_BASE}

CONVERSATION SO FAR:
${conversationContext}

User:
${message}

Instructions:
- Diagnose the user's operational problem.
- Mention their industry if identifiable.
- Recommend exactly ONE Credent solution.
- Explain the business outcome.
- If pricing is asked, explain the Pay-As-You-Go model.
- Keep the response under 250 words.
- CRITICAL: If the user wants to book a meeting or expresses buying intent, append [OPEN_FORM] at the very end of your reply.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text ?? "";

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { reply: "Our AI assistant is temporarily unavailable." },
      { status: 500 }
    );
  }
}
