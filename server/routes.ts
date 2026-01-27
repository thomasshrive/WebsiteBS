import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertOnboardingSchema, contactSchema } from "@shared/schema";
import { z } from "zod";

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

  return httpServer;
}
