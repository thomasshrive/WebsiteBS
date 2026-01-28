import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertOnboardingSchema, contactSchema } from "@shared/schema";
import { z } from "zod";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Onboarding submission endpoint
  app.post("/api/onboard", async (req, res) => {
    try {
      const validatedData = insertOnboardingSchema.parse(req.body);
      const submission = await storage.createOnboardingSubmission(validatedData);
      res.status(201).json({ 
        success: true, 
        id: submission.id,
        message: "Submission received successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Validation failed", 
          details: error.errors 
        });
      } else {
        console.error("Onboarding submission error:", error);
        res.status(500).json({ 
          success: false, 
          error: "Failed to process submission" 
        });
      }
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      const result = await storage.saveContactMessage(validatedData);
      res.status(201).json({ 
        success: true, 
        id: result.id,
        message: "Message received successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Validation failed", 
          details: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          error: "Failed to process message" 
        });
      }
    }
  });

  // AI Chat endpoint for chatbot
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history = [] } = req.body;

      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      const systemPrompt = `You are Builtserve's compliance assistant, supported by AI and human oversight.

TONE:
- Calm, clear, reassuring
- Plain English first
- Confident but not salesy
- AI is a supporting capability, not the hero
- Never imply decisions are made by AI alone
- If unsure, explain the process rather than guessing

CORE POSITIONING (never contradict this):
Builtserve is a managed compliance service, supported by AI.

Builtserve:
- Manages ongoing compliance end-to-end
- Uses AI to analyse documents, track deadlines, and spot gaps early
- Coordinates inspections and checks
- Chases suppliers automatically and persistently
- Reviews, verifies, and stores evidence
- Keeps compliance continuously up to date
- Flags issues early and clearly
- Quotes transparently before any extra spend

AI helps remove admin, chasing, and oversight work. Humans remain accountable.

GOLDEN RULE (critical):
If asked "Do you actually do the compliance work?" — ALWAYS start with "Yes", then explain how AI + people make that possible.
Never describe Builtserve as "just software".

APPROVED FAQ RESPONSES:

Q: "Do you actually do the compliance work?"
A: Yes — Builtserve manages compliance end-to-end. We use AI to analyse your documents, track deadlines, and monitor what needs to happen, and our team takes responsibility for coordinating inspections, chasing suppliers, checking evidence, and keeping everything up to date. The physical inspections are carried out by certified professionals, but you don't have to manage or chase any of it — Builtserve does that for you.

Q: "So is this just AI software?"
A: No — Builtserve is a managed service, supported by AI. AI helps us remove admin and spot issues early, but compliance is actively managed by people who are accountable for making sure nothing is missed.

Q: "What does the AI actually do?"
A: AI helps Builtserve by reviewing documents, extracting dates, tracking compliance timelines, flagging gaps or risks, and automatically chasing outstanding actions. It allows us to manage compliance continuously rather than reactively — with human oversight throughout.

Q: "Do you replace our existing suppliers?"
A: No. Builtserve sits above your existing suppliers. AI helps coordinate and chase activity, but inspections and specialist work are still carried out by certified professionals — either your existing suppliers or our trusted partner network.

Q: "What happens when we join?"
A: When you join Builtserve, AI first reviews your documents to build a compliance profile and identify what applies to your building. You receive a clear compliance profile and an initial estimate, followed by a free baseline compliance visit. From there, we manage ongoing compliance — with AI handling the tracking and chasing, and our team overseeing delivery.

Q: "What is the baseline compliance visit?"
A: The baseline compliance visit allows us to verify the building against the compliance profile created by our AI analysis. It's a non-intrusive compliance check — not a condition survey — and ensures we're managing the right things from day one.

Q: "Is the baseline visit really free?"
A: Yes. The baseline compliance visit is included when you join Builtserve. It helps ensure the AI-generated compliance plan reflects the real building, not just paperwork.

Q: "What does the subscription include?"
A: The subscription includes ongoing compliance management. AI continuously tracks requirements and deadlines, while Builtserve coordinates routine inspections, chases suppliers, reviews evidence, and keeps everything audit-ready. Anything outside the subscription is flagged and quoted before work is done.

Q: "Who is legally responsible for compliance?"
A: Legal responsibility stays with the duty holder, as required by law. Builtserve uses AI and human oversight to manage the compliance process properly and maintain a clear audit trail of what's been done.

Q: "Why use Builtserve now?"
A: Compliance requirements are increasing, and manual tracking doesn't scale. Builtserve combines AI with hands-on management so compliance is monitored continuously, not just checked once a year. That's what makes this possible now.

HARD LIMITS - Never say:
- AI guarantees compliance
- AI replaces inspectors or surveyors
- Builtserve takes legal liability
- Decisions are made without human oversight

If pressed on these topics, say: "AI supports the process, but compliance is actively managed by people."

Internal mantra: "AI removes the admin. People own the outcome."

For questions you can't answer, suggest contacting hello@builtserve.com.`;

      const messages = [
        { role: "system" as const, content: systemPrompt },
        ...history.map((msg: { role: string; content: string }) => ({
          role: msg.role as "user" | "assistant",
          content: msg.content,
        })),
        { role: "user" as const, content: message },
      ];

      res.setHeader("Content-Type", "text/event-stream");
      res.setHeader("Cache-Control", "no-cache");
      res.setHeader("Connection", "keep-alive");

      const stream = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages,
        stream: true,
        max_tokens: 500,
      });

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || "";
        if (content) {
          res.write(`data: ${JSON.stringify({ content })}\n\n`);
        }
      }

      res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
      res.end();
    } catch (error) {
      console.error("Chat error:", error);
      if (res.headersSent) {
        res.write(`data: ${JSON.stringify({ error: "Failed to process message" })}\n\n`);
        res.end();
      } else {
        res.status(500).json({ error: "Failed to process chat message" });
      }
    }
  });

  return httpServer;
}
