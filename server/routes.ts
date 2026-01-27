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
You help answer questions about:
- Building safety and compliance requirements (fire safety, electrical, water hygiene, lifts, asbestos, etc.)
- How BUILTSERVE helps manage compliance end-to-end
- Who BUILTSERVE is for (freeholders, RTMs, landlords, managing agents, facilities managers)
- The onboarding process and how to get started

Be concise, professional, and helpful. If you don't know something specific about BUILTSERVE's internal operations, suggest the user contact the team directly.`;

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
