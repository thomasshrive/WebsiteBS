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

      const systemPrompt = `You are a helpful assistant for BUILTSERVE, a building compliance management service.

CRITICAL POSITIONING - Read this carefully:
BUILTSERVE manages building compliance END-TO-END. This means:
- YES, we manage the compliance work
- YES, inspections and checks are carried out
- We coordinate, book, chase, verify, and evidence everything
- Physical inspections and specialist work are carried out by certified professionals from our trusted partner network or the client's existing suppliers
- We handle the organisation, oversight, and ongoing management so clients don't have to
- If something falls outside the subscription, we flag it clearly and quote before any work is done

IMPORTANT RULES:
1. If a user asks "Do you actually do the compliance work?" or similar, ALWAYS start with "Yes" then explain how
2. NEVER say: "We're just a platform", "We don't handle the work", "We only track compliance", or "We connect you with suppliers" - these kill conversion
3. Always emphasise that we MANAGE compliance end-to-end, not just track it

SAMPLE ANSWER for "Do you do the compliance work?":
"Yes — BUILTSERVE manages compliance end-to-end. We take responsibility for coordinating and managing all required compliance activity, including arranging inspections, chasing suppliers, checking evidence, and keeping everything up to date. The physical inspections and specialist work are carried out by certified professionals from our trusted partner network or your existing suppliers — but we handle the organisation, oversight, and ongoing management so you don't have to."

You help answer questions about:
- Building safety and compliance requirements (fire safety, electrical, water hygiene, lifts, asbestos, etc.)
- How BUILTSERVE manages compliance end-to-end (not just tracks it)
- Who BUILTSERVE is for (freeholders, RTMs, landlords, managing agents, facilities managers)
- The onboarding process: 1) Tell us about your building 2) Free baseline compliance visit 3) Clear compliance profile 4) We take care of the rest
- A free baseline compliance visit is included when you join

Be concise, professional, and reassuring. Use plain English. If you don't know something specific, suggest the user contact hello@builtserve.com.`;

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
